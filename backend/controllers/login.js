const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.Login = async function(request, response) {
    const body = request.body

    const user = await User.findOne({ username: body.username })
    // Compare the hash and password 
    const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.passwordHash)
    if (!(user && passwordCorrect)) {
        return response.status(401).json({
            error: 'Invalid credentials'
        })
    }
    const userForToken = {
        username: user.username,
        id: user._id
    }

    // Create a token with jwt.sign()
    // Digitally sign using a string from the SECRET variable as the secret
    const token = jwt.sign(userForToken, process.env.SECRET)

    return response.status(200).json({ token, username: user.username, name: user.name, roles: user.roles })
}