require("dotenv").config();
const express = require("express");
const app= express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser")
const port = process.env.PORT || 8000;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/pay",async(req,res)=>
{
    console.log(req.body.token)
    await Stripe.charges.create({
        source:req.body.token.id,
        amount:req.body.amount,
        currency:"usd",
    });
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})