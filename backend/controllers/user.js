const bcrypt = require('bcrypt')
const User = require("../models/user")

exports.Users = async function(request, response) {
    const users = await User.find({}).populate('items', { description: 1, category: 1 })
    response.json(users)
}

exports.CreateUser = async function(request, response) {
    console.log("create user")
    const body = request.body
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash
    })

    const savedUser = await user.save()
    console.log(savedUser)
    response.json(savedUser)
}