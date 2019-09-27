const   mongoose                  = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

var ScholarshipSchema = new mongoose.Schema({
    scholarshipName : String,
    category : String,
    portalLink : String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Scholarship',ScholarshipSchema);