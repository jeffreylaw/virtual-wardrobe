const UserController = require('./controllers/user')
const ItemController = require('./controllers/item')
const LoginController = require('./controllers/login')
const OutfitController= require('./controllers/outfit')

module.exports = function(app) {
    // app.get('/users/:id', UserController.User)
    app.get('/users', UserController.Users)
    app.post('/users', UserController.CreateUser)
    // app.delete('/users/:id', UserController.DeleteUser)
    // app.put('/users/:id', UserController.UpdateUser)

    app.post('/login', LoginController.Login)

    app.get('/items/:id', ItemController.Item)
    app.get('/items', ItemController.Items)
    app.post('/items', ItemController.CreateItem)
    app.delete('/items/:id', ItemController.DeleteItem)
    app.put('/items/:id', ItemController.UpdateItem)


    app.get('/outfits/:id', OutfitController.Outfit)
    app.get('/outfits', OutfitController.Outfits)
    app.post('/outfits', OutfitController.CreateOutfit)
    app.delete('/outfits/:id', OutfitController.DeleteOutfit)
    app.put('/outfits/:id', OutfitController.UpdateOutfit)
}