// === create server with express
const http = require('http');
const express = require('express');
const app = express();

//  === middleware | berfungsi sebagai jembatan pengaturan ketika req, res
app.use((req, res, next) => {
    console.log('first middleware');
    next() // berfungsi untuk melakukan eksekusi middleware selanjutnya
});
app.use((req, res, next) => {
  console.log('second middleware');
});

const server = http.createServer(app);
server.listen(3000);
