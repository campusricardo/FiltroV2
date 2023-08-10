const jwt = require('jsonwebtoken');

const generateJWT =  (uid= '') =>{

    return new Promise ((resolve, reject)=>{

        const payload = {uid};

        jwt.sign(payload,process.env.SECRET, {
            expiresIn : '2h'
        }, (err, token)=>{
            if (err){
                console.log(err);
                reject ('Cannot generate the JWT')
            } else {
                resolve (token)
            }
        })
    })
}

module.exports = {
    generateJWT
}