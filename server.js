const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDb=require('./dbconnect/db.js');
bodyParser = require('body-parser');
app.set("view engine","ejs");
const entrepreneurRoute=require('./routes/entrepreneurRoute.js')
const freelancerRoute=require('./routes/freelancerRoute.js')
const investorRoute=require('./routes/investorRoute.js')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5500;
connectDb();
const server=app.listen(5500, function () {
    console.log(`server is on at port ${PORT}`);
});

app.use('/entrepreneur',entrepreneurRoute);
app.use('/freelancer',freelancerRoute);
app.use('/investor',investorRoute);
