const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//Error: Unhandled promise rejection
//The error occurs when there is an unhandled promise rejection. 
//This is often due to an asynchronous operation that throws an error, but the error isn't caught by a .catch() block.