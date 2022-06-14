const mongoose = require('mongoose')

const outfitSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    private: {
        type: Boolean,
        default: true
    },
    outerwear: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    },
    top: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item',
        required: true
    },
    bottom: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item',
        required: true
    },
    footwear: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Item'
    }
})

outfitSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Outfit = mongoose.model('Outfit', outfitSchema)

module.exports = Outfit