const express = require('express');
const port  = 1234;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// database accessing
const db = require("./config/mongoose")
// models
const detail = require("./models/details")
// setting template engine
app.set('view engine' , 'ejs');
app.set('views' , './views')
// for using routes
app.use('/' , require("./routes/index"))
// for using css file
app.use(express.static('style'));


// listen
app.listen(port , function(err)
{
    if(err)
    {
        console.log(`error in starting server and erroe is: ${err}`);
        return;
    }
    console.log(`Server is succesfully started with port number: ${port}`);
})