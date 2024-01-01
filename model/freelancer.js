const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const freelancerSchema = mongoose.Schema({
    email: { type: String, required: true,unique:true, },
    password: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
   
    pic: {
        type: String,
        required: true,
        default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        
    },
    phone:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
  
    portfolio:{
        type:String,
        required:true
    },
    linkdln:{
        type:String,
        required:true
    },
   
    yearofExperience:{
        type:String,
        required:true
    },
    workhours:{
        type:String,
        required:true
    },
    bankName:{
         type:String,
         required:true
     },
    accountNumber:{
        type:String,
        required:true
    },
   
    IFSCcode:{
        type:String,
        required:true
    },
    

},
    {
    timestamps: true,
    }
);

freelancerSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


freelancerSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    } 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Freelancer = mongoose.model("Freelancer", freelancerSchema);
module.exports = Freelancer;