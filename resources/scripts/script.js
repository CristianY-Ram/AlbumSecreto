// Archivo "resources/styles/script.js"

document.querySelectorAll('.changeForm').forEach(button => {
    button.addEventListener('click', function(e) {
        const loginForm = document.getElementById('loginForm');
        const createForm = document.getElementById('createForm');
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            createForm.style.display = 'none';
            // También limpiar valores del formulario actual
        } else {
            loginForm.style.display = 'none';
            createForm.style.display = 'block';
            // También limpiar valores del formulario actual
        }
    });
});
function Enviar(email, password) { // explica cada término de esta función a profundidad
    console.log('Enviando datos:', { email, password });
    fetch('https://backendprivate.onrender.com/sb/CrearCuenta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        console.log('Respuesta recibida:',
            response);
        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos recibidos:', data);
        if (data.success) {
            alert('Cuenta creada exitosamente.');
        } else {
            alert('Error al crear la cuenta: ' + (data.message || 'Ocurrió un problema inesperado.'));
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error en la solicitud: ' + error.message);
    });
}

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
    Enviar(email, password);
});