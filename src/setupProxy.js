const {createProxyMiddleware} = require("http-proxy-middleware");


module.exports = app => {
    app.use(
        '/api',
        createProxyMiddleware(
            {
                target: "http://14.36.131.49:8081",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            }
        ))
};
