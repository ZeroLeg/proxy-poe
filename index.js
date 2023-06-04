const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();
const port = 3000; // You can change this to any port you prefer

// Configure proxy middleware
const proxyOptions = {
  target: 'https://www.pathofexile.com/api', // Replace with your target API server
  changeOrigin: true, // Changes the origin of the host header to the target URL
};

const proxy = createProxyMiddleware(proxyOptions);

// Enable CORS for all routes
app.use(cors());

// Use the proxy middleware
app.use('/', proxy);

// Start the server
app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});