// "Base de datos" en memoria
let usuarios = [
    { id: 1, nombre: "Mauricio" }
];

const obtenerUsuarios = (req, res) => {
    res.json(usuarios);
};

const obtenerUsuarioPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    res.json(usuario);
};

const crearUsuario = (req, res) => {
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
};

const actualizarUsuario = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    usuario.nombre = nombre ?? usuario.nombre;

    res.json(usuario);
};

const eliminarUsuario = (req, res) => {
    const id = parseInt(req.params.id);

    const existe = usuarios.some(u => u.id === id);
    if (!existe) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    usuarios = usuarios.filter(u => u.id !== id);

    res.json({ mensaje: "Usuario eliminado" });
};

module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
};