const proxy = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        proxy("/services/search/FindingService", {
            target: "https://svcs.ebay.com",
            changeOrigin: true
        })
    );
    app.use(
        proxy("/shopping", {
            target: "https://open.api.ebay.com",
            changeOrigin: true
        })
    );
}