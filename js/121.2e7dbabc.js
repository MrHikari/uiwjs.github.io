(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ 638:
/***/ (function(module, exports) {

module.exports = "Menu 菜单\n===\n\n为页面和功能提供导航的菜单列表。\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onSelect(index, menuItem) {\n    console.log(\"index::\",index)\n  }\n  render() {\n    return (\n      <div>\n        <Menu defaultActive=\"1\" mode=\"horizontal\" onSelect={this.onSelect.bind(this)}>\n          <Menu.Item index=\"1\"><Icon type=\"date\" />首页</Menu.Item>\n          <Menu.Item index=\"2\"><Icon type=\"menu\" />新闻中心</Menu.Item>\n          <Menu.Item disabled index=\"3\"><Icon type=\"verification\" />服务范围</Menu.Item>\n          <Menu.Item index=\"4\"><Icon type=\"windows\" />电器城</Menu.Item>\n          <Menu.SubMenu index=\"5\" title={<span><Icon type=\"star-on\" /><span>新闻中心</span></span>}>\n            <Menu.ItemGroup title=\"分组一\">\n              <Menu.Item index=\"5-1\">选项1</Menu.Item>\n              <Menu.Item index=\"5-2\">选项2</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup title=\"分组2\">\n              <Menu.Item index=\"5-3\">选项3</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.SubMenu>\n          <Menu.Item index=\"6\">\n            <a href=\"https://github.com/uiw-react/uiw\" target=\"_blank\" rel=\"noopener noreferrer\">电器城- Link</a>\n          </Menu.Item>\n        </Menu>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 横向菜单暗主题\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onSelect(index, menuItem) {\n    console.log(\"index::\",index)\n  }\n  render() {\n    return (\n      <Menu defaultActive=\"1\" theme=\"dark\" mode=\"horizontal\" onSelect={this.onSelect.bind(this)}>\n        <Menu.Item index=\"1\"><Icon type=\"date\" />首页</Menu.Item>\n        <Menu.SubMenu index=\"2\" title={<span><Icon type=\"star-on\" /><span>新闻中心</span></span>}>\n          <Menu.Item index=\"2-1\">选项1</Menu.Item>\n          <Menu.Item index=\"2-2\">选项1</Menu.Item>\n        </Menu.SubMenu>\n        <Menu.Item disabled index=\"3\"><Icon type=\"verification\" />服务范围</Menu.Item>\n        <Menu.Item index=\"4\"><Icon type=\"windows\" />电器城</Menu.Item>\n        <Menu.SubMenu index=\"5\" title={<span><Icon type=\"star-on\" /><span>新闻中心</span></span>}>\n          <Menu.ItemGroup title=\"分组一\">\n            <Menu.Item index=\"5-1\">选项1</Menu.Item>\n            <Menu.Item index=\"5-2\"><a href=\"https://github.com/uiw-react/uiw\" target=\"_blank\" rel=\"noopener noreferrer\">我的博客- Link</a></Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup title=\"分组2\">\n            <Menu.Item index=\"5-3\">选项3</Menu.Item>\n          </Menu.ItemGroup>\n        </Menu.SubMenu>\n        <Menu.Item index=\"6\">\n          <a href=\"https://github.com/uiw-react/uiw\" target=\"_blank\" rel=\"noopener noreferrer\">电器城- Link</a>\n        </Menu.Item>\n      </Menu>\n    )\n  }\n}\n```\n<!--End-->\n\n### 展开当前父级菜单\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\nonSelect() {}\n  onClose(index) {\n    console.log(\"index::\",index)\n  }\n  render() {\n    return (\n      <Menu \n        defaultActive=\"1\"\n        defaultOpened={['5']}\n        style={{width:240}}\n        onClose={this.onClose.bind(this)}\n        onSelect={this.onSelect.bind(this)}\n      >\n        <Menu.Item index=\"1\"><Icon type=\"date\" />首页</Menu.Item>\n        <Menu.SubMenu index=\"2\" title={<span><Icon type=\"menu\" /><span>新闻中心</span></span>}>\n          <Menu.Item index=\"2-1\">进口食品</Menu.Item>\n          <Menu.Item index=\"2-2\">食品饮料</Menu.Item>\n          <Menu.Item index=\"2-3\">美容洗护</Menu.Item>\n        </Menu.SubMenu>\n        <Menu.Item disabled index=\"3\"><Icon type=\"windows\"/>服务范围</Menu.Item>\n        <Menu.Item index=\"4\"><Icon type=\"star-on\" />电器城</Menu.Item>\n        <Menu.SubMenu index=\"5\" title={<span><Icon type=\"verification\" /><span>折叠菜单</span></span>}>\n          <Menu.Item index=\"5-1\">生活电器</Menu.Item>\n          <Menu.Item index=\"5-2\">厨房电器</Menu.Item>\n          <Menu.Item index=\"5-3\">健康电器</Menu.Item>\n          <Menu.Item index=\"5-4\">手机配件</Menu.Item>\n        </Menu.SubMenu>\n      </Menu>\n    )\n  }\n}\n```\n<!--End-->\n\n### 内嵌菜单\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  onSelect() {}\n  onClose(index) {\n    console.log(\"index::\",index)\n  }\n  onOpen(index) {\n    console.log(\"index::\",index)\n  }\n  render() {\n    return (\n      <Menu \n        defaultActive=\"1-1-1\" \n        className=\"demo\" \n        style={{width:260}}\n        onOpen={this.onOpen.bind(this)} \n        onClose={this.onClose.bind(this)}\n      >\n        <Menu.SubMenu index=\"1-1\" title={<span><Icon type=\"apple\"/>导航一</span>}>\n          <Menu.ItemGroup title=\"分组一\">\n            <Menu.Item index=\"1-1-1\">选项1</Menu.Item>\n            <Menu.Item index=\"1-1-2\">选项2</Menu.Item>\n          </Menu.ItemGroup>\n          <Menu.ItemGroup title=\"分组2\">\n            <Menu.Item index=\"1-1-3\">选项3</Menu.Item>\n          </Menu.ItemGroup>\n        </Menu.SubMenu>\n        <Menu.SubMenu index=\"2\" title={<span><Icon type=\"android\"/>导航二</span>}>\n          <Menu.Item index=\"2-1\">选项1</Menu.Item>\n          <Menu.Item index=\"2-2\">选项2</Menu.Item>\n          <Menu.SubMenu index=\"2-3\" title={<span>导航二子菜单</span>}>\n            <Menu.Item index=\"2-3-1\">选项1</Menu.Item>\n            <Menu.Item index=\"2-3-2\">选项2</Menu.Item>\n            <Menu.SubMenu index=\"2-3-3\" title={<span>三级子菜单</span>}>\n              <Menu.Item index=\"2-3-3-1\">选项1</Menu.Item>\n              <Menu.Item index=\"2-3-3-2\">选项2</Menu.Item>\n            </Menu.SubMenu>\n          </Menu.SubMenu>\n        </Menu.SubMenu>\n        <Menu.Item index=\"3\"><Icon type=\"linux\"/>导航三</Menu.Item>\n      </Menu>\n    )\n  }\n}\n```\n<!--End-->\n\n### 主题\n\n内建了两套主题 `light|dark`，默认 `light`。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked: true,\n    };\n  }\n  onSelect(index, menuItem) {\n    console.log(\"index::\",index)\n  }\n  render() {\n    return (\n      <div>\n        <Switch checkedChildren=\"dark\" unCheckedChildren=\"light\" checked={this.state.checked}\n          onChange={(e,checked)=>{\n            this.setState({checked})\n            console.log(`${checked?\"选中\":'没有选中'}${checked}`)\n          }}\n        />\n        <br />\n        <br />\n        <Menu\n          defaultActive=\"1\"\n          theme={this.state.checked?'dark':'light'}\n          onSelect={this.onSelect.bind(this)}\n          style={{width:240}}\n        >\n          <Menu.Item index=\"1\"><Icon type=\"date\" />首页</Menu.Item>\n          <Menu.Item index=\"2\"><Icon type=\"menu\" />新闻中心</Menu.Item>\n          <Menu.Item disabled index=\"3\"><Icon type=\"verification\" />服务范围</Menu.Item>\n          <Menu.Item index=\"4\"><Icon type=\"windows\" />电器城</Menu.Item>\n          <Menu.SubMenu index=\"2\" title={<span><Icon type=\"star-on\" /><span>新闻中心</span></span>}>\n            <Menu.ItemGroup title=\"分组一\">\n              <Menu.Item index=\"1-1-1\">选项1</Menu.Item>\n              <Menu.Item index=\"1-1-2\">选项2</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup title=\"分组2\">\n              <Menu.Item index=\"1-1-3\">选项3</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.SubMenu>\n          <Menu.Item index=\"5\">\n            <a href=\"https://github.com/uiw-react/uiw\" target=\"_blank\" rel=\"noopener noreferrer\">电器城- Link</a>\n          </Menu.Item>\n        </Menu>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 内嵌菜单\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked: true,\n      mode: true,\n    };\n  }\n  render() {\n    return (\n      <div>\n        Change Mode&nbsp;\n        <Switch checkedChildren=\"inline\" unCheckedChildren=\"vertical\" checked={this.state.mode}\n          onChange={(e, mode)=>{\n            console.log('mode',mode);\n            this.setState({mode});\n          }}\n        />\n        <br />\n        <br />\n        Change Theme&nbsp;\n        <Switch checkedChildren=\"dark\" unCheckedChildren=\"light\" checked={this.state.checked}\n          onChange={(e, checked)=>{\n            this.setState({checked});\n          }}\n        />\n        <br />\n        <br />\n        <div style={{width:240}}>\n          <Menu \n            mode={this.state.mode?'inline':'vertical'}\n            theme={this.state.checked?'dark':'light'}\n            defaultActive=\"1-1-1\" \n            className=\"demo\"\n          >\n            <Menu.SubMenu index=\"1-1\" title={<span><Icon type=\"apple\"/>导航一</span>}>\n              <Menu.ItemGroup title=\"分组一\">\n                <Menu.Item index=\"1-1-1\">选项1</Menu.Item>\n                <Menu.Item index=\"1-1-2\">选项2</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup title=\"分组2\">\n                <Menu.Item index=\"1-1-3\">选项3</Menu.Item>\n              </Menu.ItemGroup>\n            </Menu.SubMenu>\n            <Menu.SubMenu index=\"2\" title={<span><Icon type=\"android\"/>导航二</span>}>\n              <Menu.Item index=\"2-1\">选项1</Menu.Item>\n              <Menu.Item index=\"2-2\">选项2</Menu.Item>\n              <Menu.SubMenu index=\"2-3\" title={<span>导航二子菜单</span>}>\n                <Menu.Item index=\"2-3-1\">选项1</Menu.Item>\n                <Menu.Item index=\"2-3-2\">选项2</Menu.Item>\n                <Menu.SubMenu index=\"2-3-3\" title={<span>三级子菜单</span>}>\n                  <Menu.Item index=\"2-3-3-1\">选项1</Menu.Item>\n                  <Menu.Item index=\"2-3-3-2\">选项2</Menu.Item>\n                </Menu.SubMenu>\n                <Menu.Item index=\"2-3-4\">选项2</Menu.Item>\n              </Menu.SubMenu>\n              <Menu.Item index=\"2-4\">选项2</Menu.Item>\n            </Menu.SubMenu>\n            <Menu.Item index=\"3\"><Icon type=\"linux\"/>导航三</Menu.Item>\n            <Menu.Item index=\"4\"><Icon type=\"linux\"/>导航三</Menu.Item>\n          </Menu>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 缩起内嵌菜单\n\n需要设置 `mode=inline` 并且 `inlineCollapsed=true`\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      checked: true,\n      mode: true,\n    };\n  }\n  onSelect(index, menuItem) {\n    console.log(\"index~::\",index)\n  }\n  render() {\n    return (\n      <div>\n        Change Mode&nbsp;\n        <Switch checkedChildren=\"inline\" unCheckedChildren=\"vertical\" checked={this.state.mode}\n          onChange={(e, mode)=>{\n            this.setState({mode});\n          }}\n        />\n        <br />\n        <br />\n        Change Theme&nbsp;\n        <Switch checkedChildren=\"dark\" unCheckedChildren=\"light\" checked={this.state.checked}\n          onChange={(e, checked)=>{\n            this.setState({checked});\n          }}\n        />\n        <br />\n        <br />\n        <div style={{width:240}}>\n          <Menu\n            defaultActive=\"5-4-2\"\n            mode={this.state.mode?'inline':'vertical'}\n            theme={this.state.checked?'dark':'light'}\n            onSelect={this.onSelect.bind(this)}\n            inlineCollapsed={this.state.mode}\n          >\n            <Menu.Item index=\"1\"><Icon type=\"date\" /><span>关于我们</span></Menu.Item>\n            <Menu.Item index=\"2\"><Icon type=\"menu\" /><span>成功案例</span></Menu.Item>\n            <Menu.SubMenu index=\"3\" title={<span><Icon type=\"star-on\" /><span>服务范围</span></span>}>\n              <Menu.ItemGroup title=\"分组一\">\n                <Menu.Item index=\"3-1\">选项1</Menu.Item>\n                <Menu.Item index=\"3-2\">选项2</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup title=\"分组2\">\n                <Menu.Item index=\"3-3\">选项3</Menu.Item>\n              </Menu.ItemGroup>\n            </Menu.SubMenu>\n            <Menu.Item index=\"4\"><Icon type=\"windows\" /><span>电器城</span></Menu.Item>\n            <Menu.SubMenu index=\"5\" title={<span><Icon type=\"star-on\" /><span>解决方案</span></span>}>\n              <Menu.ItemGroup title=\"分组一\">\n                <Menu.Item index=\"5-1\">选项1</Menu.Item>\n                <Menu.Item index=\"5-2\">选项2</Menu.Item>\n              </Menu.ItemGroup>\n              <Menu.ItemGroup title=\"分组2\">\n                <Menu.Item index=\"5-3\">选项3</Menu.Item>\n                <Menu.SubMenu index=\"5-4\" title={<span>新闻资讯</span>}>\n                  <Menu.ItemGroup title=\"分组一\">\n                    <Menu.Item index=\"5-4-1\">选项1</Menu.Item>\n                    <Menu.Item index=\"5-4-2\">选项2</Menu.Item>\n                  </Menu.ItemGroup>\n                  <Menu.ItemGroup title=\"分组2\">\n                    <Menu.Item index=\"5-4-3\">选项3</Menu.Item>\n                  </Menu.ItemGroup>\n                </Menu.SubMenu>\n              </Menu.ItemGroup>\n            </Menu.SubMenu>\n            <Menu.Item index=\"6\">\n              <Icon type=\"star-on\" />\n              <span><a href=\"https://github.com/jaywcjlove\" target=\"_blank\" rel=\"noopener noreferrer\">电器城- Link</a></span>\n            </Menu.Item>\n          </Menu>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 激活菜单并展开菜单\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props){\n    super(props);\n    this.state = {\n      defaultActive:'1-1-1',\n      defaultOpened:['1-1']\n    }\n  }\n  onSelect(defaultActive){\n    this.setState({\n      defaultActive\n    })\n    console.log(\"index::\",defaultActive)\n  }\n  onClose(index) {\n    console.log(\"index::\",index)\n  }\n  onOpen(index) {\n    console.log(\"index::\",index)\n  }\n  onButtonClick(){\n    this.setState({\n      defaultActive:'2-3-3-1',\n      defaultOpened:['2','2-3','2-3-3']\n    })\n  }\n  render() {\n    const {defaultActive,defaultOpened} = this.state;\n    return (\n      <div>\n        <Menu \n          defaultActive={defaultActive}\n          defaultOpened={defaultOpened}\n          className=\"demo\" \n          style={{width:260}}\n          onOpen={this.onOpen.bind(this)} \n          onClose={this.onClose.bind(this)}\n          onSelect={this.onSelect.bind(this)}\n        >\n          <Menu.SubMenu index=\"1-1\" title={<span><Icon type=\"apple\"/>导航一</span>}>\n            <Menu.ItemGroup title=\"分组一\">\n              <Menu.Item index=\"1-1-1\">选项1</Menu.Item>\n              <Menu.Item index=\"1-1-2\">选项2</Menu.Item>\n            </Menu.ItemGroup>\n            <Menu.ItemGroup title=\"分组2\">\n              <Menu.Item index=\"1-1-3\">选项3</Menu.Item>\n            </Menu.ItemGroup>\n          </Menu.SubMenu>\n          <Menu.SubMenu index=\"2\" title={<span><Icon type=\"android\"/>导航二</span>}>\n            <Menu.Item index=\"2-1\">选项1</Menu.Item>\n            <Menu.Item index=\"2-2\">选项2</Menu.Item>\n            <Menu.SubMenu index=\"2-3\" title={<span>导航二子菜单</span>}>\n              <Menu.Item index=\"2-3-1\">选项1</Menu.Item>\n              <Menu.Item index=\"2-3-2\">选项2</Menu.Item>\n              <Menu.SubMenu index=\"2-3-3\" title={<span>三级子菜单</span>}>\n                <Menu.Item index=\"2-3-3-1\">选项1</Menu.Item>\n                <Menu.Item index=\"2-3-3-2\">选项2</Menu.Item>\n              </Menu.SubMenu>\n            </Menu.SubMenu>\n          </Menu.SubMenu>\n          <Menu.Item index=\"3\"><Icon type=\"linux\"/>导航三</Menu.Item>\n        </Menu>\n        <div>\n          <Button type=\"primary\" size=\"small\" onClick={this.onButtonClick.bind(this)}>激活选项2菜单</Button>\n        </div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 菜单项分割线\n\n此分割线只是简单的做一下分割样式，你可以自定义`className`、`style`、`children`等。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Menu style={{width:200}}>\n        <Menu.Item index=\"2-1\">选项1</Menu.Item>\n        <Menu.Divider />\n        <Menu.Item index=\"2-2\">选项2</Menu.Item>\n        <Menu.Divider style={{background:'#3c90f2'}}/>\n        <Menu.Item index=\"2-3\">选项2</Menu.Item>\n        <Menu.Divider style={{background:'#0fa120',height:3}}/>\n        <Menu.Item index=\"2-4\">选项2</Menu.Item>\n        <Menu.Item index=\"2-5\">选项2</Menu.Item>\n        <Menu.Item index=\"2-6\">选项2</Menu.Item>\n        <Menu.Item index=\"2-7\">选项2</Menu.Item>\n      </Menu>\n    )\n  }\n}\n```\n<!--End-->\n\n## API\n\n### Menu\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| mode | 菜单类型，可选值为 horizontal(水平) 和 vertical(垂直) 和 inline(垂直弹出层) 默认垂直参数`vertical` | String | `vertical` |\n| theme | 主题颜色 | String[light,dark] | light |\n| inlineCollapsed | inline 时菜单是否收起状态 | boolean | `false` |\n| inlineIndent | inline 模式的菜单缩进宽度 | boolean | `24` |\n| defaultActive | 当前默认选中的菜单项 `index` | String | - |\n| defaultOpened | 当前默认打开的菜单项 `index` | String[] | - |\n| onClose | 折叠菜单关闭事件 | Function(index) | - |\n| onOpen | 折叠菜单展开事件 | Function(index) | - |\n| onSelect | 当前默认打开的菜单项 | Function(index) | - |\n\n### Menu.Item\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| disabled | 是否禁用 | Boolean | false |\n| index | `item` 的唯一标志 | String | vertical |\n\n### Menu.SubMenu\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 折叠菜单标题 | String,React.ReactNode | vertical |\n| index | `SubMenu` 的唯一标志 | String | vertical |\n\n\n### Menu.Divider\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| className | 元素的类的名称。 | String | - |\n"

/***/ })

}]);