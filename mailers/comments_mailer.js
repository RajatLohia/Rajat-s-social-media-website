const nodeMailer = require('../config/nodemailer');


// another way of exporing method
exports.newComment = (comment) => {
    console.log('inside new comment mailer');
    
    nodeMailer.transporter.sendMail({
        from: 'rajatsample@codeial.com',
        to: comment.user.email,
        subject: "New Comment Published",
        html: '<h1> yup, your comment is now publsihed!!</h1>'
    }, (err,info) => {
        if(err){
        console.log('error in sending mail',err);
        return;
    }
    console.log('message sent', info);
    return;
    
});
}
