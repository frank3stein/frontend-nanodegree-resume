import {resolve, join} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackExternalsPlugin from 'html-webpack-externals-plugin';


module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + 'dist/',
        filename: 'app.bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(svg|jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src','img:src']
                    }
                }
            }
        ]
    },
    devServer: {
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Development',
          template: './src/index.html' // Normally creates a generic HTML for js file. But with template we can feed in our own HTML.
        }),
        // new HtmlWebpackExternalsPlugin({
        //   externals: [
        //     {
        //       module:'jquery', //Example for CDN
        //       entry: 'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js',
        //       // global:'jQuery'  //if you want to setup a global
        //     }
        //   ]
        // })
    ]
}