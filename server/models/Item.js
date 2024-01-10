import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    img: {
        type:String,
        required:true
    },
    desc: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
    }
})

export default mongoose.model("Item", ItemSchema)
