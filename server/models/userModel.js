const mongoose =require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email:{
        type:String,
        required:true,
        trim:true //to trim the email for avoid invalid entries 
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    },
    status:{
        type:String,
        default:'active'
    },
    profilePicture:{
        type:String,
        default:""
    }
},{
    timestamps:true
});

const User= mongoose.model("users",userSchema);

module.exports = User;