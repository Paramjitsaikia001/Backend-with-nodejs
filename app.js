//using common.js

// const http = require('http');  // Import the http module to create the server

// // Create a server that responds to requests with 'Hello, World!'
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;  // 200 means 'OK'
//   res.setHeader('Content-Type', 'text/plain');  // The response will be plain text
//   res.end('Hello, World2!\n');  // End the response with the message
// });

// const PORT = 3000;  // The port number where the server will listen (3000 is common)
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);  // Output when the server starts
// });




//using ES6 module

// Import the express module using ES6 syntax
import express from 'express';


// Create an instance of an Express application
const app = express();

//seving Static file from the express
//serve static file from the public
app.use(express.static('public'));

// Define a route for GET requests to the home ("/") URL
app.get('/', (req, res) => {
  res.send('Hello, World from Express with ES6 Modules!');
});



//route to handle the "/About" URL
app.get('/About',(req,res)=>{
res.send("this  is about page and my name is paramjit saikia");
})



// Set the port for the server to listen on
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
