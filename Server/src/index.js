//Cambiar todo esto
const express = require('express')
const server = express()
const router = require('routes/index')
const PORT = 3001

server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        '');
})

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
})