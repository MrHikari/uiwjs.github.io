(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 576:
/***/ (function(module, exports) {

module.exports = "Switch 开关\n===\n\n表示两种相互对立的状态间的切换，多用于触发「开/关」。选中时的内容支持响应式。\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nconstructor(props){\n  super(props);\n  this.state = {\n    checked:true\n  }\n}\nrender() {\n  const styl = {marginRight:\"20px\"}\n  return (\n    <div>\n      <Switch checked={this.state.checked} \n        style={styl} \n        onChange={(e,checked)=>{\n        console.log(`${checked?\"选中\":'没有选中'}`)\n      }}/>\n      <Button size=\"mini\" onClick={()=>{\n        console.log(\"-->>\",this.state.checked)\n        this.setState({\n          checked:!this.state.checked\n        })\n      }}>{this.state.checked?\"打开\":\"关闭\"}</Button>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 不可用\n\nSwitch 失效状态。\n\n<!--DemoStart--> \n```js\nconstructor(props){\n  super(props);\n  this.state = {\n    disabled:true\n  }\n}\nrender() {\n    const styl = {marginRight:\"20px\"}\n  return (\n    <div>\n      <Switch checked={false} disabled={this.state.disabled} style={styl} />\n      <Switch checked={true} disabled={this.state.disabled} style={styl} />\n      <br />\n      <br />\n      <Button size=\"mini\" type=\"default\" onClick={()=>{\n        this.setState({\n          disabled:!this.state.disabled\n        })\n      }}>\n        {this.state.disabled?\"Toggle disabled\":\"Toggle undisabled\"}\n      </Button>\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 文字和颜色\n\n<!--DemoStart--> \n```js\nrender() {\n  const styl = {marginRight:\"20px\"}\n  return (\n    <div>\n      <Switch checked={false} checkedChildren=\"开\" unCheckedChildren=\"关\" style={styl} />\n      <Switch checked={true} checkedChildren=\"on\" unCheckedChildren=\"off\" color=\"#9C27B0\" unColor=\"#ff4949\" />\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n### 三种大小\n\n<!--DemoStart--> \n```js\nrender() {\n  const styl = {marginRight:\"20px\"}\n  return (\n    <div>\n      <Switch checked={true} size=\"small\" checkedChildren=\"n\"  unCheckedChildren=\"o\" style={styl} />\n      <Switch checked={true} size=\"small\"  disabled={true}style={styl} />\n\n      <Switch checked={true} checkedChildren=\"开\" unCheckedChildren=\"关\" color=\"#e503f4\" unColor=\"#ff4949\"  style={styl}/>\n      <Switch disabled={true} checked={true} checkedChildren=\"开\" unCheckedChildren=\"关\" color=\"#e503f4\" unColor=\"#ff4949\"  style={styl}/>\n\n      <Switch checked={true} size=\"large\" checkedChildren=\"开\" unCheckedChildren=\"关\" style={styl} />\n    </div>\n  )\n}\n```\n<!--End-->\n\n\n## API\n\n### Switch \n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| checked | 指定当前是否选中 | boolean | false |\n| disabled | 是否禁用 | boolean | false |\n| color | 打开时的背景色 | string | - |\n| unColor | 关闭时的背景色 | string | - |\n| onChange | 变化时回调函数 | Function(e:Event,checked:Boolean) | - |\n| checkedChildren |  选中时的内容 | string、ReactNode | - |\n| unCheckedChildren |  非选中时的内容 | string、ReactNode | - |\n| size |  开关大小，可选值：`large` `default` `small` | string | default |"

/***/ })

}]);