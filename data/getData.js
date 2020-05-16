var fs      = require('fs'),
    path    = require('path')

var dataPath = path.join(__dirname, '../') + 'public/data.json'

module.exports = {
    getInitValues: () => {
        var cities = [], types = []
        return new Promise(function(resolve, reject){
            fs.readFile(dataPath, 'utf8', function(err, readData) {
                if(err) reject(err)
                JSON.parse(readData).forEach(element => {
                    cities.push(element['Ciudad'])
                    types.push(element['Tipo'])
                })
                cities = Array.from(new Set(cities))
                types = Array.from(new Set(types))
                resolve({cities: cities, types: types})
            })
        })
    },
    getFilter: (data) => {
        data = JSON.parse(data)
        return new Promise(function(resolve, reject){
            fs.readFile(dataPath, 'utf8', function(err, readData) {
                if(err) reject(err)
                var result = JSON.parse(readData).filter((item) => {
                    let flag = true
                    //City validation is done
                    if(data.city != "") { 
                        if(data.city != item.Ciudad){
                            flag = false
                        }
                    }
                    //Type validation is done
                    if(flag && data.type != "") {
                        if(data.type != item.Tipo) {
                            flag = false
                        }
                    }
                    //Price validation is done
                    let price = Number(item.Precio.replace(/[^0-9.-]+/g,""));
                    if(flag && !(data.price.min <= price && data.price.max >= price)) {
                        flag = false
                    }
                    
                    return flag;
                })
                resolve(result)
            })
        })
    }
}