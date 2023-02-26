const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    uname : String,
    email : String,
    password : String
});

module.exports = mongoose.model('users', UserSchema);