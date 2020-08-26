const express = require('express')
const app = express()
const ailmentRouter = require('./routes/ailmentRoutes')
const globalErrorHandler = require('./controllers/errorController')
const AppError = require('./utils/appError')


app.use(express.json());



//Routes
app.use('/api/v1/ailments', ailmentRouter)

app.all('*', (req, res, next) => {

    next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(globalErrorHandler)



module.exports = app