const express=require('express');
const app=express();
const dotenv=require('dotenv');
const connectDb=require('./dbconnect/db.js');
const entrepreneurRoute=require('./routes/entrepreneurRoute.js')
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5500;
connectDb();
const server=app.listen(5500, function () {
    console.log(`server is on at port ${PORT}`);
});

app.use('/entrepreneur',entrepreneurRoute);
