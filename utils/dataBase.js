// import Sequelize
const { Sequelize } = require('sequelize');

//making the conection with aout data base
const dataBase = new Sequelize({ 
    dialect: 'postgres',     //data base driver tipe to conect
    host:'localhost',        //where our data base is
    username: 'postgres',    //deault user on Postgres
    password: '1602',        //Paswword on postgres
    database: 'Entregable1-NODEJS',
    logging: false           //evita que SQL nos imprima en la termial la consulta que se hizo
});

module.exports = { dataBase };