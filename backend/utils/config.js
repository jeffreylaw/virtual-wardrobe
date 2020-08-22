require('dotenv').config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: 'ddm0yp9dq',
    api_key: '124267175213139',
    api_secret: 'z_19hv6V2K_hZeFylXkW4YmE1NQ'
  });

module.exports = {
    PORT, MONGODB_URI, cloudinary
}