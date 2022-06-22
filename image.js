const mongoose=require('mongoose');

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Image: {
        data:Buffer,
        contentType: String
    }
    })

    module.exports= mongoose.model("ImageModel", ImageSchema)