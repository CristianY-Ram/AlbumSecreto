  document.addEventListener('DOMContentLoaded', () => {
      const usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
      const primeraVez = !localStorage.getItem('visitado');
      const tieneNotificaciones = localStorage.getItem('notificaciones');
      
      function redirigir(url) {
        setTimeout(() => {
          window.history.pushState({}, '', url);
          window.location.href = url;
        }, 800); // 800 milisegundos = 0.8 segundos
      }
      
      const ruta = window.location.pathname;
      
      if (primeraVez) {
        localStorage.setItem('visitado', 'true');
        redirigir('/pages/main.html');
      } else if (usuarioAutenticado) {
        if (tieneNotificaciones) {
          redirigir('/pages/notifications.html');
        } else {
          redirigir('/pages/profile.html');
        }
      } else if (ruta === '/registro') {
        redirigir('/pages/register.html');
      } else if (ruta === '/inicio') {
        redirigir('/pages/main.html');
      } else if (ruta === '/perfil') {
        redirigir('/pages/profile.html');
      } else {
        redirigir('/pages/main.html');
      }
    });
    
    
     if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(reg => {
          console.log('Service Worker registrado: ', reg);
        }).catch(err => {
          console.error('Registro de Service Worker fallido: ', err);
        });
      });
    }
    window.location.href = '/pages/main.html';