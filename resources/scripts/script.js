// Archivo SCRIPT


document.getElementById('changeForm').addEventListener('click', function(e) {
    const loginForm = document.getElementById('loginForm');
    const createForm = document.getElementById('createForm');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        createForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        createForm.style.display = 'block';
    }
});

    


document.getElementById('tituloInicioSesion').textContent = 'Nuevo Título';

document.getElementById('iniciarButton').addEventListener('click', function(e) {
    // Acción para el botón de iniciar
});




function mostrarFormularioCrearCuenta() {
    const loginSection = document.getElementById('login');
    loginSection.innerHTML = `
        <form id="createAccountForm">
            <h2>Crear Cuenta</h2>
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Crear Cuenta</button>
        </form>
    `;
    document.getElementById('createAccountForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        CrearCuenta(email, password);
    });
}









// Función para guardar usuario y contraseña
async function CrearCuenta(username, password) {
    const {
        data,
        error
    } = await supabase.from('Cuentas').insert([{
            Usuario: username, Contraseña: password
        }]);

    if (error) {
        console.error('Error al guardar las credenciales:', error);
    } else {
        console.log('Credenciales guardadas exitosamente:', data);
        window.location.href = 'seccion-privada.html';
    }
}




async function IniciarSeccion(username, password) {
    const {
        data,
        error
    } = await supabase.from('Cuentas').select('*').eq('Usuario', username).eq('Contraseña', password);

    if (error) {
        console.error('Error al verificar las credenciales:', error.message);
        return false;
    } else if (data.length > 0) {
        console.log('Credenciales correctas:', data);
        return true;
    } else {
        console.log('Credenciales incorrectas');
        return false;
    }

}




/* Escucha evento submit del form */
document.getElementById('loginForm').addEventListener('Crear', function(e) {
    /* Previene envío por defecto */
    e.preventDefault();

    /* Obtiene valores de campos */
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    CrearCuenta(username, password);


    
 //   IniciarSeccion(username, password).then(isValid => {
   //     if (isValid) {
 //           alert('Inicio de sesión exitoso');
  //          window.location.href = 'seccion-privada.html';
 //       } else {
  //          alert('Nombre de usuario o contraseña incorrectos');
  //      }
 //   }
    });
