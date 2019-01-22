var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/name", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected")
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    username: {type : String , maxlength: 20 ,required : true},
    password :  {type : String , maxlength: 20 },
    name : String,
    fName : String,
    email : String,
    img: { data: Buffer, contentType: String },
    Bdate : Date,
    gender : String,
    role : {type : String , default : "user"},
    status:{ type : Boolean , default :false},
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
})
var gameSchema = new Schema({
    name : String,
    clearCurrent:{type :[] , default : [1,6]},
    winScore: {type : Number , default : 100},
    rounds: {type : Number , default : Infinity},
    dices :{type:Number , default:2},
    dicesInround :{type : Number , default : Infinity},
    score : {type:Number , default:0},
    runs:  {type:Number , default:0},
    designer: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

var playedGamesSchema = new Schema({
    gameID: {
            type: Schema.Types.ObjectId,
            ref: 'game'
            },
    player1: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    player2: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    score1: Number,
    score2: Number,
    winner : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    loser : {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    Date : Date
});

var commentSchema = new Schema({
    gameID: {
        type: Schema.Types.ObjectId,
        ref: 'game'
        },
    playerID: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    Date : Date,
    comment : String
})


var user = mongoose.model('user', userSchema);
var comment = mongoose.model('comment', commentSchema);
var game = mongoose.model('game', gameSchema);
var playedGames = mongoose.model('playedGames', playedGamesSchema);

// let fun = async () => {
//     let role1 = new role({ 
//         userID: "5c4320e84f4c3822cc2906e7",
//         role : "admin"
//     })
//     await role1.save()
// }

//  fun()
  
module.exports = {
    user,
    comment,
    game,
    playedGames
};
