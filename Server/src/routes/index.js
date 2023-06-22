/* La creación de rutas sirve para determinar como una aplicación responde a la solicitud de un cliente 
en una determinada via de acceso con un método de solicitud HTTP específico */

//Importación de todos los controladores 
const {getCharById} =require('../controllers/getCharById')
const login = require('../controllers/login')
const postUser = require('../controllers/postUser')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')

const router = require('express').Router();

//Creación de rutas para cada controlador
//La ruta va a ejecutar el controlador (ej. getCharById) cuando hagan una petición a la ruta especificada (ej. '/character/id')

router.get('/character/:id', (req, res) => { // ('ruta', (req, res) => {} )
    getCharById(req,res);
})

router.get('/login', login) // Esta es la forma corta de escribirlo 
router.post('/login', postUser) // Esta es la forma corta de escribirlo 

router.post('/fav', (req, res) => {
    postFav(req,res);
})
router.delete('/fav/:id', (req, res) => {
    deleteFav(req,res);
})

module.exports = router;