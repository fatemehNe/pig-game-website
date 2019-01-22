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
    role
} = require('./DB')

app.use(cors())



app.use(bodyparser.json())

app.post('/senduser', async function (req, res) {
    let newuser =  new user({
        username : req.body.user.username,
        password : req.body.user.password,
        name: req.body.user.name,
        fName : req.body.user.fname,
        email: req.body.user.email,
        gender : req.body.user.gender,
        bdate: req.body.user.bdate
        });
    await newuser.save(function (error) {
        if (error)
            console.log(error);
        else{
            console.log("added")
        }
    });
});

app.post('/sendgame', async function (req, res) {
    let newgame =  new game({
        name : req.body.game.name,
        clearCurrent : req.body.game.clearCurrent,
        rounds : req.body.game.rounds,
        dices: req.body.game.dices,
        dicesInround : req.body.game.dicesInround,
        score: req.body.game.score,
        runs : req.body.game.runs,
        designer: req.body.game.designer
        });
    await newgame.save(function (error) {
        if (error)
            console.log(error);
        else{
            console.log("added")
        }
    });
})

app.post('/login', async function(req ,res ){
    user.findOneAndUpdate({username : req.body.username ,  password: req.body.password} , {status : true}
        ,function(error , data){
            if (data){
                console.log(data)
                return res.json(data)
                
                }
            else
                {console.log("not found")
                res.send('')}
    })
    
})

app.post('/logout', async function(req ,res ){
    console.log(req.body.ID);
    user.findByIdAndUpdate(req.body.ID  , {status : false}
        ,function(error , data){
            if (data){
                console.log(data)
                }
            else
                {console.log("not found")
                res.send('')}
    })
    
})
app.post('/usergames', async function(req ,res ){
    game.find({designer :req.body.ID}  
        ,function(error , data){
            if (data){
                console.log(data)
                res.send(data)
                }
            else
                {console.log("not found")
                res.send('')}
    })
    
})
app.post('/friendName', async function(req ,res ){
    user.findById(req.body.ID   
        ,function(error , data){
            if (data){
                console.log(data)
                res.send(data.name)
                }
            else
                {console.log("not found")
                res.send('')}
    })
    
})
app.post('/user', async function(req ,res ){
    user.findById(req.body.ID  
        ,function(error , data){
            if (data){
                console.log(data)
                res.send(data)
                }
            else
                {console.log("not found")
                res.send('')}
    })
    
})
app.get('/getgames', function (req, res) {

    game.find().lean().exec(function (err, docs) {
        return res.send(JSON.stringify(docs));
    });
});

app.get('/getusers', function (req, res) {

    user.find().lean().exec(function (err, docs) {
        return res.send(JSON.stringify(docs));
    });
});
app.get('/onlines', function (req, res) {

    user.find({status : true},function (err, docs) {
        return res.send(JSON.stringify(docs));
    });
});
app.listen(3001, function () {
    console.log('listening on 3001')
})