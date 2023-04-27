const server =require('./app')
const PORT = 3001

server.listen(PORT, () => { //Crear el servidor en express en el puerto 3001
    console.log(`Server raised in port: ${PORT}`);
})