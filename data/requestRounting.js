var     express = require('express'),
        Router  = express.Router()

var getData = require('./getData.js')

Router.get('/init', (req, res) => {
    getData.getInitValues()
    .then(function(result){
        res.json(result)
    })
    .catch(function(error){
        console.log("Error: " + error)
        res.sendStatus(500).json(erorr)
    })
    
})

Router.post('/filter', (req, res) => {
    getData.getFilter(req.body.data)
    .then(function(result){
        res.json(result)
    })
    .catch(function(error){
        console.log('Error: ' + error)
        res.sendStatus(500).json(error)
    })
})

module.exports = Router

