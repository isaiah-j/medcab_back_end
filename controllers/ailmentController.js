const Ailment = require('../models/ailmentModel')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')


exports.getAllAilments = catchAsync(async (req, res, next) => {
    let allAilments = await Ailment.find()
    res.status(201).json({
        status: 201,
        results: allAilments.length,
        data: {
            Ailments: allAilments
        }
    })
})

exports.postAilment = catchAsync(async (req, res, next) => {
    let newAilment = await Ailment.create(req.body)

    res.status(201).json({
        status: 201,
        data: {
            ailment: newAilment
        }
    })
})

exports.getAilment = async (req, res, next) => {
    try {
        const { id } = req.params
        let ailment = await Ailment.findById(id)

        res.status(201).json({
            status: 201,
            data: {
                ailment
            }
        })
    } catch (error) {
        return next(new AppError(`Couldn't find ailment with id of ${req.params.id}`, 404))
    }
}

exports.deleteAilment = catchAsync(async (req, res, next) => {
    let { id } = req.params
    await Ailment.findByIdAndDelete(id)
    res.status(200).json({
        status: 200,
        message: "Successfully deleted"
    })
})

exports.updateAilment = catchAsync(async (req, res, next) => {
    let { id } = req.params
    let ailment = await Ailment.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(201).json({
        status: 201,
        data: {
            ailment
        }
    })
})

