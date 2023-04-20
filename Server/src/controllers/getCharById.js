const axios = requiere('axios');

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`) //Petición a la API de rick and morty
    .then(response => response.data) //respuesta del axios 
    //una vez que tenemos la respuesta se crea un objeto con las propiedades: id (se recibe por parametro), name, gender, species, origin, image y status
    .then(({name, gender, species, origin, image, status }) => { // se hace destructuring de data, o sea de la respuesta.
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
                // envía la respuesta HTTP al cliente con la información del objeto "character" en formato JSON
                .end(JSON.stringify(character)) //JSON.stringify() se utiliza para convertir el objeto "character" a formato JSON.
    })
    //catch para manejar el error 
    .catch(error => {
        return res.writeHead(500, {"Content-type":"text/plain"}).error(error.message)
    })

}

module.exports = {

    getCharById
}