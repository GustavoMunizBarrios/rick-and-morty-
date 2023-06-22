const {Favorite} = require('../DB_connection')

module.exports = async (req, res) => {
    try {
        const {id} = req.params;
        //Destruye el registro de la DB que coincida con el id pasado por params
        await Favorite.destroy({where:{id}})
        //Busca todos los favoritos de la tabla Favorite y los guarda en la const allFavorite
        const allFavorite = await Favorite.findAll();
        return res.json(allFavorite)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}