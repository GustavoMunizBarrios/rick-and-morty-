const http = require('http'); //importar http desde el modulo http
const data =require('./utils/data'); // data es el array de objetos con los personajes

http.createServer((request, response)=>{ //crea el servidor
    response.setHeader('Access-Control-Allow-Origin', '*'); //esta linea le da permisos al fronted de que pueda hacer peticiones.

    if(request.url.includes('/rickandmorty/character')){ //verifica que la url incluye el string '/rickandmorty/character'
        console.log(request.url); //  /rickandmorty/character
        const id = request.url.split('/').at(-1) //se queda con el id del final (en formato string)
        // el metodo find busca el elemento indicado y lo devuelve 
        //en este caso busca el character que tenga un id igual al que se paso en la url y lo guarda en characterFound
        const characterFound = data.find((character) => {
            return character.id === +id  // para parsear de string a numero +
        })
        //Envia como respuesta un JSON que contenga al personaje:
        // JSON.stringify convierte la información a formato JSON
        response.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(characterFound))
    }
})
.listen(3001/* , 'localhost' */) //levanta el servidor en el puerto 3001