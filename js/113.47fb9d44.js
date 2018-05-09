(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ 629:
/***/ (function(module, exports) {

module.exports = "Rate 评分\n===\n\n评分组件\n\n\n### 基本用法\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Rate/>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 只读\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Rate value={2} disabled={true}/>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 颜色\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Rate value={2} color=\"#d80000\"/> <br/>\n        <Rate value={3.5} allowHalf={true} color=\"#16a900\"/>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 定义文本\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nconst style = {marginRight:20};\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Rate value={2} allowHalf={true} style={style} character={<Icon type=\"heart-on\" />} color=\"#d80000\"/>\n        <Rate value={2} allowHalf={true} style={style} character=\"好\" color=\"#d80000\"/>\n        <Rate value={2} allowHalf={true} character=\"美\" color=\"#d80000\"/>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 文本展现\n\n按钮样式的单选组合。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state={\n      value:0,\n      hoverValue:0,\n    };\n  }\n  handleChange(e,value){\n    this.setState({ value });\n  }\n  render() {\n    const { value,hoverValue } = this.state;\n    let str = '极差';\n    let _value = hoverValue>0 ? hoverValue :value;\n    switch(_value){\n      case 0:str='没有状态';break;\n      case 1:str='极差';break;\n      case 2:str='失望';break;\n      case 3:str='一般';break;\n      case 4:str='满意';break;\n      case 5:str='惊喜';break;\n    }\n    return (\n      <span>\n        <Rate onChange={this.handleChange.bind(this)} value={value} onHoverChange={(e,v)=>this.setState({hoverValue:v})} />\n        {value >-1&& <span> {str} </span>}\n        {hoverValue >-1&& <span>, hover {hoverValue} stars</span>}\n      </span>\n    );\n  }\n}\n```\n<!--End-->\n\n\n### 允许半选\n\n可支持鼠标选择半星。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return <Rate value={2.5} allowHalf={true} onChange={(e,val) => console.log(val)} />\n  }\n}\n```\n<!--End-->\n\n\n\n## API\n\n### Rate\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | Number | - |\n| count | star 总数 | Number | `5` |\n| disabled | 只读，无法进行交互 | Boolean | `false` |\n| allowHalf | 是否允许半选 | Boolean | `false` |\n| character | 自定义字符 | ReactNode | - |\n| color | 自定义Star的颜色 | String | - |\n| className | 自定义样式类名 | String | - |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |\n| onHoverChange | 鼠标经过时数值变化的回调 | Funtcion(e:Even,value) | - |\n"

/***/ })

}]);