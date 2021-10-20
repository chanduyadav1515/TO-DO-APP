
const mongoose = require('mongoose');
// Schema for accepting description, category and duedate
const detailsSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
    },
    duedate:{
        type: String,
    }
});
const detail = mongoose.model('detail' , detailsSchema);
module.exports = detail;