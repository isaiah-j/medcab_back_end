const User = require('../models/userModel')
const AppError = require('../utils/appError')

exports.register = async (req, res, next) => {
    try {
        let user = await User.create(req.body)
        res.status(201)
            .json({
                status: 201,
                user
            })
    } catch (error) {
        console.log(error)
        next(new AppError(error.message, 400))
    }
}