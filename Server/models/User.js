const { DataTypes } = require('sequelize');

module.exports = (sequelize) => { //recibe por parámetro a la instancia de sequelize importada desde DB_connection.js
   sequelize.define('User', {
        
   }, 
   { timestamps: false });
};