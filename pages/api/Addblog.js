// import Pet from "../../models/Users"
import Blog from "../../middlware/models/blog.js"
import connectDb from "../../middlware/mongoose"
const handler = async (req,res) => {
    if (req.method === 'POST') {
        var date=new Date
        var day=date.getDate()
        var month=date.getMonth()
        var year=date.getFullYear()
        var blogdate=day+"/"+month+"/"+year
        try {
            var blog = await Blog.create({
                slug: req.body.slug,
                content: req.body.content,
                meta_description: req.body.metadescription,
                title: req.body.title,
                author: req.body.author,
                date:blogdate
            })
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
