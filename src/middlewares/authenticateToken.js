const jwt = require('jsonwebtoken');

const authenticateToken = (req,res,next) => {
    const token = req.headers.authorization
    if(!token){
        return res.status(400).json({
            msg : "Acesso negado"
        })
    }

    jwt.verify(token , process.env.SECRET, (err, user) => {
        if(err){
            return res.status(400).json({
                msg : "Acesso negado"
            })
        }
        // console.log(user)
        req.user = user
    })
    // console.log(token);
    return next();
}


module.exports = authenticateToken;