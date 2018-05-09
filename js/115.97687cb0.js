(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[115],{

/***/ 631:
/***/ (function(module, exports) {

module.exports = "快速上手\n===\n\n[![](https://img.shields.io/github/issues/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/issues) [![](https://img.shields.io/github/forks/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/network) [![](https://img.shields.io/github/stars/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/stargazers) [![](https://img.shields.io/github/release/uiw-react/uiw.svg)](https://github.com/uiw-react/uiw/releases) [![Packagist](https://img.shields.io/dub/l/vibe-d.svg)](https://github.com/uiw-react/uiw) [![Packagist](https://img.shields.io/npm/v/uiw.svg)](https://www.npmjs.com/package/uiw)\n\n## 安装\n\n```bash\nnpm install uiw --save\n\n# 通过GitHub仓库安装\nnpm i -S uiw-react/uiw\n# 指定版本\nnpm i -S uiw-react/uiw#v1.2.12\n# 或者\nyarn add uiw-react/uiw\n```\n> ps: **通过GitHub仓库安装**的 win 用户请在 `Git Bash` 下执行，因为需要用到 git。\n\n## 使用\n\n```js\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Button } from 'uiw';\n\nReactDOM.render(\n  <Button type=\"primary\">Hello</Button>, \n  document.getElementById('app')\n);\n```\n\n## 组件冲突\n\n重新取一个名字\n\n```js\nimport { Button as ButtonView } from 'uiw';\n```\n\n## 按需加载组件\n\n```diff\n- import { Alert } from 'uiw';\n+ import { Alert } from 'uiw/lib/alert';\n```\n\n## 开发\n\n要开发，运行自重新构建，获取代码：\n\n```bash\n$ git clone https://github.com/uiw-react/uiw.git\n$ cd uiw\n$ npm install # or  yarn install\n# or 解决phantomjs下载失败问题\n$ npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs\n```\n\n要开发，运行自重新构建：\n\n```bash\n# Run the app\n# Restart the app automatically every time code changes. \n# Useful during development.\n$ npm start\n```\n\n打开浏览器并访问：http://127.0.0.1:2087\n\n更新文档\n\n```bash\nnpm run deploy\n```\n\n## 文件目录说明\n\n```bash\n├── dist           # 生成的文档静态文件目录\n├── docs           # 文档的源文件\n├── lib            \n├── package.json\n├── script\n└── src            # React组件在此\n```\n\n## License\n\nLicensed under the MIT License.\n"

/***/ })

}]);