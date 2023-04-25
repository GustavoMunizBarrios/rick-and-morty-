const URL ='https://richandmortyapi.com/api/character'
const axios = require('axios');

const getCharById = (req, res) => {
    const {id} = req.params;

    axiod(`${URL}/${id}`) //Por default hace un get
    .then(response => response.data)
    .then(({status, name, species, origin, image,gender}) => { //recibimos a data con destructuring
        if(name) { //si tengo un nombre significa que tengo personaje
            const character = {
                id, 
                name,
                species,
                origin,
                image,
                gender,
                status
            }
            return res.status(200).json(character) // si no le indico un estado me va a regresar un 200
        }
        return res.status(404).send('Not found');
    })
    .catch(error => res.status(500).send(error.message))
}

module.exports = {
    getCharById
}