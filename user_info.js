const mongoose=require('mongoose');
const brcypt=require('bcrypt');

const Arrayschema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
email: {
    type: String,
    required: true
}, 
password: String,
})




Arrayschema.pre('save',async function(next){
    try{
      const salt =await brcypt.genSalt(10)
     const hashPassword=await brcypt.hash(this.password, salt)
    this.password= hashPassword
    next()
    }catch(error){
    next(error)
    }
    
    })


module.exports= mongoose.model("Arr", Arrayschema )