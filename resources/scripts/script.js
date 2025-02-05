document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes añadir la lógica para validar el usuario
    if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
        // Redirigir a la sección privada
        window.location.href = 'seccion-privada.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});



