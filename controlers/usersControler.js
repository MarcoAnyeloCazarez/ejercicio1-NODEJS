//El archivo controler solo es para colocar todas las funciones o lógica del cidigo
const { password } = require('pg/lib/defaults');
const { User } = require('../models/userModel')

const getAllUsers = async (req, res) => {    //a ruta se pone solo / dado que ya en app.js se definió la ruta users
    const users = await User.findAll();    //busca todos los usuarios de la tabla users
    res.status(200).json({ 
        users,
     });
};

const createUser = async (req, res) => {
    const { name, email, password, role, status } = req.body;
    const newUser = await User.create({ name: name, email: email, password: password, role: role, status: status })   //columna: valor
    res.status(201).json({ newUser });
};

module.exports = { getAllUsers, createUser };