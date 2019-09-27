const mongoose                    = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

var UserDataSchema = new mongoose.Schema({
    firstName : String ,
    lastName : String,
    username : String,
    phone : Number,
    dob : String,
    gender:String ,
    password : String

    // user: {
    //     id : {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : "User"
    //     }}
});

module.exports = mongoose.model('UserData',UserDataSchema);
