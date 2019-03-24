const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/v1/articles', {
    changeOrigin: true,
    pathRewrite: {
      '^/api/v1': ''
    },
    target: 'http://localhost:3010'
  }));
};