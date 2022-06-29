const mongoose=require('mongoose');
const Arr =require('./user_info');
const express =require('express');
const app =express();

var bodyParsar= require('body-parser');
app.use(bodyParsar.json());

mongoose.connect("mongodb+srv://yourid&pass/user_info?retryWrites=true&w=majority",() =>{
    console.log("connected")
},
e=>console.error(e)
)




app.post("/", (req, res, next) => {
  const user = new Arr({
    _id: new mongoose.Types.ObjectId(),
    Cname: req.body.Cname,
   Position: req.body.Position,
    Year: req.body.Year,
    Address: req.body.Address,
    _Address:new mongoose.Types.ObjectId(),
    Address: req.body.Address,
    State: req.body.State,
    Country : req.body.Country
  });
  user.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created user successfully",
        createdUser: {
            Cname: result.Cname,
            Position: result.Position,
            Year: result.Year,
            Address: result.Address,
            _id: result._id,
            _Address: result.Address,
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
 Arr.findOne({ name :name}, function(err,user){
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