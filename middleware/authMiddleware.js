const jwt = require('jsonwebtoken');
const User = require('../models/user_model');
const keys = require('../config/keys');


const requireAuth =  (req, res, next) => {
  const token = req.headers['x-access-token']
  if (token) {
    jwt.verify(token,keys.JWTSecret , async (err, decodedToken) => {
      if (err) {
        // console.log(err.message);
        res.redirect('/user/login');
        res.send({success:false,message:"this is not a valid token"})
      } else {
        // console.log(decodedToken);
        req.user = await User.findById(decodedToken.id)
        if(!req.user){
          res.send({success:false,message:"there is  no valid token exist"})
        }
        // console.log("---------user-------(",req.user);
        next();
      }
    });
  } else {
    // res.redirect('/user/login');
    res.status(401).send({success:false,message:"there is  no valid token exist"})
  }
};

module.exports = { requireAuth};
