const express = require('express')
const cors = require('cors')
const app = module.exports = express()
const bodyparser = require('body-parser')
var mongoose = require('mongoose')

const {
    user,
    comment,
    game,
    playedGames,
    roll
} = require('./DB')

app.use(cors())

app.listen(3001, function () {
    console.log('listening on 3001')
})

app.use(bodyparser.json())
