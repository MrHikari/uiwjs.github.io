(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ 621:
/***/ (function(module, exports) {

module.exports = "定制主题\n===\n\n样式使用了 [`Less`](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，可以根据需求进行相应调整。使用 [`modifyVars`](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式来覆盖变量\n\n> 主题更换只需要 `less-loader` 的 `webpack` 相关配置，配置参数 modifyVars即可。\n\n```js\nmodule.exports = {\n  //'primary-color': '#1DA57A',\n  //'link-color': '#1DA57A',\n  //'border-radius-base': '2px',\n  '@font-size-base': '14px',\n  '@icon-url': '\"/assets/iconfont/iconfont\"'\n};\n```\n\n下面在 `webpack` 配置文件中配置，更改主题颜色\n\n```js\n//自定义主题\nvar theme = require('./theme');\nvar modifyVars = theme;\n\n....\n\n{\n  test: /\\.less$/,\n  loader: ['style-loader', 'css-loader', `less-loader?{\"sourceMap\":true,\"modifyVars\":${JSON.stringify(modifyVars)}}`]\n}\n...\n\n```\n\n更多 `webpack` 其他配置项，更改主题颜色，图标字体\n\n```js\n{\n  test: /\\.less$/,\n  use: [\n    require.resolve('style-loader'),\n    {\n      loader: require.resolve('css-loader'),\n      options: {\n        importLoaders: 1,\n      },\n    },\n    {\n      loader: require.resolve('postcss-loader'),\n      options: {\n        ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options\n        plugins: () => [\n          require('postcss-flexbugs-fixes'),\n          autoprefixer({\n            browsers: [\n              '>1%',\n              'last 4 versions',\n              'Firefox ESR',\n              'not ie < 9', // React doesn't support IE8 anyway\n            ],\n            flexbox: 'no-2009',\n          }),\n        ],\n      },\n    },\n    {\n      loader: require.resolve('less-loader'),\n      options: {\n        modifyVars: {\n          '@icon-url': '\"~font-file....\"',\n        },\n      },\n    },\n  ],\n},\n```\n"

/***/ })

}]);