// import Pet from "../../models/Users"
import Blog from "../../middlware/models/blog.js"
import connectDb from "../../middlware/mongoose"
const handler = async (req,res) => {
    if (req.method === 'POST') {
        const {slug}=req.body;
        try {
          const blog= await Blog.findOne({slug});
          if (!blog) {
            var success=false
            return res.status(400).json({ errors: errors.array()});
          }
          var success=true
          res.json({success,blog})
        } catch (err) {
          res.json({message: err.message})
        }
    } else {
        res.status(500).json({message: 'Internal server error'})
    }
}

export default connectDb(handler)
