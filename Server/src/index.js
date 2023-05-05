const server =require('./app')
const PORT = 3001

server.listen(PORT, () => { //Crear el servidor en express en el puerto 3001
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