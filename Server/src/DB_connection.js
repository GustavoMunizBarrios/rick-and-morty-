require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite.js');// importamos el modelo Favorite y lo guardamos en una constante llamada FavoriteModel
const UserModel = require('./models/User.js');// importamos el modelo User y lo guardamos en una constante llamada UserModel

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   // URL
   { logging: false, native: false }//logging: false dejaba de imprimir en la consola, 
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize) //crea la tabla Favorite con la instancia de sequelize 
UserModel(sequelize) //crea la tabla User con la instancia de sequelize

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;

module.exports = {
   // User,
   // Favorite,
   conn: sequelize,
};