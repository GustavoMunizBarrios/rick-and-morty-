//Cambiar todo esto
const express = require('express')
const server = express()
const PORT = 3001
const router = require('routes/index')

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        '');
})

server.listen(PORT, () => { //Crear el servidor en express en el puerto 3001
    console.log(`Server raised in port: ${PORT}`);
})