var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var combineLoaders = require("webpack-combine-loaders");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
console.log(path.join(__dirname,'build'));
console.log('123')
module.exports = {
	// context: path.join(__dirname, 'source'),
	entry: ['./source/app.js'],
	output: {
		path: path.join(__dirname,'build'),
		filename: '[name].[hash].js'
		// publicPath: path.join(__dirname,'build')
	},
	devtool: 'eval-source-map',
	devServer: {
		// 通过write-file-webpack-plugin来写入，所以必须设置outputPath
		// outputPath: path.join(__dirname, 'build'),
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	module: {
		// 在 Webpack 中忽略对已知文件的解析
		noParse: [],

		loaders: [{
			loader: 'babel-loader',
			test: /\.jsx?$/,
			query: {
				plugins: ['transform-runtime'],
				presets: ['es2015', 'stage-0', 'react']
			},
			include: path.join(__dirname, 'source')
				// exclude: [path.resolve(__dirname, "node_modules")]
		}, {
			test: /\.(scss|css)$/,
			loader: combineLoaders([{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				query: {
					modules: true,
					localIdentName: '[name]__[local]___[hash:base64:5]'
				}
			}, {
				loader: 'sass-loader'
			}])
		}, {
			test: /\.png$/,
			loader: "url-loader?limit=100000"
		}, {
			test: /\.jpg$/,
			loader: "file-loader"
		}, {
			test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/font-woff"
		}, {
			test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=application/octet-stream"
		}, {
			test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
			loader: "file"
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			loader: "url?limit=10000&mimetype=image/svg+xml"
		}]
	},
	resolve: {
		// modules: [path.resolve('./node_modules')],
		root: path.resolve(__dirname),
		alias: {
			boostrap: 'node_modules/boostrap/dist/css/boostrap.css'
		},
		extensions: ['', '.js', '.jsx']
	},
	// externals: {
	// 	'jquery': 'jQuery',
	// },
	plugins: [
		new CleanWebpackPlugin(['build'],{
			root: path.resolve(__dirname),
			verbose: true,
			dry: false
		}),
		new HtmlWebpackPlugin({
			template: './source/index.html'
		}),
		new CopyWebpackPlugin([{from: './build',to: __dirname + '/docs/'}],{
			context: path.resolve(__dirname)
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
}