/*  Este archivo configura y levanta un servidor Express en el puerto 3001 y 
exporta ese servidor para que pueda ser utilizado en otros archivos.  */

const server =require('./app')// Importa el módulo 'app' desde el archivo app.js y lo asigna a la variable server
const PORT = 3001 //Define el número de puerto en el que se ejecutará el servidor
const {conn} = require('./DB_connection') //importa la instancia de sequelize (en este caso se llama conn)

//sincronizamos/conectamos la instancia de sequelize con nuestra DB
//Cuando force esta en false se mantiene la persistencia de datos, incluso cuando se cierre el servidor.
//Cuando esta en true los datos se borran si el servidor se cierra.
conn.sync({force:true})

//Inicia el servidor y lo pone en escucha en el puerto 3001, cuando se recibe una solicitud en ese puerto, se ejecutará el console.log
server.listen(PORT, () =>  console.log(`Server raised in port: ${PORT}`));

module.exports = server;
