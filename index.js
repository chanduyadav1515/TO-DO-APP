const express = require('express');
const port  = 1234;
const bodyParser = require("body-parser");

const app = express();

const db = require("./config/mongoose")
const detail = require("./models/details")
app.set('view engine' , 'ejs');
app.set('views' , './views')
app.use('/' , require("./routes/index"))
app.use(express.static('style'));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port , function(err)
{
    if(err)
    {
        console.log(`error in starting server and erroe is: ${err}`);
        return;
    }
    console.log(`Server is succesfully started with port number: ${port}`);
})