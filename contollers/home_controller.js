const Post = require('../models/post');
const User= require('../models/users');

module.exports.home = async function(req, res){
 

    try{
        //popultae the user of each post
    let posts=  await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
       path: 'comments',
       populate: 
       {
           path:'user'
       }
   });

  let users= await User.find({});
  
  return res.render('home',{
    rajat:"HOME",
    posts: posts,
    all_users: users
  });

    }
    catch(err)
    {
        console.log('error');
        return;    
    }
}

//module.exports.actionName = function(Req, res){}