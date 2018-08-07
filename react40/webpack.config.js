const path = require('path');
const webpack=require('webpack');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public')
    },
    devServer:{
      contentBase:"./public"
    },
   module: {
     rules: [
      {
        test:/\.js$/,
        loader:"babel-loader",
        exclude:/(node_modules)/,
        query:{
          presets:['react','es2015']
        }
      },
      {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
       	test:/\.(png|svg|jpg|gif)$/,
       	use:[
       		'file-loader'
       	]
       },
         {
             test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
             loader: "file"
         },
         {
             test: /\.(woff|woff2)$/,
             loader:"url?prefix=font/&limit=5000"
         },
         {
             test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
             loader: "url?limit=10000&mimetype=application/octet-stream"
         },
         {
             test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
             loader: "url?limit=10000&mimetype=image/svg+xml"
         }
     ]
   },
      plugins:[
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        })
      ]
  };