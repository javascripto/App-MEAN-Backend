const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

// middlewares de formularios e json providos pelo body-parser
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`)
})

// server.use(function(req, res, next) {
//   console.log('Meu middleware global 1')
//   next()
// })
// server.use(function(req, res) {
//   console.log('Meu middleware global 2')
//   res.send('Funcionou')
// })

module.exports = server
