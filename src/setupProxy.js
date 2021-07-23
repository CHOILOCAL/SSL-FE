const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
<<<<<<< HEAD
  app.use(
    createProxyMiddleware("/app/**", {
      target: "http://localhost:8080",
      changeOrigin: true,
      ws: true,
    })
  );
=======
    app.use(
        createProxyMiddleware("/v1/api/**", {
            target: "http://localhost:8081",
            changeOrigin: true,
            ws: true,
        })
    );
>>>>>>> 668d4b6bd47ba382c213161b59e5ce8db79047c3
};
