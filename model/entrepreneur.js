const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const entrepreneurSchema = mongoose.Schema({
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

    companyregno:{
        type:String,
        required:true
    },
    dateofreg:{
        type:Date,
        required:true
    },
    ageofstartup:{
        type:String,
        required:true
    },
    gstin:{
        type:String,
        required:true
    },
    stakeholder:{
         type:String,
         required:true
     },
    companyurl:{
        type:String,
        required:true
    },
   
    ownershiptype:{
        type:String,
        required:true
    },
    dilutiondetail:{
        type:String,
        required:true
    },
    

},
    {
    timestamps: true,
    }
);

entrepreneurSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


entrepreneurSchema.pre('save', async function (next) {
    if (!this.isModified) {
        next();
    } 
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const Entrepreneur = mongoose.model("Entrepreneur", entrepreneurSchema);
module.exports = Entrepreneur;