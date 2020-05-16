const Post = require('../models/post');

module.exports.home = function(req, res){
    //console.log(req.cookies);
   // res.cookie('user_id',25)
   
//    Post.find({},function(err,posts){
//     return res.render('home',{
//         rajat:"HOME",
//         posts: posts
//     });
//    })

//popultae the user of each post
   Post.find({}).populate('user').exec(function(err,posts){
    if(err)
    {
        console.log("error here");  
    }
    return res.render('home',{
        rajat:"HOME",
        posts: posts
    });
   });
}

//module.exports.actionName = function(Req, res){}