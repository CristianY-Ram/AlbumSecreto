// ARCHIVO "routes/servidor.js"
const express = require('express');
const router = express.Router();


router.get('/Estado', (req, res) => {
    res.status(200).json({ success: true , message: 'Servidor activo' });
});

module.exports = router;