const mongoose=require('mongoose');

    const linkSchema = new mongoose.Schema({
        Facebook: {
                type: String,
                required: true
              },
      
        Instagram: {
                type: String,
                required: true
                },
        Linkedin: {
               type: String,
               required: true
               }
         });

    const linksSchema = new mongoose.Schema ({
        links: linkSchema
         })



module.exports= mongoose.model("Link", linksSchema )