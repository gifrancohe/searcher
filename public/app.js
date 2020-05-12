const http = require('http')

const PORT = 8080

let handleRequest = (req, res) => {
  res.end('Funcionando correctamente. Recurso pedido: ' + req.url)
}

var server = http.createServer(handleRequest)
server.listen(PORT, function(){
  console.log('Server is listeing in port: ' + PORT)
}) 


//Inicializador del elemento Slider
$("#rangoPrecio").ionRangeSlider({
  type: "double",
  grid: false,
  min: 0,
  max: 100000,
  from: 1000,
  to: 20000,
  prefix: "$"
})

function setSearch() {
  let busqueda = $('#checkPersonalizada')
  busqueda.on('change', (e) => {
    if (this.customSearch == false) {
      this.customSearch = true
    } else {
      this.customSearch = false
    }
    $('#personalizada').toggleClass('invisible')
  })
}

setSearch()
