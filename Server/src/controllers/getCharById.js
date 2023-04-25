// Controlador con Express
const URL ='https://rickandmortyapi.com/api/character';
const axios = require('axios');

//La función recibe solicitudes HTTP GET y se encarga de buscar un personaje por su identificador (ID) en la API
const getCharById = async (req, res) => { 
    try {
        const {id} = req.params; // destructuring del objeto params para obtener el id
        const {data} = await axios(`${URL}/${id}`)
        // Petición a la API a partir del ID que recibimos por params.
        //Devuelve un JSON con las propiedades status, name, species, origin, image, gender.
         //recibimos a data con destructuring
        if(!data.name) throw Error(`Faltan datos del personaje deon ID: ${id}`) // Si yo lanzo un error lo redirijo a catch(error)
        //si tengo un nombre significa que tengo personaje (que existe) entonces:
        const character = { // Crea un objeto con las propiedades del personaje.
            id:data.id, 
            name:data.name,
            species:data.species,
            origin:data.origin,
            image:data.image,
            gender:data.gender,
            status:data.status
        }
        return res.status(200).json(character) // Regresa el character 
        
            //return res.status(404).send('Not found'); // Si no tengo un name, no tengo un personaje por lo que regresa 'Not found'
        

    } catch (error){
        return error.message.includes('ID')
        ? res.status(404).send(error.message) 
        : res.status(500).send(error.response.data.error) // si se busca un ID que no existe entra aqui y devuelve 'Character not found'
    }

}
//Nota: utilizamos send cuando mandamos texto plano.
//Nota: utilizamos json cuando tenemos que mandar objetos de JS.

module.exports = {
    getCharById
}