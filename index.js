var bodyParser   = require('body-parser'),
    http         = require('http'),
    path         = require('path'),
    express      = require('express')  

var port         = port = process.env.PORT || 8080, 
    app          = express(),
    Server       = http.createServer(app)     

var Routing = require('./requestRounting.js')
var InitValues = require('./getInitialValues.js')

var dataPath = path.join(__dirname, './') + 'public/data.json'

let cities = InitValues.getCities(dataPath);
let types = InitValues.getTypes(dataPath);

var $selectCities = document.getElementById('selDemo')

cities.then(function(result){
  result.forEach(element => {
    let opt = document.createElement('option')
    opt.appendChild( document.createTextNode(element))
    opt.value = element
    $selectCities.appendChild(opt)
  });
})

app.use('/searcher', Routing)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


Server.listen(port, function(){
  console.log('Server is listeing in port: ' + port)
})
