// Controlador con Express
const URL ='https://richandmortyapi.com/api/character'
const axios = require('axios');

//La función recibe solicitudes HTTP GET y se encarga de buscar un personaje por su identificador (ID) en la API
const getCharById = (req, res) => { 
    const {id} = req.params; // destructuring del objeto params para obtener el id

    // Petición a la API a partir del ID que recibimos por params.
    axios(`${URL}/${id}`) //Por default hace un get
    .then(response => response.data)
    //Devuelve un JSON con las propiedades status, name, species, origin, image, gender.
    .then(({status, name, species, origin, image, gender}) => { //recibimos a data con destructuring
        if(name) { //si tengo un nombre significa que tengo personaje (que existe) entonces:
            const character = { // Crea un objeto con las propiedades del personaje.
                id, 
                name,
                species,
                origin,
                image,
                gender,
                status
            }
            return res.status(200).json(character) // Regresa el character 
        }
        return res.status(404).send('Not found'); // Si no tengo un name, no tengo un personaje por lo que regresa 'Not found'
    })
    .catch(error => res.status(500).send(error.message))
}
//Nota: utilizamos send cuando mandamos texto plano.
//Nota: utilizamos json cuando tenemos que mandar objetos de JS.

module.exports = {
    getCharById
}