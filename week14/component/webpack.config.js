module.exports = {
    entry:  "./main.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        pulgins: [["@babel/plugin-transform-react-jsx", {pragma: "create"}]]
                
                    }
                    
                }
            }
        ]
    },
    mode: "development"
}