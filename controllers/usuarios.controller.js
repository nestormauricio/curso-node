const Usuario = require("../models/usuario.model");

// Obtener todos
const obtenerUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

// Obtener por ID
const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }
        res.json(usuario);
    } catch (error) {
        res.status(400).json({ mensaje: "ID inválido" });
    }
};

// Crear
const crearUsuario = async (req, res) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            return res.status(400).json({ mensaje: "El nombre es obligatorio" });
        }

        const nuevo = await Usuario.create({ nombre });
        res.status(201).json(nuevo);

    } catch (error) {
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};

// Actualizar
const actualizarUsuario = async (req, res) => {
    try {
        const { nombre } = req.body;

        const actualizado = await Usuario.findByIdAndUpdate(
            req.params.id,
            { nombre },
            { new: true }
        );

        if (!actualizado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json(actualizado);

    } catch (error) {
        res.status(400).json({ mensaje: "ID inválido" });
    }
};

// Eliminar
const eliminarUsuario = async (req, res) => {
    try {
        const eliminado = await Usuario.findByIdAndDelete(req.params.id);

        if (!eliminado) {
            return res.status(404).json({ mensaje: "Usuario no encontrado" });
        }

        res.json({ mensaje: "Usuario eliminado" });

    } catch (error) {
        res.status(400).json({ mensaje: "ID inválido" });
    }
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};
























// const UsuarioModel = require("../models/usuario.model");

// const obtenerUsuarios = (req, res) => {
//     res.json(UsuarioModel.obtenerTodos());
// };

// const obtenerUsuarioPorId = (req, res) => {
//     const id = parseInt(req.params.id);
//     const usuario = UsuarioModel.obtenerPorId(id);

//     if (!usuario) {
//         return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     }
//     res.json(usuario);
// };

// const crearUsuario = (req, res) => {
//     const { nombre } = req.body;

//     if (!nombre) {
//         return res.status(400).json({ mensaje: "El nombre es obligatorio" });
//     }

//     const nuevo = UsuarioModel.crear(nombre);
//     res.status(201).json(nuevo);
// };

// const actualizarUsuario = (req, res) => {
//     const id = parseInt(req.params.id);
//     const { nombre } = req.body;

//     const actualizado = UsuarioModel.actualizar(id, nombre);
//     if (!actualizado) {
//         return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     }

//     res.json(actualizado);
// };

// const eliminarUsuario = (req, res) => {
//     const id = parseInt(req.params.id);

//     const ok = UsuarioModel.eliminar(id);
//     if (!ok) {
//         return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     }

//     res.json({ mensaje: "Usuario eliminado" });
// };

// module.exports = {
//     obtenerUsuarios,
//     obtenerUsuarioPorId,
//     crearUsuario,
//     actualizarUsuario,
//     eliminarUsuario
// };





















// // "Base de datos" en memoria
// let usuarios = [
//     { id: 1, nombre: "Mauricio" }
// ];

// const obtenerUsuarios = (req, res) => {
//     res.json(usuarios);
// };

// const obtenerUsuarioPorId = (req, res) => {
//     const id = parseInt(req.params.id);
//     const usuario = usuarios.find(u => u.id === id);

//     if (!usuario) {
//         return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     }

//     res.json(usuario);
// };

// const crearUsuario = (req, res) => {
//     const { nombre } = req.body;

//     if (!nombre) {
//         return res.status(400).json({ mensaje: "El nombre es obligatorio" });
//     }

//     const nuevo = {
//         id: usuarios.length + 1,
//         nombre
//     };

//     usuarios.push(nuevo);
//     res.status(201).json(nuevo);
// };

// const actualizarUsuario = (req, res) => {
//     const id = parseInt(req.params.id);
//     const { nombre } = req.body;

//     const usuario = usuarios.find(u => u.id === id);

//     if (!usuario) {
//         return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     }

//     usuario.nombre = nombre ?? usuario.nombre;

//     res.json(usuario);
// };

// const eliminarUsuario = (req, res) => {
//     const id = parseInt(req.params.id);

//     const existe = usuarios.some(u => u.id === id);
//     if (!existe) {
//         return res.status(404).json({ mensaje: "Usuario no encontrado" });
//     }

//     usuarios = usuarios.filter(u => u.id !== id);

//     res.json({ mensaje: "Usuario eliminado" });
// };

// module.exports = {
//     obtenerUsuarios,
//     obtenerUsuarioPorId,
//     crearUsuario,
//     actualizarUsuario,
//     eliminarUsuario
// };