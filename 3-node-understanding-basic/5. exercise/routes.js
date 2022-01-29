const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>exercise</title></head>');
    res.write(
      '<body>Hello I am nas. this is my exercise <br /> <a href="http://localhost:3000/user" >LIST USER</a></body>'
    );
    res.write('</html>');
  }
  if (url === '/user') {
    res.write('<html>');
    res.write('<head><title>exercise</title></head>');
    res.write(
      '<body><a href="http://localhost:3000/">BACK TO HOME</a><br/><br/><form action="/create-user" method="POST"><input type="text" placeholder="your username" name="message"/><button type="submit">Send</button></form><h3>USERS LIST</h3><ul><li>NAS</li><li>TIO</li></ul></body>'
    );
    res.write('</html>');
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (dataCome) => {
      console.log(dataCome);
      body.push(dataCome);
    });

    req.on('end', () => {
      const parserBody = Buffer.concat(body).toString();
      const message = parserBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;
