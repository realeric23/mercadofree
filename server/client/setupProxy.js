const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(['/api'], {
      target: 'https://blooming-dusk-56486.herokuapp.com:5000',
    })
  );
};
