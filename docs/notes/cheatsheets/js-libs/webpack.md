---
title: Webpack
category: JavaScript libraries
layout: 2017/sheet
updated: 2017-09-26
intro: |
  This is a very basic "getting started with Webpack" guide for use with [Webpack](https://webpack.js.org) v3. This doesn't cover all features, but it should get you started in understanding the config file format.
---

### Basic config

#### webpack.config.js

```js
module.exports = {
  context: __dirname,
  entry: 'src/app.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  }
}
```

#### Terminal

```bash
npm install --save-dev webpack
```

| `webpack` | build
| `webpack -- -p` | build production
| `webpack -- --watch` | compile continuously

This compiles `src/app.js` into `public/app.js`. (Note: you may need to use `./node_modules/.bin/webpack` as a command if you're not invoking Webpack via npm scripts.)

### Multiple files

#### webpack.config.js

```js
module.exports = {
  entry: {
    app: 'src/app.js',
    vendor: 'src/vendor.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  }
}
```

This creates `app.js` and `vendor.js`.

## Loaders

### Babel

#### Terminal

```bash
npm install --save-dev \
  babel-loader \
  babel-preset-env \
  babel-preset-react
```

#### webpack.config.js

```js
module.exports = {
  ···
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      }
    ]
  }
}
```

#### .babelrc

```js
{
  "presets": [ "env", "react" ]
}
```

Adds support for [Babel](http://babeljs.io).

### CSS

#### Terminal

```bash
npm install --save-dev \
  css-loader \
  style-loader
```

#### webpack.config.js

```js
module.exports = {
  ···
  module: {
    rules: [
     { test: /\.css$/,
       exclude: /node_modules/,
       use: [
         { loader: 'style-loader' },
         { loader: 'css-loader' }
       ]
      }
    ]
  }
}
```

#### Your JavaScript

```js
import './styles.css'
// or:
require('./styles.css')
```

This allows you to use CSS inside your JavaScript. This packages your CSS inside your JavaScript bundle.

### PostCSS

#### Terminal

```
npm install --save-dev \
  postcss-loader \
  postcss-cssnext
```

#### webpack.config.js

```js
···
// Inside module.rules[]:
{ test: /\.css$/,
  exclude: /node_modules/,
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader' },
    { loader: 'postcss-loader' }
···
```

#### postcss.config.js

```js
module.exports = {
  plugins: [
    require('postcss-cssnext')()
  ]
}
```

This example adds [postcss-cssnext](https://www.npmjs.com/package/postcss-cssnext) support to your CSS files.

## Other features

### Dev server

#### package.json

```json
{ ···
  "scripts": {
    "dev": "webpack-dev-server"
  }
}
```

#### Terminal

```bash
npm install --save-dev \
  webpack-dev-server
```

```bash
npm run dev
```

This starts an HTTP server for development (port 8080 by default).
