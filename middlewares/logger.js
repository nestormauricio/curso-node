const logger = (req, res, next) => {
    const metodo = req.method;
    const ruta = req.originalUrl;
    const fecha = new Date().toISOString();

    console.log(`[${fecha}] ${metodo} ${ruta}`);

    next();
};

module.exports = logger;