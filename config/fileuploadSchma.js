const { default: mongoose } = require("mongoose");

const fileUploadSchma = new mongoose({
    myImage:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Upload', fileUploadSchma)
