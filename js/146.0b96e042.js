(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[146],{

/***/ 662:
/***/ (function(module, exports) {

module.exports = "BackTop 返回顶部\n===\n\n返回页面顶部的操作按钮。\n\n## 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() { \n    return (\n      <div>\n        <div>滚动滚动条，【快看右下角】，显示返回顶部按钮。</div>\n        <BackTop bordered={false}/>\n      </div>\n    );\n  }\n}\n```\n<!--End-->\n\n## 自定义Icon\n\n滚动滚动条，显示返回顶部按钮。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    let icon = (\n      <svg viewBox=\"0 0 1024 1024\" width=\"18\" height=\"18\">\n        <path d=\"M563.2 379.757048 563.2 972.755371C563.2 1001.056998 540.219441 1024 512 1024 483.723021 1024 460.8 1001.019181 460.8 972.755371L460.8 379.740842 272.093167 568.447675C252.13208 588.408762 219.700711 588.340711 199.746554 568.386554 179.75171 548.39171 179.766716 515.958656 199.685432 496.039941L473.973319 221.752055C483.353204 211.343458 496.929524 204.8 512 204.8 527.198527 204.8 540.850334 211.438998 550.227358 221.968936L824.32552 496.0671C844.244236 515.985815 844.259243 548.418868 824.2644 568.413712 804.310241 588.367871 771.878874 588.435921 751.917786 568.474834L563.2 379.757048ZM0 51.2C0 22.923021 22.82342 0 51.130666 0L972.869334 0C1001.108021 0 1024 22.980559 1024 51.2 1024 79.476979 1001.17658 102.4 972.869334 102.4L51.130666 102.4C22.891979 102.4 0 79.419441 0 51.2Z\" fill=\"#707070\"></path>\n      </svg>\n    )\n    return ( \n      <BackTop fixed={false} showText={false} icon={icon} shape=\"circle\"/> \n    )\n  }\n}\n```\n<!--End-->\n\n## 自定义文字\n\n滚动滚动条，显示返回顶部按钮。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    let icon = (\n      <svg viewBox=\"0 0 1024 1024\" width=\"20\" height=\"20\">\n        <path d=\"M563.2 379.757048 563.2 972.755371C563.2 1001.056998 540.219441 1024 512 1024 483.723021 1024 460.8 1001.019181 460.8 972.755371L460.8 379.740842 272.093167 568.447675C252.13208 588.408762 219.700711 588.340711 199.746554 568.386554 179.75171 548.39171 179.766716 515.958656 199.685432 496.039941L473.973319 221.752055C483.353204 211.343458 496.929524 204.8 512 204.8 527.198527 204.8 540.850334 211.438998 550.227358 221.968936L824.32552 496.0671C844.244236 515.985815 844.259243 548.418868 824.2644 568.413712 804.310241 588.367871 771.878874 588.435921 751.917786 568.474834L563.2 379.757048ZM0 51.2C0 22.923021 22.82342 0 51.130666 0L972.869334 0C1001.108021 0 1024 22.980559 1024 51.2 1024 79.476979 1001.17658 102.4 972.869334 102.4L51.130666 102.4C22.891979 102.4 0 79.419441 0 51.2Z\" fill=\"#707070\"></path>\n      </svg>\n    )\n    return ( \n      <BackTop fixed={false} text=\"顶部\" icon={icon} /> \n    )\n  }\n}\n```\n<!--End-->\n\n## 始终显示\n\n滚动滚动条，显示返回顶部按钮。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() { \n    return ( \n      <BackTop fixed={false} text=\"顶部\" showAlways/> \n    ) \n  }\n}\n```\n<!--End-->\n\n## 自定义\n\n滚动滚动条，显示返回顶部按钮。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() { return (\n    <BackTop fixed={false} showText={false} showIcon={false}>\n      <svg viewBox=\"0 0 1024 1024\" width=\"20\" height=\"20\">\n        <path d=\"M563.2 379.757048 563.2 972.755371C563.2 1001.056998 540.219441 1024 512 1024 483.723021 1024 460.8 1001.019181 460.8 972.755371L460.8 379.740842 272.093167 568.447675C252.13208 588.408762 219.700711 588.340711 199.746554 568.386554 179.75171 548.39171 179.766716 515.958656 199.685432 496.039941L473.973319 221.752055C483.353204 211.343458 496.929524 204.8 512 204.8 527.198527 204.8 540.850334 211.438998 550.227358 221.968936L824.32552 496.0671C844.244236 515.985815 844.259243 548.418868 824.2644 568.413712 804.310241 588.367871 771.878874 588.435921 751.917786 568.474834L563.2 379.757048ZM0 51.2C0 22.923021 22.82342 0 51.130666 0L972.869334 0C1001.108021 0 1024 22.980559 1024 51.2 1024 79.476979 1001.17658 102.4 972.869334 102.4L51.130666 102.4C22.891979 102.4 0 79.419441 0 51.2Z\" fill=\"#707070\"></path>\n      </svg>\n      <div>自定义</div>\n    </BackTop>\n  ) }\n}\n```\n<!--End-->\n\n## API\n\n## Params\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| showAlways | 是否始终显示组件 | Bool | `false` |\n| icon | 自定义Icon | ReactNode | `caret-up` |\n| showIcon | 是否显示Icon | Bool | `true` |\n| showBelow | 滚动距离多少时显示组件 | Number | `100` |\n| shape | 指定组件的形状 `rectangle`方形或者`circle`圆\t | Enum{'`circle`', '`rectangle`' } | `rectangle` |\n| text | 显示文字 | String | `TOP` |\n| showText | 是否显示文字 | Bool | `true` |\n| bordered | 是否显示边框 | Bool | `true` |\n| radius | 是否圆角(shape为`rectangle`适用) | Bool | `true` |\n| speed | 滚动速度 | Number | `300` |\n| fixed | 是否固定，默认`true` | Bool | `true` |\n| style | CSS样式 | Object | - |\n| className | CSS类名称 | String | - |\n| onClick | 点击回调 | Function | - |\n"

/***/ })

}]);