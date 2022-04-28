const { DataTypes, Sequelize } = require('sequelize');  //convierte a los diferentes tipos de datos usados por loas diferetes tipos de bases de datos para que no lo tengamos que cambiar de form manual
const { dataBase } = require('../utils/dataBase');

//Sequelize convierte el plural el nombre del modelo (user a users)
const User = dataBase.define('user', {      //por buena practica se coloca en singular
    id: {  //Al id se le considera la llave primaria, es administrado por el motor de las bases de datos
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,             //el dato sera unico
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user"
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'available'
    }
});    

module.exports = { User };