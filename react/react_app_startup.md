## SETUP

1. create an `index.js`
2. npm init -y 
  - creates boiletplate package.json file
3. npm install webpack 
4. npm install -D webpack-cli 
  - -D is the same as --save-dev 
  - we save this in dev because it's only the developer or us that uses the command line interface

5. package-lock.json tracks react's dependencies
6. add start script to package.json
  - "start": "webpack --watch --mode=development"

## CUSTOMIZATION

`webpack.config.js`
1. create webpack.config.js
  - touch wbpack.config.js

2. // webpack.config.js
const path = require('path');

module.exports = {
  entry: './frontend/entry.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  }
  devtool: 'source-map',
  resolve: { //accepts a resolve key, which lets you specify what file extensions to process without explicitly naming them when we import export. You must include the star matcher '*' to be able to include files with an explicit extension.
    extensions: [".js", ".jsx", "*"] 
  }
};

3. Make a `frontend/entry.js`

4. create an index.html and add
  - <script src="./bundle.js"></script>

5. npm install @babel/core @babel/preset-env @babel/preset-react babel-loader react react-dom

6. add to `webpack.config.js`
    module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /(node_modules)/, 
        use: {
          loader: 'babel-loader', 
          options: { 
            presets: ['@babel/env', '@babel/react'] 
          }
        },
      }
    ]
  },
  
  7. make a `.gitignore` in the root of your project and include the following files
    node_modules
    bundle.js
    bundle.js.map

WE NEED TO CONNECT REACT!

## React

EASY WAY:
$ npx create-react-app app_name
$ cd app_name
$ npm start
$ npm install @babel/core @babel/preset-env @babel/preset-react babel-loader react react-dom




