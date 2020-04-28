const User=require('../models/users');

module.exports.profile = function(req, res){
    return res.render('user_profile',{
        rajat:"HOME"
    });
}

//rendered the sign up page
module.exports.signUp= function(req,res){
    return res.render('user_sign_up',{
        rajat:"codeial |sign up"
    })
}

//rendered the sign in page
module.exports.signIn= function(req,res){
    return res.render('user_sign_in',{
        rajat:"codeial |sign in"
    })
}

module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
   User.findOne({email:req.body.email},function(err,user){
       if(err){console.log('error in finding the user in signing up'); return}
       
       if(!user){
           User.create(req.body,function(err,user){
            
            if(err){console.log('error in finding the user WHILE signing up'); return}
            
            return res.redirect('/users/sign-in'); 
           })
       }else{
           return res.redirect('back');
       }
   });
}

module.exports.createSession= function(req,res){
    //todolater
}