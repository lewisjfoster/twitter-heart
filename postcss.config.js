module.exports = {
    plugins: [
        require('postcss-preset-env')({
            browsers: 'last 2 versions',
            stage: 0,
            autoprefixer: {
                grid: true,
            },
            features: {
                'custom-properties': {
                    preserve: false,
                },
            },
            importFrom: './src/variables.css',
        }),
    ],
};