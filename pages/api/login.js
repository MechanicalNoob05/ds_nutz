// import Pet from "../../models/Users"
import User from "../../middlware/models/users.js"
import connectDb from "../../middlware/mongoose"
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy';
const handler = async (req,res) => {
    if (req.method === 'POST') {
        const {email,password}=req.body;
        try {
          const user= await User.findOne({email});
          if (!user) {
            var success=false
            return res.status(400).json({ errors: errors.array()});
          }
          const passwordcompare= await bcrypt.compare(password,user.password)
          if (!passwordcompare) {
            success=false
            return res.status(400).json({success,errors: errors.array()});
          }
          const data={
            user:{
             id:user.id
            }
          }
          const userdata={
             firstname:user.firstname,
             lastname:user.lastname,
             email:user.email
          }
          const jwttoken=jwt.sign(data,JWT_SECRET)
          var success=true
          res.json({success,jwttoken,userdata})
        } catch (err) {
          res.json({ errors:'please enter a valid email', message: err.message})
        }
    } else {
        res.status(500).json({ errors: 'Internal server error'})
    }
}

export default connectDb(handler)
