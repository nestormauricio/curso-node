const express = require("express");
const app = express();

app.use(express.json());

// Importar router
const saludoRouter = require("./routes/saludo.routes");

// Usar router
app.use("/", saludoRouter);

app.listen(3000, () => {
    console.log("API corriendo en http://localhost:3000");
});

















//Este valida si tiene o no el json en el body
// const express = require('express');
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get('/ping', (req, res) => {
//   res.json({ message: 'pong' });
// });

// app.post('/saludo', (req, res) => {
//   const { nombre } = req.body || {};

//   if (!nombre) {
//     return res.status(400).json({ error: 'El campo nombre es obligatorio' });
//   }

//   res.json({ mensaje: `Hola, ${nombre}` });
// });


// app.listen(port, () => {
//   console.log(`API corriendo en http://localhost:${port}`);
// });






















//Este funcionó pero había que enviar el json {"nombre": "Mauricio"}
// const express = require('express');
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get('/ping', (req, res) => {
//   res.json({ message: 'pong' });
// });

// app.post('/saludo', (req, res) => {
//   const { nombre } = req.body;
//   res.json({ mensaje: `Hola, ${nombre}` });
// });

// app.listen(port, () => {
//   console.log(`API corriendo en http://localhost:${port}`);
// });
























// const express = require('express');
// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get('/ping', (req, res) => {
//   res.json({ message: 'pong' });
// });

// app.listen(port, () => {
//   console.log(`API corriendo en http://localhost:${port}`);
// });

// app.post('/saludo', (req, res) => {
//   const { nombre } = req.body;
//   res.json({ mensaje: `Hola, ${nombre}` });
// });