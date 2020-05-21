const nodeMailer = require('../config/nodemailer');


// another way of exporing method
exports.newComment = (comment) => {
    let htmlString= nodeMailer.renderTemplate({comment: comment},'/comments/new_comment.ejs');
    console.log('helllooooo');
    
    nodeMailer.transporter.sendMail({
        from: 'rajatsample@codeial.com',
        to: comment.user.email,
        subject: "New Comment Published",
        html: htmlString
    },
     (err,info) => {
        if(err){
        console.log('error in sending mail',err);
        return;
    }
    console.log('message sent', info);
    return;
    
});
}
