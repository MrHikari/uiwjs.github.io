(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 575:
/***/ (function(module, exports) {

module.exports = "Tag 标签\n===\n\n进行标记和分类的小标签。\n\n### 多彩标签\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n        <Tag color=\"white\">white</Tag>\n        <Tag color=\"pink\">pink</Tag>\n        <Tag color=\"red\">red</Tag>\n        <Tag color=\"yellow\">yellow</Tag>\n        <Tag color=\"orange\">orange</Tag>\n        <Tag color=\"green\">green</Tag>\n        <Tag color=\"cyan\">cyan</Tag>\n        <Tag color=\"blue\">blue</Tag>\n        <Tag color=\"purple\">purple</Tag>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 多彩英文标签\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n        <Tag color=\"default\">default</Tag>\n        <Tag color=\"error\">error</Tag>\n        <Tag color=\"warn\">warn</Tag>\n        <Tag color=\"success\">success</Tag>\n        <Tag color=\"info\">info</Tag>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 多彩中文标签\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n        <Tag color=\"default\">默认</Tag>\n        <Tag color=\"error\">错误</Tag>\n        <Tag color=\"warn\">警告</Tag>\n        <Tag color=\"success\">完成</Tag>\n        <Tag color=\"info\">信息</Tag>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 自定义颜色值\n\n<!--DemoStart--> \n```js\nrender() {\n  return (\n    <div>\n        <Tag color=\"#0080f2\">#0080f2</Tag>\n        <Tag color=\"rgba(0, 0, 0, 0.65)\">rgba(0, 0, 0, 0.65)</Tag>\n        <Tag color=\"hsla(214, 100%, 29%, 0.65)\">hsla(214, 100%, 29%, 0.65)</Tag>\n    </div>\n  )\n}\n```\n<!--End-->\n\n### 标签组动态单选多选\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n  this.state = {\n    plainOptions:[\n      {\n        color:\"white\",\n        value:'Apple',\n        label:'苹果',\n      }, {\n        color:\"orange\",\n        value:'Pear',\n        label:'梨子'\n      }, {\n        color:\"green\",\n        value:'Orange',\n        label:'橘子'\n      }\n    ],\n    tagRadioOptions:[\n        {color:\"purple\", value:'苹果',label:'苹果1'},\n        {color:\"orange\", value:'橘子',label:'橘子2'},\n        {color:\"green\", value:'香蕉',label:'香蕉3'}\n    ],\n    plainValues:['Orange'],\n    checkedValues:['香蕉']\n  }\n}\nrender() {\n  const TagGroup = Tag.Group;\n  const {Row,Col} = Layout;\n  return (\n    <Row gutter=\"10\">\n      <Col xs=\"12\" sm=\"6\" md=\"4\" lg=\"12\">\n        <TagGroup \n          options={this.state.plainOptions}\n          checked={true}\n          checkedValues={this.state.plainValues}\n          onChange={(e,value2)=>{\n            this.setState({plainValues:value2})\n            console.log(\"value::\",e,value2)\n          }}\n        />\n      </Col>\n      <Col xs=\"12\" sm=\"6\" md=\"8\" lg=\"12\">\n        <TagGroup \n          options={this.state.tagRadioOptions}\n          checked={true}\n          isRadio={true}\n          checkedValues={this.state.checkedValues}\n          onChange={(e,value)=>{\n            this.setState({checkedValues:value})\n            console.log(\"value::\",value)\n          }}\n        />\n      </Col>\n    </Row>\n  )\n}\n```\n<!--End-->\n\n### 标签组动态删除\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n\n  this.state = {\n    //plainOptions:['Apple', 'Pear', 'Orange'],\n    plainOptions:[\n      {\n        color:\"white\",\n        value:'Apple'\n      }, {\n        color:\"orange\",\n        value:'Pear'\n      }, {\n        color:\"green\",\n        value:'Orange'\n      }\n    ],\n  }\n}\nrender() {\n  const TagGroup = Tag.Group;\n  return (\n    <TagGroup \n      options={this.state.plainOptions}\n      onChange={(e,value)=>{\n        console.log(\"value::\",value)\n      }}\n    >\n      <Button size=\"mini\" onClick={()=>{\n        console.log(this.state.plainOptions)\n        let addTag = this.state.plainOptions\n        addTag.push({\n          color:\"green\",\n          value:'test'\n        })\n        this.setState({plainOptions:addTag})\n      }}>Set</Button>\n    </TagGroup>\n  )\n}\n```\n<!--End-->\n\n### 标签组动态编辑\n\n<!--DemoStart--> \n```js\nconstructor(props) {\n  super(props);\n\n  this.state = {\n    inputVisible: false,\n    plainOptions:['Apple', 'Pear', 'Orange'],\n    inputValue:\"\"\n  }\n}\n\nonKeyUp(e) {\n  if (e.keyCode&&e.keyCode === 13) {\n    this.handleInputConfirm();\n  }\n}\n\nhandleChange(e) {\n  this.setState({ inputValue: e.target.value });\n}\n\nhandleClose(index) {\n  this.state.plainOptions.splice(index, 1);\n  this.forceUpdate();\n}\n\nshowInput() {\n  this.setState({ inputVisible: true }, () => {\n    this.input.input.focus();\n  });\n}\n\nhandleInputConfirm() {\n  let inputValue = this.state.inputValue;\n  if (inputValue) {\n    this.state.plainOptions.push(inputValue);\n  }\n  this.state.inputVisible = false;\n  this.state.inputValue = '';\n  this.forceUpdate();\n}\nrender() {\n  const TagGroup = Tag.Group;\n  const styl = {display:\"inline-block\",width:50}\n  return (\n    <TagGroup \n      options={this.state.plainOptions}\n      onChange={(e,value)=>{\n        console.log(\"Change::\",value)\n      }}\n    >\n    {\n      this.state.inputVisible ? (\n        <Input\n          className=\"input-new-tag\"\n          value={this.state.inputValue}\n          ref={(component)=>{this.input = component}}\n          size=\"mini\"\n          style={styl}\n          onChange={this.handleChange.bind(this)}\n          onKeyUp={this.onKeyUp.bind(this)}\n          onBlur={this.handleInputConfirm.bind(this)}\n        />\n      ) : <Button size=\"mini\" onClick={this.showInput.bind(this)}>+ New Tag</Button>\n    }\n    </TagGroup>\n  )\n}\n```\n<!--End-->\n\n### 禁止删除\n\n<!--DemoStart--> \n```js\nlog(e,vlue){\n    console.log(\"--->\",vlue) \n}\nrender() {\n  return (\n    <div>\n        <Tag color=\"default\" onClose={this.log}>默认</Tag>\n        <Tag color=\"error\" onClose={this.log}>错误</Tag>\n        <Tag color=\"warn\" onClose={this.log}>警告</Tag>\n        <Tag color=\"success\" onClose={this.log}>完成</Tag>\n        <Tag color=\"info\" onClose={this.log}>信息</Tag>\n        <Tag><a href=\"https://github.com/jaywcjlove\">连接</a></Tag>\n        <Tag color=\"info\" onClose={(e)=>{\n          e.preventDefault();\n          console.log('Clicked! But prevent default.');\n        }}>阻止自身销毁组件的方法</Tag>\n    </div>\n  )\n}\n```\n<!--End-->\n\n## API\n\n### Tag \n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| color | 支持颜色自定义，也提供选择`white`、 `pink`、 `red`、 `yellow`、 `orange`、 `cyan`、 `green`、 `blue`、 `purple` | string | `white` |\n| ~~type~~⚠️ | 废弃直接在color里面填写后面面值，`white`、`red`、`orange`、`green`、`blue` | string | - |\n| onClose | 关闭时的回调，设置关闭事件，标签是否显示关闭按钮 | (e) => void | - |\n\n### Tag.Group\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| options | 设置每个标签的值例如：`['Apple', 'Pear', 'Orange']` | Array | - |\n| checkedValues | 表示标签组动可选择，数组值为默认选中值| Array | - |\n| onChange | 标签组发生变化触发事件 | Function(e:Event,options:Array) | - |\n| checked | 标签组动可选择 | Boolean | `false` |\n| isRadio | 标签组动`单选`，需要配合`checked`使用 | Boolean | `false` |\n\n### Tag.Group options\n\n| 参数      | 说明    | 类型      |  默认值   |\n|--------- |-------- |---------- |-------- |\n| color | 定义颜色 | String | - |\n| value | `必填` 如果`label`键值对没有，`value`就是标签上面显示的文字，否则就是隐藏的`value` | String | - |\n| label | `可选` 标签上面显示的文字 | String | - |\n"

/***/ })

}]);