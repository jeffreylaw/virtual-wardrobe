const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['outerwear', 'tops', 'bottoms', 'footwear'],
        required: true
    },
    imageID: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

itemSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v  
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item