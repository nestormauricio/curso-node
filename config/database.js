const mongoose = require("mongoose");

const conectarDB = async (uri) => {
    try {
        await mongoose.connect(uri);
        console.log("📌 Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("❌ Error al conectar a MongoDB:", error);
        process.exit(1);
    }
};

module.exports = conectarDB;
























// const mongoose = require("mongoose");

// const conectarDB = async () => {
//     try {
//         await mongoose.connect("mongodb://localhost:27017/curso-node");
//         console.log("📌 Conexión a MongoDB exitosa");
//     } catch (error) {
//         console.error("❌ Error al conectar a MongoDB:", error.message);
//         process.exit(1); // Cierra la app si falla
//     }
// };

// module.exports = conectarDB;