const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebPackPlugin = require("copy-webpack-plugin")

module.exports = {
    target: "web",
    mode:"development",

    entry: path.resolve( __dirname, "hairday-template-main","src","main.js"), //path muito bom pois ele consegue rodar em qulquer sistema operacional

    output:{
        filename:"main.js",
        path: path.resolve(__dirname,"dist") //aonde ele vai gravar tudo
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")       
         },
         port: 3000,
         open: true,
         liveReload: true,
    },

    plugins: [ 
        
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname,"hairday-template-main","index.html"),
            favicon: path.resolve("hairday-template-main","src","assets","scissors.svg"),   
        }),
        
        new CopyWebPackPlugin({
                patterns: [{
                    from: path.resolve(__dirname,"hairday-template-main","src","assets"),
                    to: path.resolve(__dirname,"dist","src","assets"),
                }],
        }),
    ],

    module:{
        rules:[{
            test: /\.css$/,
            use: ["style-loader","css-loader"],
        },
        
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env"],
                },
            },
        },
    ],

  },
}