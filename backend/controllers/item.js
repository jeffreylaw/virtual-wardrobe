const jwt = require('jsonwebtoken')
const tokenHelper = require('../tokenHelper')
const Item = require("../models/item")
const User = require('../models/user')
const config = require('../utils/config')

exports.Item = async function(request, response) {
    const item = await Item.findById(request.params.id)
    if (item) {
        response.json(item)
    } else {
        response.status(404).end()
    }
}

exports.Items = async function(request, response) {
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })  
    }
    const items = await Item.find({ user: decodedToken.id }).populate('user', { username: 1, name: 1 })
    response.json(items)
}

exports.CreateItem = async function(request, response) {
    const body = request.body
    const token = tokenHelper.getTokenFrom(request)

    // Decode the token and return the object which the token was based on.
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        // If there is no token or object decoded from token does not contain id, we return status code 401.
        return response.status(401).json({ error: 'Token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const item = new Item({
        brand: body.brand,
        description: body.description,
        category: body.category,
        user: user._id,
        imageID: body.imageID
    })

    const savedItem = await item.save()
    console.log(savedItem)
    // The user object also changes. The id of the new item is stored in the notes field.
    user.items = user.items.concat(savedItem._id)
    await user.save()

    response.json(savedItem)
}

exports.DeleteItem = async function(request, response) {
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })
    } 

    const user = await User.findById(decodedToken.id)
    const item = await Item.findById(request.params.id)

    if (item.user.toString() === user.id.toString()) {
        let deletedItem = await Item.findByIdAndRemove(request.params.id)
        await config.cloudinary.uploader.destroy(item.imageID, { resource_type: 'image', invalidate: true })
        response.status(204).end()
    } else {
        response.status(401).json({ error: 'You are not authorized to delete this item' })
    }
}

exports.UpdateItem = async function(request, response) {
    const body = request.body
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })
    }
    const item = {
        brand: body.brand,
        description: body.description,
        category: body.category
    }

    const updatedItem = await Item.findByIdAndUpdate(request.params.id, item, { new: true, runValidators: true }).populate('user', { username: 1, name: 1 })
    if (updatedItem) {
        response.json(updatedItem)
    } else {
        response.status(404).end()
    }
}