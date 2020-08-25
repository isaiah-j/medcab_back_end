const express = require('express')
const app = express()
const ailmentRouter = require('./routes/ailmentRoutes')



app.use(express.json());



//Routes
app.use('/api/v1/ailments',ailmentRouter)





module.exports = app