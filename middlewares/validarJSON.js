const validarJSON = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ mensaje: "El body JSON no puede estar vacío" });
    }

    next();
};

module.exports = validarJSON;