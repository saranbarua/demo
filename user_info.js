const mongoose=require('mongoose');


const newschema = new mongoose.Schema({ 
            Address: {
                type: String,
                required: true
            },
            State: {
                type: String,
                required: true
            }, 
           Country : { type: String,
                required: true
            }
        });
        const Arrayschema = new mongoose.Schema({
            Cname: {
                type: String,
                required: true
            },
            Position: {
                type: String,
                required: true
            }, 
            Year: { type: String,
                required: true
            }, 
            Address: newschema 
            
            });



module.exports= mongoose.model("Arr", Arrayschema )