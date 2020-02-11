const express = require('express')
const cakeRouter = express.Router()
cakeRouter.use('/cakes', require('./cake.routes'))

module.exports = cakeRouter
