const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required: [true, 'File path is required']
    },
    originalName: {
        type: String,
        required: [true, 'Original file name is required']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'User ID is required']
    }



})

const file = mongoose.model('files', fileSchema);
module.exports = file;