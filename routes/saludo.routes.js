const express = require("express");
const router = express.Router();

// Ruta GET
router.get("/saludo", (req, res) => {
    res.json({ mensaje: "Hola desde el router!" });
});

// Ruta POST
router.post("/saludo", (req, res) => {
    const { nombre } = req.body;
    res.json({ mensaje: `Hola ${nombre}, POST recibido correctamente` });
});

module.exports = router;