const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url);
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

  // redirect
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.text', 'NAS DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>My First HTML response from server node</head>');
  res.write(
    '<body>My First HTML response from server node, ist work baby</body>'
  );
  res.write('</html>');
});

server.listen(3000);
