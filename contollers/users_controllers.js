const User = require('../models/users');
const fs= require('fs');
const path= require('path');

module.exports.profile = function(req, res){
        User.findById(req.params.id,function(err,user){
            return res.render('user_profile', {
                rajat: 'User Profile',
                profile_user: user
        });
        }); 
}


module.exports.update= async function(req, res){
    if(req.user.id == req.params.id){

        try{
            let user= await User.findById(req.params.id);
            User.uploadedAvatar(req,res,function(err){
                if(err)
                {
                    console.log('multer error',err)
                }
               
                user.name= req.body.name;
                user.email= req.body.email;

                if(req.file)
                {

                    if(user.avatar){
                        fs.unlinkSync(path.join(__dirname, '..', user.avatar))
                    }
                    //this is saving the path of the uploaded file unto the avatar fields in the user
                    user.avatar= User.avatarPath + '/' + req.file.filename;
                }
                console.log(req.file);
                
            user.save();
            return res.redirect('back');                
            });

        }catch(err){
            req.flash('error',err);
            return res.redirect('back');
        }
        // User.findByIdAndUpdate(req.params.id,req.body, function(err,user){
        //     req.flash('success', 'Updated!');
        //     return res.redirect('back');
        // });
    }
    else{
        req.flash('error', 'Unauthorized!');
        return res.status(401).send('unauthorized');
    }
}


// render the sign up page
module.exports.signUp = function(req, res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }


    return res.render('user_sign_up', {
        rajat: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if (req.isAuthenticated()){
        console.log('profile to go')
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        rajat: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){req.flash('error', err); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){req.flash('error', err); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back');
        }

    });
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    req.flash('success', 'Logged in Successfuly')
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'you have logged out')
    return res.redirect('/');
}