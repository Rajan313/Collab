const asyncHandler = require('express-async-handler');
const Entrepreneur = require('../model/entrepreneur.js')
const generateToken = require('../dbConnect/generateToken.js');
const registerUser = asyncHandler(async(req,res) => {
   

    const { name, email, password, pic,phone,street,city,state,country,pincode,company,companyregno,dateofreg,ageofstartup,gstin,stakeholder,companyurl,ownershiptype,dillutiondetail } = req.body
    if (!name || !email || !password||!phone||!street||!city||!state||!country||!pincode||!company||!companyregno||!dateofreg||!ageofstartup||!gstin||!stakeholder||!companyurl||!ownershiptype||!dillutiondetail ) {
        res.status(400);
        throw new Error('please enter all the fields')
    }
    const userExists = await Entrepreneur.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await Entrepreneur.create({ name: name, email: email, password: password, pic: pic,phone:phone,street:street,city:city,state:state,country:country,pincode:pincode,company:company,companyregno:companyregno,dateofreg:dateofreg,ageofstartup:ageofstartup,gstin:gstin,stakeholder:stakeholder,companyurl:companyurl,ownershiptype:ownershiptype,dillutiondetail:dillutiondetail  });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token:generateToken(user._id)

        });
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await Entrepreneur.findOne({ email });
    if (user&&(await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
            
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password")
    }
});




module.exports = { registerUser,authUser };