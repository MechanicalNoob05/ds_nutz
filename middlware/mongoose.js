import mongoose from "mongoose";

const connectDb=handler=> async(req,res)=>{
    if(mongoose.connections[0].readystate){
        return handler(req,res)
    }
    await mongoose.connect("mongodb+srv://Manish0302:seeta11102007@dssa.ikisp2i.mongodb.net/test")
    return handler(req,res)
}

export default connectDb