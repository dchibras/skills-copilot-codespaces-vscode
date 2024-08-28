// Create web server
// 1. Create a web server
// 2. Create a route for "/comments"
// 3. Return a JSON response with a list of comments
// 4. Start the server

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ comments: ['Comment 1', 'Comment 2'] }));
  } else {
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
