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
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Alive', 'Dead', 'unknown'), //El tipo de dato de status solo puede ser 'Alive', 'Dead', 'unknown'
            allowNull: false
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'), //El tipo de dato de status solo puede ser 'Female', 'Male', 'Genderless', 'unknown'
            allowNull: false
        },
        origin:{
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }

   }, 
   { timestamps: false })
};