var bodyParser   = require('body-parser'),
    http         = require('http'),
    express      = require('express')  

var port         = port = process.env.PORT || 8080, 
    app          = express(),
    Server       = http.createServer(app)     

var Routing = require('./data/requestRounting.js')

app.use('/searcher', Routing)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


Server.listen(port, function(){
  console.log('Server is listeing in port: ' + port)
})
