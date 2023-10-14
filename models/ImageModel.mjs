import mongoose from "mongoose";

let imageSchema = new mongoose.Schema(
    {
      price:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      name : {
        type:String,
        required:true
      },
     
      image:{
        data:Buffer,
        contentType:String
      },
      
    }
  );
  
  // Create a Mongoose model based on the schema
  const Image  = mongoose.model('images',imageSchema)
  export default Image
