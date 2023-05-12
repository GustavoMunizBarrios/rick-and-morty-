
//---------------------- Middleware ----------------------------
const express = require('express');
const server = express();
const router = require('./routes/index');

//"morgan" registra información útil, como el método HTTP utilizado (GET, POST, etc.), la URL solicitada,
//la hora en que se recibió la solicitud y el tiempo de respuesta, entre otros detalles.
const morgan = require('morgan');

// Middleware que ejecuta a express.json().
server.use(express.json());  // La información que llega en formato json la pasa a objeto de JS, para que la pueda trabajar
server.use(morgan('dev'));

//Le da permiso al front, para que pueda acceder a nuestras rutas
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});
//-----------------------------------------------------------------------

//Middleware que agrega el string "/rickandmorty" antes de cada una de las rutas
server.use("/rickandmorty", router) // primer parámetro el path, segundo donde estan todas las rutas
module.exports = server;