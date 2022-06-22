const mongoose=require('mongoose');
const Info =require('./user_info');
const express =require('express');
const app =express();
const multer=require('multer')
const bcrypt=require('bcrypt');
const ImageModel=require('./image')

var bodyParsar= require('body-parser');
app.use(bodyParsar.json());

mongoose.connect("mongodb+srv://sarandemo:as4wSNDeNl4HO9xB@cluster0.swixu.mongodb.net/user_info?retryWrites=true&w=majority",() =>{
    console.log("connected")
},
e=>console.error(e)
)




app.post("/", (req, res, next) => {
  const user = new Info({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  user.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created user successfully",
        createdUser: {
            name: result.name,
            email: result.email,
            password: result.password,
            _id: result._id,
            request: {
                type: 'GET',
                url: "localhost:8000/info" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

app.post('/login', function(req,res){
 var name = req.body.name;
 var password= req.body.password;
 Info.findOne({ name :name}, function(err,user){
   if(err){
     console.log(err);
     return res.status(500).send();
   }
     if(!user){
      return res.status(404).send();

     }

     return res.status(200).send();
    // return bcrypt.compare(password,hash);
 }) 

})






app.listen(8000, () => {
    console.log(`Example app listening on port`)
  })

module.exports =app;