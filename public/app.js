(function(document, window, undefined, $){
  (function(){
    return obj = {
      init: function() {
        self = this
        self.rangePrice(),
        self.setSearch(),
        self.request('/init', 'GET', {})
        .then(function(response){
          self.initializeSelects(response)
        })
        .catch(function(error){
          console.log("Error initializing data. Error: " + error)
        }),
        $('#buscar').on("click",function(){
          self.filter()
        })
      },
      rangePrice: () => {
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
      },
      setSearch: () => {
        let busqueda = $('#checkPersonalizada')
        busqueda.on('change', (e) => {
          if (this.customSearch == false) {
            this.customSearch = true
          } else {
            this.customSearch = false
          }
          $('#personalizada').toggleClass('invisible')
        })
      },
      request: (url, method, data) => {
        const response = await fetch(url, {
          method: method,
          mode: 'same-origin',
          cache: 'no-cache',
          credentials: "same-origin",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        return response.json()
      },
      initializeSelects: (data) => {
        var citySelect = $('#ciudad')
        var typeSelect = $('#tipo')
        data.cities.map(function(city, index){
          let string = `<option value="${city}">${city}</option>`
          citySelect.append(string)
        })
        data.types.map(function(type, index){
          let string = `<option value="${type}">${type}</option>`
          typeSelect.append(string)
        })
        $("#ciudad,#tipo").show()
      },
      filter: function() {
        var self = this
        var range = $("#rangoPrecio").data("ionRangeSlider")
        var data = {
          city: $('#ciudad').val(),
          type: $('#tipo').val(),
          price: {
            max: range.result.to,
            min: range.result.from
          }
        }
        data = {data: JSON.stringify(data)}
        this.request('/filter','POST', data)
        .then(function(response){
          self.showResults(response)
        })
        .catch(function(error){
          console.log("Filter error. Error: " + error)
        })
      },
      showResults: function(data) {
        var self = this
        var list = $('.list')
        list.empty()
        data,map(function(item, index){
          let card = `<div class="card horizontal">
          <div class="card-image">
            <img src="images/home.jpg">
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <div>
                <b>Direccion: </b><p>${item.Direccion}</p>
              </div>
              <div>
                <b>Ciudad: </b><p>${item.City}</p>
              </div>
              <div>
                <b>Telefono: </b><p>${item.Telefono}</p>
              </div>
              <div>
                <b>Código postal: </b><p>${item.Codigo_postal}</p>
              </div>
              <div>
                <b>Precio: </b><p>${item.Precio}</p>
              </div>
              <div>
                <b>Tipo: </b><p>${item.Tipo}</p>
              </div>
            </div>
            <div class="card-action right-align">
              <a href="#">Ver más</a>
            </div>
          </div>
        </div>`;
          list.append
        })
      }
    }
  })()
  obj.init()
})(document, window, undefined, jQuery)
