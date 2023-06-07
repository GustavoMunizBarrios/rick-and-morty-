require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require('./models/Favorite');// importamos el modelo Favorite y lo guardamos en una constante llamada FavoriteModel
const UserModel = require('./models/User');// importamos el modelo User y lo guardamos en una constante llamada UserModel

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }//logging: false dejaba de imprimir en la consola,
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize) //crea la tabla Favorite con la instancia de sequelize 
UserModel(sequelize) //crea la tabla User con la instancia de sequelize

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models; //destructuring de los modelos/tablas User y Favorite extraidos de sequelize.models
//Un usuario (User) puede tener muchos personajes favoritos (Favorites)
User.belongsToMany(Favorite, {through:'user_favorite'}); //Se generara una tabla intermedia llamada 'user_favorite'
//Un personaje puede ser el favorito (Favorites) de muchos usuarios (User)
Favorite.belongsToMany(User, {through:'user_favorite'});

module.exports = {
   User,
   Favorite,
   conn: sequelize, //exporta la instancia de sequelize para sincronizar/conectar con nuestra DB
};