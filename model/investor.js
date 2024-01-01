const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const investorSchema = mongoose.Schema({
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
    companyName:{
        type:String,
        required:true
    },
    gstNumber:{
        type:String,
        required:true
    },
    registrationDetails:{
         type:String,
         required:true
     },
    legalLicense:{
        type:String,
        required:true
    },
   
    aboutBusiness:{
        type:String,
        required:true
    },
    minInvestment:{
        type:String,
        required:true
    },
    maxInvestment:{
        type:String,
        required:true
    },
    

},
    {
    timestamps: true,
    }
);

investorSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


investorSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    } 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Investor = mongoose.model("Investor", investorSchema);
module.exports = Investor;