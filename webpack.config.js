module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/dist',
        filename: "apppp.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
