var mongoose = require('mongoose');

mongoose.connect('mongodb://test1:abcd123@fdq1.ni8.ir:27017/test1');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected")
});

var Schema = mongoose.Schema;
