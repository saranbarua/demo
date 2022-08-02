const mongoose=require('mongoose');
const express =require('express');
const app =express();


var bodyParsar= require('body-parser');
app.use(bodyParsar.json());
app.use(express.json());


mongoose.connect("mongodb+srv://sarandemo:as4wSNDeNl4HO9xB@cluster0.swixu.mongodb.net/user_info?retryWrites=true&w=majority",() =>{
    console.log("connected into DB")
},
e=>console.error(e)
)

 //Import Routes
 const userRoute = require("./routes/route")


 //Route Middlewares
app.use("/api", userRoute);

app.listen(8000, () => {
  console.log(`Example app listening on port`)
})

