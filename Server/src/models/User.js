const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { //recibe por parámetro a la instancia de sequelize importada desde DB_connection.js
   sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true //validar que una cadena de caracteres sea un correo electrónico válido
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
   }, 
   { timestamps: false });
};