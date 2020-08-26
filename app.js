const express = require('express')
const app = express()
const ailmentRouter = require('./routes/ailmentRoutes')



app.use(express.json());



//Routes
app.use('/api/v1/ailments', ailmentRouter)

app.all('*', (req, res, next) => {
    res.status(404).json({
        status: 404,
        message: `Cannot find ${req.originalUrl}`
    })
})



module.exports = app