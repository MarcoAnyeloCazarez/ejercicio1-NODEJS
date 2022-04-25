// import the express library
const express = require('express');

// import Sequelize
const { Sequelize } = require('sequelize'); 

//init the express app
const app = express();

//Enable coming Json data
app.use(express.json());

const users = [];
const repairs = [];

//Endpoints
app.get('/users', (req, res) => {
    res.status(200).json({ 
        users,
     });
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.status(201).json({  });
});

//making the conection with aout data base
const dataBase = new Sequelize({ 
    dialect: 'postgres',     //data base driver tipe to conect
    host:'localhost',        //where our data base is
    username: 'username',    //deault user on Postgres
    password: '1602',        //Paswword on postgres
    database: 'Entregable1-NODEJS'
});

//Validating the credentials
dataBase.authenticate()
    .then(() => console.log('Data base autenticaded'))
    .catch(err => console.log(err));

//Sing up server
const PORT = 4000;

app.listen(4000, () => {
    console.log(`la app de express corre en el puerto ${PORT}`);   
})