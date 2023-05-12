/*  Este archivo configura y levanta un servidor Express en el puerto 3001 y 
exporta ese servidor para que pueda ser utilizado en otros archivos.  */

const server =require('./app')// Importa el módulo 'app' desde el archivo app.js y lo asigna a la variable server
const PORT = 3001 //Define el número de puerto en el que se ejecutará el servidor

server.listen(PORT, () => { //Inicia el servidor y lo pone en escucha en el puerto 3001, 
  // cuando se recibe una solicitud en ese puerto, se ejecutará el console.log
    console.log(`Server raised in port: ${PORT}`);
});

module.exports = server;
/* const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { 
  console.log(`Servidor escuchando en el puerto ${PORT}`); 
}); */

//process.setMaxListeners(20);