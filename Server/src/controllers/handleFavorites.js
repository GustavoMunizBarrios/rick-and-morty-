let myFavorites = []; //simulando una base de datos de mis favoritos

const postFav = (req, res) => {
    try {
        const character = req.body; //En la propiedad body estará el personaje que le vamos a enviar a myFavorites
        console.log(character);
        const characterFound = myFavorites.find(fav => fav.id === character.id) //Busca en myFavorites un character que sea igual al que recibimos (es decri que este repetido)
        
        if(characterFound) throw Error('El personaje ya existe en favoritos')// Si encuentra un character dentro de myFavorites entonces tira error

        myFavorites.push(character) // si NO encuentra el character dentro de myFavorites entonces pushea a character
        return res.status(200).json(myFavorites) //retorna como respuesta al array myFavorites
        
    } catch (error) {
        return res.status(404).send(error.message);
        
    }
}

const deleteFav = (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id) //esto me devuelve un array filtrado, va a excluir al personaje con el mismo id que pasamos

    return res.status(200).json(myFavorites)

}

module.exports = {
    postFav,
    deleteFav
}