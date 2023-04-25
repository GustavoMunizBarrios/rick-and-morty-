let myFavorites = []; //simulando una base de datos de mis favoritos

const postFav = (req, res) => {
    const character = req.body; //En la propiedad body estará el personaje

    myFavorites.push(character)

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    const myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) //esto me devuelve un array filtrado, va a excluir al personaje con el mismo id que pasamos

    return res.status(200).json(myFavorites)

}

module.exports = {
    postFav,
    deleteFav
}