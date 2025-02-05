
/* Escucha evento submit del form */
document.getElementById('loginForm').addEventListener('submit', function(e) {
    /* Previene envío por defecto */
    e.preventDefault();

    /* Obtiene valores de campos */
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    /* Valida credenciales */
    if (username === 'usuario' && password === 'contraseña') {
        /* Muestra mensaje de éxito */
        alert('Inicio de sesión exitoso');
        /* Redirecciona a área privada */
        window.location.href = 'seccion-privada.html';
    } else {
        /* Muestra error */
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
