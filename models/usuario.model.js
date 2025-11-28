let usuarios = [
    { id: 1, nombre: "Mauricio" }
];

class UsuarioModel {

    static obtenerTodos() {
        return usuarios;
    }

    static obtenerPorId(id) {
        return usuarios.find(u => u.id === id);
    }

    static crear(nombre) {
        const nuevo = {
            id: usuarios.length + 1,
            nombre
        };
        usuarios.push(nuevo);
        return nuevo;
    }

    static actualizar(id, nombre) {
        const usuario = usuarios.find(u => u.id === id);
        if (!usuario) return null;

        usuario.nombre = nombre ?? usuario.nombre;
        return usuario;
    }

    static eliminar(id) {
        const existe = usuarios.some(u => u.id === id);
        if (!existe) return false;

        usuarios = usuarios.filter(u => u.id !== id);
        return true;
    }

}

module.exports = UsuarioModel;