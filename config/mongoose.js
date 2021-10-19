const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-app-db');
const db = mongoose.connection;
db.on('error' , console.error.bind(console , 'error ocuured in db'));
db.once('open', function() {
    console.log('succesfully db is opened')
})