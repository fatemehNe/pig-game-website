var mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:17f9bfb8-90dd-44af-81bc-3d74d1e15f1f:27017/name", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected")
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    userID:{ type: Schema.Types.ObjectId , required : true},
    username: {type : String , maxlength: 20 ,required : true},
    password :  {type : String , maxlength: 20 },
    name : String,
    fName : String,
    email : String,
    img: { data: Buffer, contentType: String },
    Bdate : Date,
    gender : String,
    status:{ type : Boolean , default :true},
    friends:[{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
})
var gameSchema = new Schema({
    gameID: { type: Schema.Types.ObjectId , required : true},
    clearCurrent:[],
    winScore: Number,
    rounds: Number,
    dices : Number,
    dicesInround : Number ,
    score : Number,
    runs: Number,
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
    commentID : { type: Schema.Types.ObjectId , required : true},
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

var roleSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    role : String
})


var role = mongoose.model('user', roleSchema);
var user = mongoose.model('user', userSchema);
var comment = mongoose.model('comment', commentSchema);
var game = mongoose.model('game', gameSchema);
var playedGames = mongoose.model('playedGames', playedGamesSchema);

module.exports = {
    user,
    comment,
    game,
    playedGames,
    role
};
