const http = require('http'); //importar http desde el modulo http
const {getCharById} = require('./controllers/getCharById')

http.createServer((request, response)=>{ //crea el servidor
    response.setHeader('Access-Control-Allow-Origin', '*'); //esta linea le da permisos al fronted de que pueda hacer peticiones.

    if(request.url.includes('/rickandmorty/character')){
        const id = request.url.split('/').at(-1);
        getCharById(res, +id)
    }

})
.listen(3001/* , 'localhost' */) //levanta el servidor en el puerto 3001