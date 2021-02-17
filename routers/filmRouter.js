
const router = require('express').Router();


//Requerimos el controlador 
const filmController = require('../controllers/filmController');


//CREACION DE LOS ENDPOINTS

//Endpoint para guardar una película

router.post('/saveFilm', filmController.createFilm);

//Endpoint para traer las películas

router.get('/allFilms', filmController.bringFilms)


module.exports = router;