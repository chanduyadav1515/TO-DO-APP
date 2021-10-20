
const mongoose = require('mongoose');
const detailsSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true
    },
    duedate:{
        type: Date,
        required: true
    }
});
const detail = mongoose.model('detail' , detailsSchema);
module.exports = detail;