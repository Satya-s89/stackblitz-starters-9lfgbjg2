const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const menuSchema=new Schema({
   name:{
      type:String,
      required:true
   },
   price:{
      type:Number,
      required:true
   },
   description:{
        type:String,
   }
});
const MenuItem=mongoose.model('MenuItem',menuSchema);

module.exports=MenuItem