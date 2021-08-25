const User = require("../models/user_model");
const jwt = require('jsonwebtoken');


// signup api method
module.exports.signup_post = async(req, res) => {
    try{
       const {password} = req.body
       const user = new User(req.body)
       user.setPassword(password);
       user.reset_token = password;
      //  console.log(user.reset_token);
       await user.save()
       res.send({success:true,message:"user has been created",data:user.generateJWT()})
    }catch(err){
     //  console.log(err);
      res.status(500).send({success:false,message:"faild to create user",error:err.message})
    }
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.login(email, password);
      res.status(200).json({ role: user.role ,token:user.generateJWT(),username:user.username});
    }
    catch (err) {
      // const errors = handleErrors(err);
      res.status(400).json({ error:err.message });
    }
  
  }

// get users
module.exports.get_users = async(req,res)=>{
    
    const users = await User.find({},'username')
    res.send({usersData:users}); 
                     
}