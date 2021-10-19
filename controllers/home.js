const detail = require("../models/details")

module.exports.home = function(req , res){
    return res.render('home' ,{
        title : 'chandu',
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
    })
}


