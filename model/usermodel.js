var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
    username: String,
    password: String
});

var userschema = mongoose.model('Users', user);


module.exports = userschema;