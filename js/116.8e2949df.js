(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[116],{

/***/ 632:
/***/ (function(module, exports) {

module.exports = "Progress 进度条\n===\n\n用于展示操作进度，告知用户当前状态和预期。\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const sty = {marginBottom:10}\n    return (\n      <div style={{maxWidth:400}}>\n        <Progress style={sty} percent={30} />\n        <Progress style={sty} percent={50} status=\"active\" />\n        <Progress style={sty} percent={70} status=\"exception\" />\n        <Progress style={sty} percent={100} />\n        <Progress style={sty} percent={50} showText={false} />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 进度条大小设置\n\n设置参数`strokeWidth`即可\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const sty = {marginBottom:15}\n    return (\n      <div style={{maxWidth:400}}>\n        <Progress style={sty} strokeWidth={14} percent={30} />\n        <Progress style={sty} strokeWidth={14} percent={50} status=\"active\" />\n        <Progress style={sty} strokeWidth={14} percent={70} status=\"exception\" />\n        <Progress style={sty} strokeWidth={14} percent={100} />\n        <Progress style={sty} strokeWidth={14} percent={50} showText={false} />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 动态展示\n\n进度条动态展示更直观。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      percent: 0,\n    }\n  }\n  increase(){\n    let percent = this.state.percent + 10;\n    if (percent > 100) {\n      percent = 100;\n    }\n    this.setState({ percent });\n  }\n  decline(){\n    let percent = this.state.percent - 10;\n    if (percent < 0) {\n      percent = 0;\n    }\n    this.setState({ percent });\n  }\n  render() {\n    const ButtonGroup = Button.Group;\n    let sty = {marginRight:15}\n    return (\n      <div style={{maxWidth:400}}>\n        <Progress percent={this.state.percent} />\n        <ButtonGroup style={sty}>\n          <Button size=\"mini\" onClick={this.decline.bind(this)} icon=\"minus\" />\n          <Button size=\"mini\" onClick={this.increase.bind(this)} icon=\"plus\" />\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 圆圈进度条\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    let sty = {marginRight:15}\n    return (\n      <div style={{maxHeight:120}}>\n        <Progress style={sty} type=\"circle\" percent={75} />\n        <Progress style={sty} type=\"circle\" percent={70} status=\"exception\" />\n        <Progress style={sty} type=\"circle\" percent={100} />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 设置不同的尺寸\n\n通过`strokeWidth`设置圆圈进度宽带，通过`width`（`type=\"circle\"`有效）设置圆圈大小，\n\n<!--DemoStart--> \n```js\nlet sty = {marginRight:15}\nclass Demo extends Component {\n  render() {\n    return (\n      <div style={{maxHeight:120}}>\n        <Progress style={sty} type=\"circle\" width={80} strokeWidth={2} percent={75} />\n        <Progress style={sty} type=\"circle\" width={100} strokeWidth={10} percent={70} status=\"exception\" />\n        <Progress style={sty} type=\"circle\" percent={100} />\n        <Progress style={sty} type=\"circle\" percent={100} strokeWidth={3}/>\n        <Progress style={sty} type=\"circle\" width={100} strokeWidth={4} percent={70} status=\"exception\" />\n        <Progress style={sty} type=\"circle\" width={80} strokeWidth={2} percent={75} />\n        <Progress style={sty} type=\"circle\" width={50} strokeWidth={2} percent={75} />\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 进度圈动态展示\n\n圈动进度条动态展示更直观。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props)\n    this.state = {\n      percent: 10,\n    }\n  }\n  increase() {\n    let percent = this.state.percent + 10;\n    if (percent > 100) {\n      percent = 100;\n    }\n    this.setState({ percent });\n  }\n  decline() {\n    let percent = this.state.percent - 10;\n    if (percent < 0) {\n      percent = 0;\n    }\n    this.setState({ percent });\n  }\n  render() {\n    const ButtonGroup = Button.Group;\n    return (\n      <div>\n        <Progress type=\"circle\" percent={this.state.percent} />\n        <br/>\n        <br/>\n        <ButtonGroup>\n          <Button size=\"small\" onClick={this.decline.bind(this)} icon=\"minus\" />\n          <Button size=\"small\" onClick={this.increase.bind(this)} icon=\"plus\" />\n        </ButtonGroup>\n      </div>\n    );\n  }\n}\n```\n<!--End-->\n\n## 自定义文字格式\n\n`format` 属性指定格式。\n\n<!--DemoStart--> \n```js\nconst sty = {marginRight:10}\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Progress style={sty} percent={80} type=\"circle\" format={percent => (\n            <span>\n              {`${percent} %`}\n              <div style={{padding:\"10px 0 0 0\",fontSize:21}}>已完成</div>\n            </span>\n          )}/>\n        <Progress style={sty} percent={70} status=\"exception\" type=\"circle\" format={percent => (\n          <span>\n            {`${percent} %`}\n            <div style={{padding:\"10px 0 0 0\",fontSize:21}}>已关闭</div>\n          </span>\n        )}/>\n        <Progress style={sty} percent={100} type=\"circle\" format={percent => `已完成`}/>\n        <Progress style={sty} percent={70} format={percent => `${percent}℃`}/>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## API\n\n### Progress\n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| percent | 百分比 | Number | `0` |\n| showText | 是否显示进度条文字内容 | Boolean | `true` |\n| format | 内容的模板函数，自定义文字格式。 | Function | - |\n| type | 类型 | Enum{'`line`', '`circle`'} | `line` |\n| strokeWidth | 进度条线的宽度 | Number | `6` |\n| width  | 圆形进度条画布宽度，单位 px ,`type=\"circle\"`有效| Number | `126` |\n| status | 状态，可选：`success` `exception` `active` | Enum{'`success`', '`exception`'} | - |\n"

/***/ })

}]);