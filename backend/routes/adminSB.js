// ARCHIVO "routes/adminSB.js"
const express = require('express');
const router = express.Router();

router.post('/CrearCuenta', require('../controllers/managerSB').CrearCuenta);
router.post('/prueba', require('../controllers/managerSB').CrearArchivo);
router.post('/IniciarCuenta', require('../controllers/managerSB').IniciarCuenta);
router.put('/ActualizarCuenta', require('../controllers/managerSB').ActualizarCuenta);

module.exports = router;