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

document.getElementById('Haks').addEventListener('click', function(e) {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

});
