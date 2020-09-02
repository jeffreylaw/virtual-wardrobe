const UserController = require('./controllers/user')
const ItemController = require('./controllers/item')
const LoginController = require('./controllers/login')
const OutfitController= require('./controllers/outfit')

module.exports = function(app) {
    // app.get('/api/users/:id', UserController.User)
    app.get('/api/users', UserController.Users)
    app.post('/api/users', UserController.CreateUser)
    // app.delete('/api/users/:id', UserController.DeleteUser)
    // app.put('/api/users/:id', UserController.UpdateUser)

    app.post('/api/login', LoginController.Login)

    app.get('/api/items/:id', ItemController.Item)
    app.get('/api/items', ItemController.Items)
    app.post('/api/items', ItemController.CreateItem)
    app.delete('/api/items/:id', ItemController.DeleteItem)
    app.put('/api/items/:id', ItemController.UpdateItem)


    app.get('/api/outfits/:id', OutfitController.Outfit)
    app.get('/api/outfits', OutfitController.Outfits)
    app.post('/api/outfits', OutfitController.CreateOutfit)
    app.delete('/api/outfits/:id', OutfitController.DeleteOutfit)
    app.put('/api/outfits/:id', OutfitController.UpdateOutfit)
}