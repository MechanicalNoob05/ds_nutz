import mongoose from 'mongoose'
const BlogSchema = new mongoose.Schema({
    slug:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    meta_description:{
        type:String,
        required:true
        
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:String
    }
})

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)