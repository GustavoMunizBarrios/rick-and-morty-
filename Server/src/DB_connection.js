require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require('./models/Favorite');// importamos el modelo Favorite y lo guardamos en una constante llamada FavoriteModel
const UserModel = require('./models/User');// importamos el modelo User y lo guardamos en una constante llamada UserModel

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: true, native: false }//logging: false dejaba de imprimir en la consola,
);
// Ejecución de la función de los modelos.
FavoriteModel(sequelize) //crea la tabla Favorite con la instancia de sequelize 
UserModel(sequelize) //crea la tabla User con la instancia de sequelize

// Relación de los modelos
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