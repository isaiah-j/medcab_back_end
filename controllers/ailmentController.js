const Ailment = require('../models/ailmentModel')
const { errorMonitor } = require('stream')


exports.getAllAilments = async (req, res) => {
    try {
        let allAilments = await Ailment.find()
        res.status(201).json({
            status: 201,
            results: allAilments.length,
            data: {
                Ailments: allAilments
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

exports.postAilment = async (req, res) => {
    try {
        console.log(req.body)
        let newAilment = await Ailment.create(req.body)

        res.status(201).json({
            status: 201,
            data: {
                ailment: newAilment
            }
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}

exports.getAilment = async (req, res) => {
    const { id } = req.params
    try {
        let oneAilment = await Ailment.findById(id)
        res.status(201).json({
            status: 201,
            data: {
                ailment: oneAilment
            }
        })

    } catch (error) {
        console.log(error)
        res.status(401).json({
            status: 401,
            message: error
        })
    }
    res.send('Only one ailment')
}

exports.deleteAilment = async (req, res) => {
    let { id } = req.params
    try {
        await Ailment.findByIdAndDelete(id)
        res.status(200).json({
            status: 200,
            message: "Successfully deleted"
        })

    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: error
        })
    }
}

exports.updateAilment = async (req, res) => {
    let { id } = req.params
    try {
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

    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: error
        })
    }
}

