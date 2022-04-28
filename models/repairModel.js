const { DataTypes, Sequelize } = require('sequelize'); 
const { dataBase } = require('../utils/dataBase');

const Repair = dataBase.define('repair', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
    },
    userId: {
       type: DataTypes.STRING,
       unique: true,
       allowNull: false
    }
});


module.exports = { Repair };