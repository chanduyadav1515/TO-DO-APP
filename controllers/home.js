
const detail = require("../models/details")

module.exports.home = function(req , res){
     
    detail.find({},function(err , details){
        if(err)
        {
            return;
        }
        res.render('home' , {
            details: details,
        })
    })
}
module.exports.details = function(req , res){
    detail.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate,
    },function(err,newDetail){
        if(err){return;}
        console.log(newDetail)
        res.redirect('/');
    })
}


