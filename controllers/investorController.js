const asyncHandler = require('express-async-handler');
const Investor = require('../model/investor.js')
const generateToken = require('../dbConnect/generateToken.js');
const bodyParser = require("body-parser");
const registerUser = asyncHandler(async(req,res) => {
   
console.log(req.body);
    const { name, email, password,username, pic,phone,street,city,state,country,pincode,companyName,gstNumber,registrationDetails,legalLicense,aboutBusiness,minInvestment,maxInvestment } = req.body
   






    if (!name||!email||!password||!username||!phone||!street||!city||!state||!country||!pincode||!companyName||!gstNumber||!registrationDetails||!legalLicense||!aboutBusiness||!minInvestment||!maxInvestment) {
        console.log("name:", name);
console.log("email:", email);
console.log("password:", password);
console.log("username:", username);
console.log("pic:", pic);
console.log("phone:", phone);
console.log("street:", street);
console.log("city:", city);
console.log("state:", state);
console.log("country:", country);
console.log("pincode:", pincode);
console.log("companyName:", companyName);
console.log("gstNumber:", gstNumber);
console.log("registrationDetails:", registrationDetails);
console.log("legalLicense:", legalLicense);
console.log("aboutBusiness:", aboutBusiness);
console.log("minInvestment:", minInvestment);
console.log("maxInvestment:", maxInvestment);
        res.status(400);
        throw new Error('please enter all the fields')
    }
    const userExists = await Investor.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await Investor.create({ name:name, email:email, password:password,username:username, pic:pic,phone:phone,street:street,city:city,state:state,country:country,pincode:pincode,companyName:companyName,gstNumber:gstNumber,registrationDetails:registrationDetails,legalLicense:legalLicense,aboutBusiness:aboutBusiness,minInvestment:minInvestment,maxInvestment:maxInvestment } );
    if (user) {
        // res.status(201).json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     pic: user.pic,
        //     token:generateToken(user._id)

        // });
        console.log('done');
        res.render("investor/investorlogin")
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await Investor.findOne({ email });
    if (user&&(await user.matchPassword(password))) {
        // res.json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     pic: user.pic,
        //     token: generateToken(user._id),
            
        // });
        res.render("investor/investor",{user:user.name,dat:'You are accessing the main page after login'})
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
});




module.exports = { registerUser,authUser };