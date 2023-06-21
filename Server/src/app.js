//Este archivo importa express e inicializa un nuevo servidor, Tambien agrega middlewares.
//---------------------- Middleware ----------------------------
const express = require('express'); // Importa el módulo 'express' que proporciona funcionalidades para crear y configurar el servidor.
// Crea una instancia del servidor utilizando el módulo express. 
// La variable "server" representa el servidor que se configurará y ejecutará 
const server = express();
const router = require('./routes/index');//Importa el módulo de enrutamiento en donde se definen las rutas de la aplicación.

//"morgan" registra información útil, como el método HTTP utilizado (GET, POST, etc.), la URL solicitada,
//la hora en que se recibió la solicitud y el tiempo de respuesta, entre otros detalles.
const morgan = require('morgan');

// Middleware que ejecuta a express.json().
//Este middleware se utiliza para analizar el cuerpo de las solicitudes entrantes en formato JSON y lo convierte en un 
//objeto de JavaScript para que pueda ser trabajado fácilmente en las rutas y controladores.
server.use(express.json());  // La información que llega en formato json la pasa a objeto de JS, para que la pueda trabajar

server.use(morgan('dev'));

// Configura un middleware que agrega encabezados de acceso a control (Access-Control) a las respuestas del servidor. 
//Estos encabezados permiten controlar el acceso a los recursos del servidor desde un dominio diferente y definir los métodos HTTP permitidos.
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