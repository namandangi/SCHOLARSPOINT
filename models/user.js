const mongoose                    = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
    firstName : String ,
    lastName : String,
    email : String,
    phone : Number,
    dob : Number,
    dob_month : Number,
    dob_year : Number,

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema);