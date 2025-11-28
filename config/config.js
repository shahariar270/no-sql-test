const { default: mongoose } = require("mongoose");


const dataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Data', dataSchema)
