// Archivo "resources/scripts/script.js"

const BACKEND_URL = 'https://3b137d11-88e6-45b6-be60-61724ad3e15c-00-2gjo5xa8flqk3.worf.replit.dev';


// Modal functionality
const modal = document.getElementById('registerModal');
const showRegisterBtn = document.getElementById('showRegister');
const closeBtn = document.getElementsByClassName('close')[0];

showRegisterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
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
            // Deshabilitar el formulario de cuenta
            const createForm = document.getElementById('createForm');
            createForm.classList.add('disabled-form');
            createForm.style.display = 'none';
            
            // Habilitar el formulario de perfil
            const profileForm = document.getElementById('profileForm');
            profileForm.classList.remove('disabled-form');
            const inputs = profileForm.getElementsByTagName('input');
            const textarea = profileForm.getElementsByTagName('textarea');
            const button = profileForm.getElementsByTagName('button')[0];
            
            // Habilitar todos los campos del formulario de perfil
            for(let input of inputs) {
                input.disabled = false;
            }
            for(let area of textarea) {
                area.disabled = false;
            }
            button.disabled = false;
            
            // Pre-llenar el nombre de usuario con el email sin el dominio
            const username = document.getElementById('username');
            username.value = email.split('@')[0];
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



// Manejar la creación del perfil
document.getElementById('buttonCrearPerfil').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const displayName = document.getElementById('displayName').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;
    const interests = document.getElementById('interests').value;

    if (!username || !displayName) {
        alert('El nombre de usuario y el nombre del perfil son obligatorios.');
        return;
    }

    // Aquí puedes agregar la lógica para enviar los datos del perfil al servidor
    // Por ahora, solo redirigiremos a la página de perfil
    window.location.href = 'perfil.html';
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