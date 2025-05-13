const path = require("path")

module.exports = {
    target: "web",
    mode:"development",

    entry: path.resolve( __dirname, "hairday-template-main","src","main.js"), //path muito bom pois ele consegue rodar em qulquer sistema operacional

    output:{
        filename:"main.js",
        path: path.resolve(__dirname,"dist")
    }

}