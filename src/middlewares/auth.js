exports.authUser = function(req, res, next){
    if(req.user == null){
        res.status(403);
        return res.send('You need to be authenticated');
    }
    next();
}

exports.authRole = function(role){
    return (req, res, next) => {
        if(req.user.role !== role){
            res.status(401);
            return res.send("You are not allowed here")
        }
        next();
    }
}