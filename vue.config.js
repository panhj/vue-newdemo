module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    },
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.35.83.214:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': '/'
                }
            }
        }
    }
}