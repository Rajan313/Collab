const asyncHandler = require('express-async-handler');
const Entrepreneur = require('../model/entrepreneur.js')
const generateToken = require('../dbConnect/generateToken.js');
const bodyParser = require("body-parser");
const registerUser = asyncHandler(async(req,res) => {
   
console.log(req.body);
    const { name, email, password,username, pic,phone,street,city,state,country,pincode,companyName,companyregno,dateofreg,ageofstartup,gstin,stakeholder,companyurl,ownershiptype,dilutiondetail } = req.body
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
    console.log("Profile Picture:", pic);
    console.log("Phone:", phone);
    console.log("Street:", street);
    console.log("City:", city);
    console.log("State:", state);
    console.log("Country:", country);
    console.log("Pin Code:", pincode);
    console.log("Company Name:", companyName);
    console.log("Company Registration Number:", companyregno);
    console.log("Date of Registration:", dateofreg);
    console.log("Age of Startup:", ageofstartup);
    console.log("GSTIN:", gstin);
    console.log("Major Stakeholders:", stakeholder);
    console.log("Company Website:", companyurl);
    console.log("Ownership Type:", ownershiptype);
    console.log("Dilution Details:", dilutiondetail);






    if (!name || !email || !password||!phone||!street||!city||!state||!country||!pincode||!companyName||!companyregno||!dateofreg||!ageofstartup||!gstin||!stakeholder||!companyurl||!ownershiptype||!dilutiondetail ) {
        res.status(400);
        throw new Error('please enter all the fields')
    }
    const userExists = await Entrepreneur.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await Entrepreneur.create({ name: name, email: email, password: password,username:username, pic: pic,phone:phone,street:street,city:city,state:state,country:country,pincode:pincode,companyName:companyName,companyregno:companyregno,dateofreg:dateofreg,ageofstartup:ageofstartup,gstin:gstin,stakeholder:stakeholder,companyurl:companyurl,ownershiptype:ownershiptype,dilutiondetail:dilutiondetail  });
    if (user) {
        // res.status(201).json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     pic: user.pic,
        //     token:generateToken(user._id)

        // });
        res.render("entrepreneur/entrepreneurlogin");
        console.log('done');
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const user = await Entrepreneur.findOne({ email });
    if (user&&(await user.matchPassword(password))) {
        // res.json({
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     pic: user.pic,
        //     token: generateToken(user._id),
            
        // });
        res.render("entrepreneur/entrepreneur",{user:user.name,dat:'You are accessing the main page after login'})
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
});




module.exports = { registerUser,authUser };