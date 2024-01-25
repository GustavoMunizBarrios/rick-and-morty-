/*  Este archivo configura y levanta un servidor Express en el puerto 3001 y 
exporta ese servidor para que pueda ser utilizado en otros archivos.  */

const server =require('./app')// Importa el módulo 'app' desde el archivo app.js y lo asigna a la variable server
const PORT = process.env.PORT || 3001 //Define el número de puerto en el que se ejecutará el servidor
const {conn} = require('./DB_connection') //importa la instancia de sequelize (en este caso se llama conn)

//sincronizamos/conectamos la instancia de sequelize con nuestra DB
//Cuando force esta en false se mantiene la persistencia de datos, incluso cuando se cierre el servidor.
//Cuando esta en true los datos se borran si el servidor se cierra.
//conn.sync({force:false})

//Inicia el servidor y lo pone en escucha en el puerto 3001, cuando se recibe una solicitud en ese puerto, se ejecutará el console.log
//server.listen(PORT,"0.0.0.0", () =>  console.log(`Server raised in port: ${PORT}`));

// Función asíncrona para iniciar el servidor y la base de datos
async function startServer() {
  try {
    // Sincronizamos la base de datos
    await conn.sync({ force: false });
    console.log('Database synced!');

    // Iniciamos el servidor
    server.listen(PORT, "0.0.0.0", () => console.log(`Server raised in port: ${PORT}`));
  } catch (error) {
    console.error('Unable to start the server:', error);
  }
}

startServer();

module.exports = server;
