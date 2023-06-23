const {Favorite} = require("../DB_connection")//importa la tabla/modelo Favorite del archivo DB_connection.js

module.exports = async (req, res)=>{
    const {name, origin, status, image, species, gender} = req.body

    if(!name || !status || !species || !gender || !origin  || !image) return res.status(401).send('Faltan datos')
    try {

        //Busca un registro en la tabla Favorite que coincida con name, origin, status, image, species, gender del req.body,
        //si no lo encuentra lo crea con los valores especificados.
        //Si crea el registro devuelve también un true dentro del objeto JSON
        await Favorite.findOrCreate({where: {name, origin, status, image, species, gender}})

        // Devuelve todos los registros de la tabla Favorites
        const allFavorites = await Favorite.findAll()
        return res.json(allFavorites)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}