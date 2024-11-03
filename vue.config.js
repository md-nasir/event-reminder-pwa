const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.tsx$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsxSuffixTo: [/\.vue$/],
                    },
                    exclude: /node_modules/,
                },
            ],
        },
    },
})
