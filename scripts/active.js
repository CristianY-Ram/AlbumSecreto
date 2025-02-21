import Start from '/scripts/start.js';
const start = new Start();

start.RegistrarSW(); // Registra el Service Worker
start.ActualizarPantalla(); // Actualiza la pantalla según la URL actual

document.querySelectorAll('a').forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault();
    const ruta = e.target.getAttribute('href');
    start.CargarPantalla(ruta); // Navega a la ruta especificada sin recargar la página
  });
});




// Función para el menú desplegable
function moverNav() {
  var menu = document.getElementById("Menu");
  if (menu.classList.contains("abrir")) {
    menu.classList.remove("abrir");
  } else {
    menu.classList.add("abrir");
  }
}

// Manejar el scroll suave y cierre del menú
document.addEventListener('DOMContentLoaded', function() {
  const enlaces = document.querySelectorAll('#ListaIndices a');
  
  enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Obtener el ID de la sección sin el #
      const seccionId = this.getAttribute('href').substring(1);
      const seccion = document.getElementById(seccionId);
      
      if (seccion) {
        // Cerrar el menú
        document.getElementById("Menu").classList.remove("abrir");
        
        // Scroll suave a la sección
        seccion.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});