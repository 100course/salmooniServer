const jwt = require('jsonwebtoken');
const config = require('config');

module.exports= function (req, res, next) {
    //Get token from header
    console.log('req.header:', req.headers);
    const token = req.header('x-auth-token');
    console.log("token: ", token);
    //check if no token
    if(!token) {
        return res.status(401).json({msg:'no token, not authorized'});
    }

    //verify token
    try{
        const decoded = jwt.verify(token, config.get('jwtToken'));
        req.user = decoded.salmooniUser;
        console.log("token done: ", req.user);
        //console.log(req.user);
        next();
    }catch (err) {
        console.log('token got error')
        res.status(401).json({msg: 'token is not valid'});
        next();
    }
};
