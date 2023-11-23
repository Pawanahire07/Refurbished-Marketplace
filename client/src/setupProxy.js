const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // Specify the API path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // URL of your backend server
      changeOrigin: true,
    })
  );
};