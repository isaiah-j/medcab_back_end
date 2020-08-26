const User = require('../models/userModel')
const AppError = require('../utils/appError');
const { nextTick } = require('process');



exports.getAllUsers = async (req, res, next) => {
    try {
        let users = await User.find()
        res.status(201).json({
            status: 201,
            results: users.length,
            data: {
                users
            }
        })
    } catch (error) {
        next(new AppError("No idea man", 500))
    }
};
exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};
exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};
exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};