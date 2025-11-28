const express = require("express");
const router = express.Router();

// "Base de datos" en memoria
let usuarios = [
    { id: 1, nombre: "Mauricio" }
];

// GET - Obtener todos los usuarios
router.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

// GET - Obtener un usuario por id
router.get("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json(usuario);
});

// POST - Crear usuario
router.post("/usuarios", (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ mensaje: "El nombre es obligatorio" });
    }

    const nuevo = {
        id: usuarios.length + 1,
        nombre
    };

    usuarios.push(nuevo);
    res.status(201).json(nuevo);
});

// PUT - Actualizar usuario
router.put("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;

    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    usuario.nombre = nombre ?? usuario.nombre;

    res.json(usuario);
});

// DELETE - Eliminar usuario
router.delete("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const existe = usuarios.some(u => u.id === id);

    if (!existe) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    usuarios = usuarios.filter(u => u.id !== id);

    res.json({ mensaje: "Usuario eliminado" });
});

module.exports = router;
























// const express = require("express");
// const router = express.Router();

// // Ruta GET
// router.get("/saludo", (req, res) => {
//     res.json({ mensaje: "Hola desde el router!" });
// });

// // Ruta POST
// router.post("/saludo", (req, res) => {
//     const { nombre } = req.body;
//     res.json({ mensaje: `Hola ${nombre}, POST recibido correctamente` });
// });

// module.exports = router;