const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3001;




// Configure the proxy middleware
const proxyOptions = {
    target: 'http://146.148.16.119', // Replace with your backend server URL
    changeOrigin: true,
};

// Create the proxy middleware
const proxy = createProxyMiddleware(proxyOptions);

// Set up a route to proxy frontend requests to the backend
app.use('/', proxy);

// Start the server
app.listen(port, () => {
    console.log(`Intermediary server listening`);
});
