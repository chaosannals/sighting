module.exports = {
    publicPath: 'production' == process.env.NODE_ENV ? '/sighting' : '/',
    outputDir: '../website/src/main/resources/static/sighting',
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1',
                ws: true,
                changeOrigin: true,
            },
        },
    },
};