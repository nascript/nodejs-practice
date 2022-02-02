// === create server with express
const http = require('http')
const express = require('express')
const app = express()

app.use('/add', (req, res, next) => {
  console.log('second middleware')
  res.send('<h2>Hello this is second routes</h2>')
})

app.use('/', (req, res, next) => {
  console.log('first middleware')
  res.send('<h1>Welcome to express JS</h1>')
})

const server = http.createServer(app)
server.listen(3000)
