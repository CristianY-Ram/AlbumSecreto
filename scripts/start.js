export default class Start {
  
  constructor(rutas) {
    this.Rutas = rutas || {
      '/': '/pages/main.html',
      '/Principal': '/pages/main.html',
      '/Registro': '/pages/register.html',
      '/Perfil': '/pages/profile.html',
      '/Ajustes': '/pages/backend.html',
      '/404': '/pages/404.html'
    };
  }
  
  RegistrarSW() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/scripts/serviceWorker.js').then(reg => {
          console.log('Service Worker registrado: ', reg);
        }).catch(err => {
          console.error('Registro de Service Worker fallido: ', err);
        });
      });
    }
  }
  
  async CargarPantalla(enlace) {
    const dirPantalla = this.Rutas[enlace] || this.Rutas['/404'];
    try {
      const respuesta = await fetch(dirPantalla);
      if (!respuesta.ok) throw new Error('Página no encontrada');
      const cuerpo = await respuesta.text();
      document.getElementById('BODY').innerHTML = cuerpo;
      window.history.pushState({}, '', enlace);
      localStorage.setItem('UltimaVisita', enlace);
    } catch (error) {
      console.error('Ocurrió un error al cargar la pantalla:', error);
    }
  }
  
  ActualizarPantalla() {
    const url = window.location.pathname;
    this.CargarPantalla(url);
  }
  
}