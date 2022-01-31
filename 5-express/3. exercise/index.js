const http = require('http')
const express = require('express')
const app = express()

// first middleware
// app.use((req, res, next) => {
//   console.log('this is first middleware');
//   res.send('<h3>Hi, Welcome to my code</h3>');
//   next();
// });

// middleware
app.use((req, res, next) => {
  console.log('this is second middleware')
  next()
})

// handle request
app.use('/user', (req, res, next) => {
  res.send(
    '<h3>Hi, this is endpoint "/user" </h3> list of user <ul><li>nas</li><li>nas</li></ul>'
  )
})

app.use('/', (req, res, next) => {
  console.log('this is first middleware')
  res.send('<p>Hi, Welcome to my code <b>this is endpoint "/"</b></p>')
})

const server = http.createServer(app)
server.listen(3000)
