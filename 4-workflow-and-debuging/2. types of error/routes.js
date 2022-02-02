const fs = require('fs');

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    //routing
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log('ini chunk', chunk);
      console.log('ini chunk', chunk);
      console.log('ini chunk', chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split('=')[1];
      console.log('ini message', message);
      fs.writeFileSync('message.txt', message, (error) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
    //
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>My First HTML response from server node</head>');
  res.write(
    '<body>My First HTML response from server node, ist work baby</body>'
  );
  res.write('</html>');
};

module.exports = requestHandler;
