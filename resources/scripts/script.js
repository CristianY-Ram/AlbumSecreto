// Archivo SCRIPT

document.querySelectorAll('.changeForm').forEach(button => {
    button.addEventListener('click', function(e) {
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
});

document.getElementById('buttonCrearCuenta').addEventListener('click', function(e) {
    const email = document.getElementById('correo').value;
    const password = document.getElementById('createclave').value;

    // Validar longitud del email
    if (email.length < 5 || email.length > 50) {
        alert('El correo debe tener entre 5 y 50 caracteres.');
        return;
    }

    // Validar formato del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar longitud de la contraseña
    if (password.length < 6 || password.length > 20) {
        alert('La contraseña debe tener entre 6 y 20 caracteres.');
        return;
    }

    // Enviar datos al servidor
    enviarDatosAlServidor(email, password);
});




document.getElementById('Haks').addEventListener('click', function(e) {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

});
