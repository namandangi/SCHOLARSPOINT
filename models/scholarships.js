const   mongoose                  = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

var ScholarshipSchema = new mongoose.Schema({
    scholarshipName : String,
    scholarshipProvider : String,
    whoCanApply : [String],
    benefits : [String],
    portalLink : String,
});

ScholarshipSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Scholarship',ScholarshipSchema);