const mongoose                    = require('mongoose');
const passportLocalMongoose       = require('passport-local-mongoose');

var PostSchema = mongoose.Schema({
    scholarshipName : String,
    scholarshipProvider : String,
    whoCanApply : [String],
    benefits : [String],
    portalLink : String,
    category : {
        name : String,
        categoryName : String
    }
});

PostSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Post',PostSchema);