module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/dist',
        filename: "app.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
