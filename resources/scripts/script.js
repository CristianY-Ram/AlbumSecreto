// SCRIPT
"use strict";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';


const supabase = createClient('https://tu-proyecto.supabase.co', 'tu-anon-key');

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
