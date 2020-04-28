module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id',25)
    return res.render('home',{
        rajat:"HOME"
    });
}

//module.exports.actionName = function(Req, res){}