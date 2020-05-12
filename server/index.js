const http = require('http')
const express = require('express')
const Routing = require('./requestRounting.js')

const PORT = 8080
const app = express()

const server = http.createServer(app)

app.use('/', Routing)

server.listen(PORT, function(){
  console.log('Server is listeing in port: ' + PORT)
})