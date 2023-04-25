let myFavorites = []; //simulando una base de datos

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character)

    return res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    const myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) //esto me devuelve un array

    return res.status(200).json(myFavorites)

}

module.exports = {
    postFav,
    deleteFav
}