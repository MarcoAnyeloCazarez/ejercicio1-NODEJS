// import the express library
const express = require('express');

//Routers
const { usersRouter } = require('./routes/usersRoutes');

//utils
const { dataBase } = require('./utils/dataBase');

//init the express app
const app = express();

//Enable coming Json data
app.use(express.json());


//Endpoints
//http://localhost/4000/api/v1/users
app.use('/api/v1/users', usersRouter); //Se debe usar esta ruta como una buen practica, se refiere  la api creada, la version uno y el model al que se dirige




//Validating the credentials
dataBase.authenticate()
    .then(() => console.log('Data base autenticaded'))
    .catch(err => console.log(err));

dataBase.sync( )      //Crea y sincroniza los modelos que se tengan en los archivos locales con la de PG      se puede usar sync({force: true} ) para reinciar uera base de datos y dar los valores y conficiración inicial, solo se usa durante producción, NO DEJARLO AHÍ
    .then(() => console.log('Database synced') )
    .catch(err => console.log(err));

//Sing up server
const PORT = 4000;

app.listen(4000, () => {
    console.log(`la app de express corre en el puerto ${PORT}`);   
})