// ARCHIVO "controllers/managerSB.js"

const {
    AccederSBS
} = require('../services/SBClient');

const CrearCuenta = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const date = new Date();
    const username = email.split('@')[0];

    try {
        const {
            data,
            error
        } = await AccederSBS
        .from('Cuentas')
        .insert([{
             username: username, email: email, password: password, date: date
        }]).select();
        if (error) {
            throw error;
        }

        console.log('Datos insertados:', data);
        res.status(200).json({
            success: true, message: 'Cuenta creada exitosamente', data: data
        });
} catch (error) {
        console.error('Error al crear la cuenta:', error.message);
        res.status(500).json({
            success: false, message: 'Error al crear la cuenta', error: error.message
        });
    }
};

const CrearArchivo = async (req, res) => { // Función Borrador para no olvidar como se crear un archivo.
    const nombre = req.body.nombreArchivo || 'Randon';
    const contenido = 'Este es un archivo de prueba generado desde el código.';

    try {
        const {
            data,
            error
        } = await AccederSBS.storage
        .from('DatosPerfiles')
        .upload(`Pruebita/${nombre}.txt`, Buffer.from(contenido), {
            cacheControl: '3600',
            upsert: false,
            contentType: 'text/plain'
        });

        if (error) {
            throw error;
        }

        res.status(200).send(`Archivo ${nombre}.txt creado exitosamente`);
    } catch (error) {
        console.error('Error al crear el archivo:', error.message);
        res.status(500).send('Error al crear el archivo');
    }
}; // Advertencia: Ciertas líneas de esta función todavía no cumplen con las normativas.

const IniciarCuenta = async (req, res) => {
    const { identificacion, clave } = req.body;

    try {
        const { data, error } = await AccederSBS
            .from('Cuentas')
            .select('link')
            .or(`id.eq.${identificacion},username.eq.${identificacion},email.eq.${identificacion}`)
            .eq('password', clave)
            .single();

        if (error) throw error;

        if (data) {
            res.status(200).json({
                success: true,
                message: 'Inicio de sesión exitoso',
                link: data.link
            });
        } else {
            res.status(401).json({
                success: false,
                message: 'Credenciales inválidas'
            });
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error en el servidor',
            error: error.message
        });
    }
};

const ActualizarCuenta = async (req, res) => {
    const { email, clave, actualizaciones } = req.body;

    try {
        // Primero verificamos las credenciales
        const { data: cuenta, error: errorVerificacion } = await AccederSBS
            .from('Cuentas')
            .select()
            .eq('email', email)
            .eq('password', clave)
            .single();

        if (errorVerificacion || !cuenta) {
            return res.status(401).json({
                success: false,
                message: 'Credenciales inválidas'
            });
        }

        // Actualizamos los datos
        const { data, error } = await AccederSBS
            .from('Cuentas')
            .update(actualizaciones)
            .eq('email', email)
            .select();

        if (error) throw error;

        res.status(200).json({
            success: true,
            message: 'Cuenta actualizada exitosamente',
            data: data
        });
    } catch (error) {
        console.error('Error al actualizar cuenta:', error.message);
        res.status(500).json({
            success: false,
            message: 'Error al actualizar cuenta',
            error: error.message
        });
    }
};

module.exports = {
    CrearArchivo,
    CrearCuenta,
    IniciarCuenta,
    ActualizarCuenta
};