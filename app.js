const http = require('http');  // Import the http module to create the server

// Create a server that responds to requests with 'Hello, World!'
const server = http.createServer((req, res) => {
  res.statusCode = 200;  // 200 means 'OK'
  res.setHeader('Content-Type', 'text/plain');  // The response will be plain text
  res.end('Hello, World2!\n');  // End the response with the message
});

const PORT = 3000;  // The port number where the server will listen (3000 is common)
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);  // Output when the server starts
});
