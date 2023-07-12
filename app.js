const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;




// Configure the proxy middleware
const proxyOptions = {
    target: 'http://worldtimeapi.org',
    changeOrigin: true,
};

// Create the proxy middleware
const proxy = createProxyMiddleware(proxyOptions);

// Add logging middleware
app.use(morgan('combined'));

// Set up a route to proxy frontend requests to the backend
app.use('/', proxy);

// Start the server
app.listen(port, () => {
    console.log(`Intermediary server listening`);
});
