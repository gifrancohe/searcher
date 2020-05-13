var fs      = require('fs')

module.exports = {
    getCities: (dataPath) => {
        return new Promise(function(resolve, reject){
            fs.readFile(dataPath, 'utf8', function (err, readData) {
                if(err) reject(err)
                var cities = []
                JSON.parse(readData).forEach(element => {
                    cities.push(element['Ciudad'])
                });
                var result = Array.from(new Set(cities));
                resolve(result)
            })
        })
    },
    getTypes: (dataPath) => {
        return new Promise(function(resolve, reject){
            fs.readFile(dataPath, 'utf8', function (err, readData) {
                if(err) reject(err)
                var types = []
                JSON.parse(readData).forEach(element => {
                    types.push(element['Tipo'])
                });
                var result = Array.from(new Set(types));
                resolve(result)
            })
        })
    }
}