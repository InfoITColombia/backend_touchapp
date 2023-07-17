const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors  = require("cors");

// Configurar variables de entorno desde .env
dotenv.config();

// Configurar middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Conectar rutas con controladores

app.use('/touchapp', require('./app/routes/usuarioRoute'));

const port = process.env.PORT || 3002;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor API corriendo en el puerto ${port}`);
});