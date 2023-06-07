//Los modelos son objetos que estructuran nuestras tablas en la base de datos.
//Cada modelo será una tabla dentro de nuestra DB.
// Para crear un modelo utilizaremos la función define.
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => { //recibe por parámetro a la instancia de sequelize importada desde DB_connection.js
   sequelize.define('Favorite', { //define el nombre de la tabla ('Favorite'), despues define el modelo en forma de objeto
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            // autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,

        }
   }, 
   { timestamps: false })
};