//Importación de todos los controladores 
const {login} = require('../controllers/login')
const {getCharById} =require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')

const router = require('express').Router();

//Creación de rutas para cada controlador
//La ruta va a ejecutar el controlador (ej. getCharById) cuando hagan una petición a la ruta especificada (ej. '/character/id')

router.get('/character/:id', (req, res) => { // ('ruta', (req, res) => {} )
    getCharById(req,res);
})

router.get('/login', login) // Esta es la forma corta de escribirlo 

router.post('/fav', (req, res) => {
    postFav(req,res);
})
router.delete('/fav/:id', (req, res) => {
    deleteFav(req,res);
})

module.exports = router;