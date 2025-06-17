const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    Username:{
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength:3
    },
    email:{
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        
        minlength:13
    },
    password:{
        type:String,
        required: true,
        trim: true,

        
        minlength:5
    }
})
const user=mongoose.model('user',userSchema);
module.exports=user;