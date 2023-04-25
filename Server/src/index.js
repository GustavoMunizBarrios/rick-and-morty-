//Cambiar todo esto
const express = require('express')
const server = express()
const PORT = 3001
const router = require('./routes/index')

// Middleware que ejecuta a express.json().
server.use(express.json());  // La información que llega en formato json la pasa a objeto de JS, para que la pueda trabajar

//---------------------- Middleware ----------------------------
//Le da permiso al front, para que pueda acceder a nuestras rutas
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST OPTIONS, PUT, DELETE'
    );
    next();
});
//-----------------------------------------------------------------------

//Middleware que agrega el string "/rickandmorty" antes de cada una de las rutas
server.use("/rickandmorty", router) // primer parámetro el path, segundo donde estan todas las rutas

server.listen(PORT, () => { //Crear el servidor en express en el puerto 3001
    console.log(`Server raised in port: ${PORT}`);
})