var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');


module.exports = {
    entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main.js')],//entry即入口点    path.resolve(from,to)  将参数 to 位置的字符解析到一个绝对路径里。
    /*resolve: {
        alias: {
          'react': pathToReact
        }
    },*/
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
	    loaders: [
	      {test: /\.coffee$/, loader: 'coffee'},
	      {test: /\.html$/,   loader: 'html'},
	      {test: /\.json$/,   loader: 'json'},
	      {test: /\.css$/,    loader: 'style!css!autoprefixer'},
	      {test: /\.scss$/,   loader: 'style!css!autoprefixer!sass'},
	      {test: /\.styl$/,   loader: 'style!css!stylus'},
	      {test: /\.woff$/,   loader: "url?limit=10000&minetype=application/font-woff"},
	      {test: /\.ttf$/,    loader: "file"},
	      {test: /\.eot$/,    loader: "file"},
	      {test: /\.svg$/,    loader: "file"},
	      // {test: /\.jsx?$/,   loader: "react-hot!babel"},
	      // {test: /\.jsx?$/,   loader: "babel"},
	      {test: /\.less$/,   loader: "style!css!less"},
	      {test: /\.(png|jpg)$/,   loader: "url?limit=25000"}
	    ],
	    noParse: [pathToReact]
	}
};