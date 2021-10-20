
const detail = require("../models/details")


// controller for sending details to home browser
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

// controller for creating a detail model and sending back to home controller
module.exports.details = function(req , res){
    detail.create({
        description: req.body.description,
        category: req.body.category,
        duedate: req.body.duedate,
    },function(err,newDetail){
        if(err){return;}

        if(newDetail.duedate == '')
        {
            newDetail.duedate = 'NO-DEADLINE';
        }
        console.log(newDetail)
        res.redirect('/');
    })
}

// controller for deleting date from database 

module.exports.delete = function(req , res)
{
    let id = req.query;
    let count = Object.keys(id).length;
    for(let i = 0 ;i< count ;i++)
    {
        detail.findByIdAndDelete(Object.keys(id)[i] , function(err){
            if(err){
              return;
            }
          })
    }
    res.redirect('back');
}


