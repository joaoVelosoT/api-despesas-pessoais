const validateUser = (req,res,next) => {

    const {nome, email, senha} = req.body;
    console.log(req.body)
    console.log(nome, email, senha)
    if(!nome || !email || !senha){
        return res.status(400).json({
            msg : "Valide seus dados"
        })
    }

    // return next()
}


module.exports = validateUser