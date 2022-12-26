import User from "../../middlware/models/users.js"
import connectDb from "../../middlware/mongoose"
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy';
const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            var salt = bcrypt.genSaltSync(10);
            var hash = await bcrypt.hashSync(req.body.password, salt);
            var user = await User.create({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                email: req.body.email,
                phonenumber: req.body.phonenumber,
                password: hash,
            })
            const data = {
                id: user.id
            }
            const jwttoken = jwt.sign(data, JWT_SECRET)
            var success = true;
            res.status(200).json({ success, jwttoken })
    
        } catch (err) {
            res.status(400).json({message: err.message })
        }
    } else {
        res.status(400).json({message: 'internal server error'})
    }
    
}

export default connectDb(handler)