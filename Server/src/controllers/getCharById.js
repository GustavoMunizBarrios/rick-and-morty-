const axios = requiere('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data) //respuesta del axios 
    //una vez que tenemos la respuesta se crea un objeto con las propiedades: id (se recibe por parametro), name, gender, species, origin, image y status
    .then(({name, gender, species, origin, image, status }) => { // se hace destructuring
        const character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        //devuelve la respuesta en formato JSON y status igual a 200 con el personaje que se obtuvo
        return res
                .writeHead(200, {"Content-type":"application/json"})//"Content-type":"application/json" es el tipo de formato de la respuesta
                .end(JSON.stringify(character))
    })
    //catch para manejar el error 
    .catch(error => {
        return res.writeHead(500, {"Content-type":"text/plain"}).error(error.message)
    })

}

module.exports = {

    getCharById
}