const express = require('express');
const proxyMiddleware = require('http-proxy-middleware');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3000;
const proxy = {
  '/api/v1/articles': {
    changeOrigin: true,
    pathRewrite: {
      '^/api/v1': ''
    },
    target: 'http://localhost:3010'
  }
};

app
  .prepare()
  .then(
    () => {
      const server = express();

      if (dev) {
        Object
          .keys(proxy)
          .forEach((context) => {
            server.use(proxyMiddleware(context, proxy[context]));
          });
      }

      server.get('/article/:id', async (req, res) => {
        const actualPage = '/article';
        const queryParams = {
          id: req.params.id
        };

        await app.render(req, res, actualPage, queryParams);
      });

      server.all('*', (req, res) => handle(req, res));

      server.listen(port, (e) => {
        if (e) {
          throw e;
        }

        console.log(`> Ready on http://localhost:${port}`)
      })
    }
  )
  .catch(
    (e) => {
      console.error(e.stack);

      process.exit(1);
    }
  );
