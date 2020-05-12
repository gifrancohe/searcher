const express = require('express')
const Router = express.Router()

Router.get('/users', (req, res) => {
    res.send('Estas en el modulo de usuarios')
    res.end()
})

Router.get('/admin', (req, res) => {
    res.send('Estas en el modulo de admins')
    res.end()
})

Router.get('/dashboard', (req, res) => {
    res.send('Estas en el modulo de dashboard')
    res.end()
})

Router.get('/*', (req, res) => {
    res.send('No se encontro el recurso solicitado')
    res.end()
})

module.exports = Router