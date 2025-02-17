# **Tareas y Objetividad**
_Este archivo funciona como bloc de notas sobre el proyecto y avances, o tareas pendientes por completar._
---

## ESTRUCTURA:
_Carpeta Raiz del Proyecto_

ÁlbumSecreto/
- resources/    `Recursos Estáticos`
    - images/           `Imágenes`
        - album.jpg         `Imagen Album`
    - icons/            `Iconos`
        - android192.png    `Android Low`
        - android512.png    `Android Medium`
        - apple.png         `Apple Low`
        - favicon.ico       `Pestaña High`
        - favicon16.png     `Pestaña Low`
        - favicon32.png     `Pestaña Medium`
    - background/       `Fondos`
        - dreambook.jpg     `Libro de ensueño`
- pages/        `Archivos HTML`
    - main.html         `Página Principal`
    - ingresar.html     `Modal Iniciar Seción`
    - register.html     `Página Registro`
    - profile.html      `Página Perfil`
    - backend.html      `Página Backend`
- styles/       `Archivos CSS`
    - general.css       `Estilos Generales`
    - themes/           `Temas de Estilos`
        - dark.css          `Tema Oscuro`
- scripts/      `Archivos Javascript`
    - active.js         `Codigo Principal`
    - functions.js      `Código de Funciones`
    - apis.js           `Llamadas a APIs`
- backend/      `Directorio del Backend`
    - routes/          `Rutas del Servidor`
    - controllers/     `Controladores del Servidor`
    - models/          `Modelos del Servidor`
    - services/        `ServiciosPlanificación`
    - package.json     `Paquete del Servidor`
    - server.js        `Archivo Princ. del Servidor`
    - app.js           `Aplicación de Servidor`
    - README.md        `Descripción y Intrucciones del Servidor`
- index.html    `Archivo HTML Principal`
- manifest.json `Manifiesto PWA`
- sw.js         `Service Worker`
- README.md     `Descripción y Intrucciones`
- TASK.md       `Estructura y Planificación (Este Archivo)`

## DOCUMENTACIÓN
_Al Acceder a [AlbumSecreto.com],AlbumSecreto.com, se abrirá `index.html` que contiene la Página Principal del Sitio._
_`main.html`: Página HTML que introduce a nuevos usuarios al sitio web Álbum Secreto, Costa con una interfaz agradable con su Navegación, Descripción, Introducción y Funciones importantes_
### Elementos:
**Imagen** `album.jpg` y **Título del Sitio** `Album Secreto`.
**Sistema de Navegación** por un menú lateral dinámico `MenuIndex`.
Comportamiento: Al pulsar sobre el símbolo de menú se despliega deslizándose desde el lateral, al pulsar sobre la X se recoge de la misma forma.
Función: Al pulsar sobre cualquier índice se te dirigirá directamente a esa sección.
**Sección** `Introducción`
breve descripción y propósito.

**Sección** `Cuenta`
llamada a la acción para crear una cuenta y empezar a usar el servicio.

**Sección** `Funciones`
explica cómo se usa y objetivos.

**Sección** `Características`
explica las características importantes del sitio

**Sección** `Terminos`
términos de privacidad, uso y confidencialidad.

**Sección** `Sugerencias`
Respuesta a Pregunta y Comentarios de otros usuarios.
Soporte a problemas Técnicos.

**Sección** `Información`
Información de Contacto, Redes Sociales y Enlaces externos.