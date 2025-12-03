const { default: mongoose } = require("mongoose");

const fileUploadSchma = new mongoose.Schema({
    myImage:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Upload', fileUploadSchma)
