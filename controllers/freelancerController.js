const asyncHandler = require('express-async-handler');
const Freelancer = require('../model/freelancer.js')
const generateToken = require('../dbConnect/generateToken.js');
const bodyParser = require("body-parser");
const registerUser = asyncHandler(async(req,res) => {
   
console.log(req.body);
    const { name, email, password,username, pic,phone,street,city,state,country,pincode,jobTitle,skills,portfolio,linkdln,yearofExperience,workhours,bankName,accountNumber,IFSCcode} = req.body
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);
    // console.log("Username:", username);
    // console.log("Profile Picture:", pic);
    // console.log("Phone:", phone);
    // console.log("Street:", street);
    // console.log("City:", city);
    // console.log("State:", state);
    // console.log("Country:", country);
    // console.log("Pin Code:", pincode);
    // console.log("Company Name:", companyName);
    // console.log("Company Registration Number:", companyregno);
    // console.log("Date of Registration:", dateofreg);
    // console.log("Age of Startup:", ageofstartup);
    // console.log("GSTIN:", gstin);
    // console.log("Major Stakeholders:", stakeholder);
    // console.log("Company Website:", companyurl);
    // console.log("Ownership Type:", ownershiptype);
    // console.log("Dilution Details:", dilutiondetail);






    if (!name||!email||!password||!username||!phone||!street||!city||!state||!country||!pincode||!jobTitle||!skills||!portfolio||!linkdln||!yearofExperience||!workhours||!bankName||!accountNumber||!IFSCcode) {
        res.status(400);
        throw new Error('please enter all the fields')
    }
    const userExists = await Freelancer.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await Freelancer.create({ name:name, email:email, password:password,username:username,phone:phone,street:street,city:city,state:state,country:country,pincode:pincode,jobTitle:jobTitle,skills:skills,portfolio:portfolio,linkdln:linkdln,yearofExperience:yearofExperience,workhours:workhours,bankName:bankName,accountNumber:accountNumber,IFSCcode:IFSCcode});
    if (user) {
        // res.status(201).json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     pic: user.pic,
        //     token:generateToken(user._id)

        // });
        console.log('done');
        res.render("freelancer/freelancerlogin")
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await Freelancer.findOne({ email });
    if (user&&(await user.matchPassword(password))) {
        // res.json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     pic: user.pic,
        //     token: generateToken(user._id),
            
        // });
        res.render("freelancer/freelancer",{user:user.name,dat:'You are accessing the main page after login'})
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
});




module.exports = { registerUser,authUser };