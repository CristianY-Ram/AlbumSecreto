// Archivo "resources/scripts/script.js"

const BACKEND_URL = 'https://3b137d11-88e6-45b6-be60-61724ad3e15c-00-2gjo5xa8flqk3.worf.replit.dev';


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
            // También limpiar valores del formulario 'createForm'
        }
    });
});
function Enviar(email, password) { // explica cada término de esta función a profundidad
    console.log('Enviando datos:', { email, password });
    fetch(`${BACKEND_URL}/sb/CrearCuenta`, {
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

    if (email.length < 5 || email.length > 50) {
        alert('El correo debe tener entre 5 y 50 caracteres.');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }
    if (password.length < 6 || password.length > 25) {
        alert('La contraseña debe tener entre 6 y 25 caracteres.');
        return;
    }
    Enviar(email, password);
});



document.getElementById('VerificarEstadoServidor').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace navegue a otra página

    fetch(`${BACKEND_URL}/server/Estado`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Estado del servidor:', data);
            alert('Estado del servidor: ' + JSON.stringify(data));
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error en la consulta del estado del servidor: ' + error.message);
        });
});