// ARCHIVO "app.js"

const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: '*', // La URL en process.env.CORS_ORIGIN no funciona.
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/server', require('./routes/servidor'));
app.use('/sb', require('./routes/adminSB'));

app.use('/', (req, res) => {
  res.status(200).json({ message: 'Servidor Funcionando' });
});

app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});



app.use((err, req, res, next) => {
    const origin = req.headers.origin || req.headers.referer || 'Origen no disponible'; // Investigar porque tantos orígenes
    console.error(`Solicitud fallida: Método: (${req.method}) URL: (${req.url}) Origen: (${req.headers.origin})`, err); // Cambio de Origen sin Probar
    res.status(500).send('Error en el servidor');
});

module.exports = app;