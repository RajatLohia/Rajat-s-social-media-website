const Post = require('../models/post');
const User= require('../models/users');

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
   Post.find({})
   .populate('user')
   .populate({
       path: 'comments',
       populate: {
           path:'user'
       }
   })

  

   .exec(function(err,posts){
    if(err)
    {
        console.log("error here");  
    }
    User.find({},function(err,users){
        return res.render('home',{
            rajat:"HOME",
            posts: posts,
            all_users: users
        });
    })
   });
}

//module.exports.actionName = function(Req, res){}