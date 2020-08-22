const jwt = require('jsonwebtoken')
const tokenHelper = require('../tokenHelper')
const Outfit = require('../models/outfit')
const User = require('../models/user')


exports.Outfit = async function (request, response) {
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const outfit = await Outfit.findById(request.params.id)
        .populate('headwear', { description: 1, imageID: 1 })
        .populate('outerwear', { description: 1, imageID: 1 })
        .populate('top', { description: 1, imageID: 1 })
        .populate('bottom', { description: 1, imageID: 1 })
        .populate('socks', { description: 1, imageID: 1 })
        .populate('footwear', { description: 1, imageID: 1 })

    if (!outfit.private) {
        return response.json(outfit)
    }
    if ((!token || !decodedToken.id) && outfit.private) {
        return response.status(401).json({ error: 'You do not have permission to view this outfit' })
    }

    const user = await User.findById(decodedToken.id)
    if (outfit.user.toString() === user.id.toString()) {
        return response.json(outfit)
    } else {
        return response.status(401).json({ error: 'You do not have permission to view this outfit' })
    }
}

exports.Outfits = async function (request, response) {
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    const outfits = await Outfit.find({ user: decodedToken.id })
        .populate('headwear', { description: 1, imageID: 1 })
        .populate('outerwear', { description: 1, imageID: 1 })
        .populate('top', { description: 1, imageID: 1 })
        .populate('bottom', { description: 1, imageID: 1 })
        .populate('socks', { description: 1, imageID: 1 })
        .populate('footwear', { description: 1, imageID: 1 })

    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })
    }

    return response.json(outfits)
}

exports.CreateOutfit = async function (request, response) {
    const body = request.body
    const token = tokenHelper.getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const outfit = new Outfit({
        user: user._id,
        private: body.private,
        headwear: body.headwear || null,
        outerwear: body.outerwear || null,
        top: body.top,
        bottom: body.bottom,
        socks: body.socks || null,
        footwear: body.footwear || null
    })

    let savedOutfit = await outfit.save()
    user.outfits = user.outfits.concat(savedOutfit._id)
    await user.save()
    savedOutfit = await Outfit.findById(savedOutfit._id)
        .populate('headwear', { description: 1, imageID: 1 })
        .populate('outerwear', { description: 1, imageID: 1 })
        .populate('top', { description: 1, imageID: 1 })
        .populate('bottom', { description: 1, imageID: 1 })
        .populate('socks', { description: 1, imageID: 1 })
        .populate('footwear', { description: 1, imageID: 1 })
    response.json(savedOutfit)
}

exports.DeleteOutfit = async function (request, response) {
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const outfit = await Outfit.findById(request.params.id)

    if (user.id.toString() === outfit.user.toString()) {
        let deletedOutfit = await Outfit.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } else {
        response.status(401).json({ error: 'You are not authorized to delete this outfit' })
    }
}

exports.UpdateOutfit = async function (request, response) {
    const body = request.body
    const token = tokenHelper.getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'Token missing or invalid' })
    }
    const headwearID = body.headwear ? body.headwear.id : null
    const outerwearID = body.outerwear ? body.outerwear.id : null
    const topID = body.top ? body.top.id : null
    const bottomID = body.bottom ? body.bottom.id : null
    const socksID = body.socks ? body.socks.id : null
    const footwearID = body.footwear ? body.footwear.id : null

    const outfit = {
        private: body.private,
        headwear: headwearID,
        outerwear: outerwearID,
        top: topID,
        bottom: bottomID,
        socks: socksID,
        footwear: footwearID
    }

    const updatedOutfit = await Outfit.findByIdAndUpdate(request.params.id, outfit, { new: true, runValidators: true })
        .populate('headwear', { description: 1, imageID: 1 })
        .populate('outerwear', { description: 1, imageID: 1 })
        .populate('top', { description: 1, imageID: 1 })
        .populate('bottom', { description: 1, imageID: 1 })
        .populate('socks', { description: 1, imageID: 1 })
        .populate('footwear', { description: 1, imageID: 1 })

    if (updatedOutfit) {
        response.json(updatedOutfit)
    } else {
        response.status(404).end()
    }
}