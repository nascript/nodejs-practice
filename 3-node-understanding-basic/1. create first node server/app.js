/** ---------- CORE MODULE OF NODE
 * http = launch a server and send requests,
 * https = launch a SSL server,
 * fs,
 * path,
 * os
 *
 */

const http = require('http');

const server = http.createServer((req, res) => {
  // ======= request =======
  //   console.log(req);
  // console.log(req.url, req.headers, req.method);
  //   process.exit();

  // ======= response =======
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head>My First HTML response from server node</head>');
  res.write(
    '<body>My First HTML response from server node, ist work baby</body>'
  );
  res.write('</html>');
});

server.listen(3000);
