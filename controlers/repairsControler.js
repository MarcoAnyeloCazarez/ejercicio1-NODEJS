const { Repair } = require('../models/repairModel');

const getAllRepairs = async (req, res) => {
    const repairs = await Repair.findAll();
    res.status(200).json({
        repairs
    });
};


const createRepair = async (req, res) => {
    const { date, userId } = req.body;
    const newRepair = await Repair.create({ date: date, userId: userId });
    res.status(201).json({ newRepair });
};

module.exports = { getAllRepairs, createRepair };