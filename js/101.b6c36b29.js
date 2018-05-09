(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ 620:
/***/ (function(module, exports) {

module.exports = "Tooltip 文字提示\n===\n\n简单的文字提示气泡框。\n\n\n### 基础用法\n\n<!--DemoStart--> \n最简单的用法。\n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Tooltip content=\"文字提示\" style={{marginRight:\"20px\"}}>\n          <Button>上边文字提示</Button>\n        </Tooltip>\n\n        <Tooltip placement=\"left\" content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n          <Button>左边文字提示</Button>\n        </Tooltip>\n\n        <Tooltip placement=\"bottom\" content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n          <Button>下边文字提示</Button>\n        </Tooltip>\n\n        <Tooltip placement=\"right\" content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n          <Button>右边文字提示</Button>\n        </Tooltip>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 更多内容\n\n展示多行文本或者是设置文本内容的格式，\n\n<!--DemoStart--> \n`content`属性也可以是`ReactElement`。\n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Tooltip placement=\"right\" content={\n        <div>\n          <div>标题</div>\n          <p>展示多行文本或者是设置文本内容的格式</p>\n        </div>\n      }>\n        <Button>右边多行文字</Button>\n      </Tooltip>\n    )\n  }\n}\n```\n<!--End-->\n\n\n\n### 位置\n\n位置有 12 个方向。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    const text = <span>提示文字</span>;\n    return (\n      <div style={{ marginLeft: 60 }}>\n        <div style={{ marginLeft: 60 }}>\n          <Tooltip style={{ marginRight: 20}} placement=\"topLeft\" content={text}>\n            <Button>上左</Button>\n          </Tooltip>\n          <Tooltip style={{ marginRight: 20}} placement=\"top\" content={text}>\n            <Button>上边</Button>\n          </Tooltip>\n          <Tooltip style={{ marginRight: 20}} placement=\"topRight\" content={text}>\n            <Button>上右</Button>\n          </Tooltip>\n        </div>\n        <div style={{ width: 60, float: 'left' }}>\n          <Tooltip placement=\"leftTop\" content={<div>\n            <div>文字提示</div>\n            <div>这里是文字描述！</div>\n            <div>这里是文字描述！</div>\n          </div>}>\n            <Button>左上</Button>\n          </Tooltip>\n          <br/><br/>\n          <Tooltip placement=\"left\" content={text}>\n            <Button>左边</Button>\n          </Tooltip>\n          <br/><br/>\n          <Tooltip placement=\"leftBottom\" content={<div>\n            <div>文字提示</div>\n            <div>这里是文字描述！</div>\n            <div>这里是文字描述！</div>\n          </div>}>\n            <Button>左下</Button>\n          </Tooltip>\n        </div>\n        <div style={{ width: 60, marginLeft: 270 }}>\n          <Tooltip placement=\"rightTop\" content=\"文字提示\">\n            <Button>右上</Button>\n          </Tooltip>\n          <br/><br/>\n          <Tooltip placement=\"right\" content=\"提示文字提示文字提示文字提文字\">\n            <Button>右边</Button>\n          </Tooltip>\n          <br/><br/>\n          <Tooltip placement=\"rightBottom\" content={<div>\n            <div>文字提示</div>\n            <div>这里是文字描述！</div>\n            <div>这里是文字描述！</div>\n          </div>}>\n            <Button>右下</Button>\n          </Tooltip>\n          <br/><br/>\n        </div>\n        <div style={{ marginLeft: 60, clear: 'both' }}>\n          <Tooltip style={{ marginRight: 20}} placement=\"bottomLeft\" content={<div>\n            <div>文字提示</div>\n            <div>这里是文字描述！</div>\n            <div>这里是文字描述！</div>\n          </div>}>\n            <Button>下左</Button>\n          </Tooltip>\n          <Tooltip style={{ marginRight: 20}} placement=\"bottom\" content={text}>\n            <Button>下边</Button>\n          </Tooltip>\n          <Tooltip style={{ marginRight: 20}} placement=\"bottomRight\" content={text}>\n            <Button>下右</Button>\n          </Tooltip>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 主题\n\n组件提供了两个不同的主题：`dark`和`light`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Tooltip content=\"文字提示\" style={{marginRight:\"20px\"}}>\n          <Button>上边文字提示</Button>\n        </Tooltip>\n        <Tooltip effect=\"light\" content=\"文字提示\">\n          <Button>上边文字提示</Button>\n        </Tooltip>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n\n### 禁用 Tooltip 功能\n\n如果需要关闭Tooltips功能，`disabled`属性可以满足这个需求，它接受一个Boolean，设置为`true`即可。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      disabled: false\n    }\n  }\n  render() {\n    return (\n      <div>\n        <Tooltip disabled={ this.state.disabled } content=\"点击关闭 Tooltip 功能\">\n          <Button onClick={ e => this.setState({ disabled: true}) }>点击关闭   Tooltip 功能</Button>\n        </Tooltip> &nbsp;\n        <Button onClick={ e => this.setState({ disabled: false}) }>\n          启用前面按钮的提示\n        </Button>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 点击出现\n\n通过设置属性`trigger`可以文字提示操作方式。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Tooltip placement=\"right\" trigger=\"click\" content=\"文字提示\" >\n        <Button>点击</Button>\n      </Tooltip>\n    )\n  }\n}\n```\n<!--End-->\n\n### 显示和消失触发事件\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      str: '-'\n    }\n  }\n  render() {\n    return (\n      <div>\n          <Tooltip content=\"文字提示\"\n          onVisibleChange={(isVisible)=>{\n              console.log(\"isVisible::\",isVisible)\n              this.setState({\n                  str:isVisible?\"显示了！\":\"隐藏了！\"\n              })\n          }}>\n            鼠标移动到此处，显示和消失触发事件\n          </Tooltip>\n          <div style={{paddingTop:\"20px\"}}>显示状态：{this.state.str}</div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 手动控制状态的展示\n\n通过设置属性`visible`可以文字提示手动控制状态的展示。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      visible: false\n    }\n  }\n  render() {\n    const {visible} = this.state;\n    return (\n      <div>\n      <Tooltip trigger=\"click\" visible={visible} content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n        <div>手动控</div>\n      </Tooltip>\n      <Button onClick={()=>{\n          this.setState({\n              visible:!visible\n          })\n      }}>点击</Button>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 文字提示框不显示箭头\n\n通过设置属性`visibleArrow`可以文字提示框不显示箭头。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Tooltip placement=\"right\" visibleArrow={false} content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n        <Button>不显示箭头</Button>\n      </Tooltip>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 延迟进入和消失\n\n通过设置属性`leaveDelay`可以文字提示延迟消失。`enterDelay` 为延迟进入必须配合`leaveDelay` 来使用，并且值比 `leaveDelay`小\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n      <Tooltip placement=\"right\" leaveDelay={6000} content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n        <Button>hove延迟6s消失</Button>\n      </Tooltip>\n      <Tooltip placement=\"right\" leaveDelay={6000} trigger=\"click\" content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n        <Button>点击延迟6s消失</Button>\n      </Tooltip>\n      <Tooltip placement=\"right\" enterDelay={2000}  leaveDelay={6000} content=\"文字提示\"  style={{marginRight:\"20px\"}}>\n        <Button>鼠标悬停在按钮上延迟2s进入</Button>\n      </Tooltip>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### Tooltip\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| content | 显示的内容 | String,React.ReactNode | - |\n| placement | 气泡框位置，可选 `top`,`topLeft`,`topRight`,`left`,`leftTop`,`leftBottom`,`right`,`rightTop`,`rightBottom`, `bottom`,`bottomLeft`,`bottomRight` | String | `top` |\n| effect | 默认提供的主题  `dark`, `light` | String | `dark` |\n| disabled | 是否禁用提示框 | boolean | `false` |\n| leaveDelay | 鼠标离开或者点击之后延时多少才隐藏 Tooltip，单位：秒 | number | - |\n| enterDelay | 鼠标离开或者点击之后延时多少才隐藏 Tooltip，单位：秒，`enterDelay` 为延迟进入必须配合`leaveDelay` 来使用，并且值比 `leaveDelay`小 | number | - |\n| visibleArrow | 是否显示 Tooltip 箭头 | bool | false |\n| visible | 状态是否可见 | bool | false |\n| onVisibleChange | 显示隐藏的回调 | Function(isVisible:bool) | - |\n"

/***/ })

}]);