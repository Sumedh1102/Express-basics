import mongoose from "mongoose"


const prodectSchema = new mongoose.Schema({

    description : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }, 
    productImage : {
        type : String,
        required : true
    }

  
},{timestamps: true})

export const Prodect = mongoose.model("Prodect",prodectSchema)