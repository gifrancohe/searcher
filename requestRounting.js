var     express = require('express'),
        path    = require('path'),
        Router  = express.Router()

var viewsPath = path.join(__dirname, '../') + 'public/'

Router.get('/', (req, res) => {
    res.sendFile(viewsPath + 'index.html')
    res.end()
})

module.exports = Router

