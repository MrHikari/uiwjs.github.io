(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{669:function(n,t){n.exports='Dropdown 下拉菜单\n===\n\n向下弹出的列表。\n\n```jsx\nimport { Dropdown } from \'uiw\';\n```\n\n### 基本用法\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nconst menu = (\n  <Menu bordered style={{ minWidth: 120 }}>\n    <Menu.Item icon="reload" text="重新加载" />\n    <Menu.Item icon="heart-on" text="另存为" active />\n    <Menu.Item icon="appstore" text="应用商城" />\n    <Menu.Item icon="bar-chart" text="月统计报表" />\n    <Menu.Item icon="setting" text="偏好设置" />\n  </Menu>\n);\n\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <Dropdown menu={menu}>\n          <a href="javascript:;">\n            鼠标经过出现菜单 <Icon type="arrow-down" />\n          </a>\n        </Dropdown>\n        <Dropdown trigger="click" menu={menu}>\n          <a href="javascript:;">\n            点击我出现下拉菜单 <Icon type="arrow-down" />\n          </a>\n        </Dropdown>\n        <Divider />\n        <ButtonGroup style={{ marginRight: 5, display: \'inline-block\' }}>\n          <Button icon="copy">点击右边</Button>\n          <Dropdown trigger="click" placement="bottomRight" menu={menu}>\n            <Button icon="more" />\n          </Dropdown>\n        </ButtonGroup>\n        <Dropdown trigger="click" menu={menu}>\n          <Button basic icon="file-text" type="dark">文件<Icon type="caret-down" /></Button>\n        </Dropdown>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### 被禁用\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nconst menu = (\n  <Menu bordered style={{ maxWidth: 200 }}>\n    <Menu.Item icon="reload" text="重新加载" />\n    <Menu.Divider />\n    <Menu.Item icon="heart-on" text="另存为" active />\n    <Menu.Item icon="appstore" text="应用商城" />\n    <Menu.Item icon="bar-chart" text="月统计报表导出" />\n    <Menu.Item icon="setting" text="偏好设置" />\n  </Menu>\n);\n\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <ButtonGroup style={{ marginRight: 5, display: \'inline-block\' }}>\n          <Button disabled icon="copy">点击右边</Button>\n          <Dropdown disabled trigger="click" placement="bottomRight" menu={menu}>\n            <Button icon="more" />\n          </Dropdown>\n        </ButtonGroup>\n        <Dropdown disabled menu={menu}>\n          <Button basic type="link"> (超连接样式)link </Button>\n        </Dropdown>\n        <Dropdown disabled menu={menu}>\n          <Button type="primary">主要按钮</Button>\n        </Dropdown>\n        <Dropdown disabled menu={menu}>\n          <Button type="success">成功按钮</Button>\n        </Dropdown>\n        <Dropdown disabled menu={menu}>\n          <Button type="warning">警告按钮</Button>\n        </Dropdown>\n        <Dropdown disabled menu={menu}>\n          <Button type="danger">错误按钮</Button>\n        </Dropdown>\n        <Dropdown disabled menu={menu}>\n          <Button type="light">亮按钮</Button>\n        </Dropdown>\n        <Dropdown disabled menu={menu}>\n          <Button type="dark">暗按钮</Button>\n        </Dropdown>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### 弹出位置\n\n\x3c!--DemoStart,bgWhite--\x3e \n```jsx\nconst menu = (\n  <Menu bordered style={{ maxWidth: 200 }}>\n    <Menu.Item icon="reload" text="重新加载" />\n    <Menu.Divider />\n    <Menu.Item icon="heart-on" text="另存为" active />\n    <Menu.Item icon="appstore" text="应用商城" />\n    <Menu.Item icon="bar-chart" text="月统计报表导出" />\n    <Menu.Item icon="setting" text="偏好设置" />\n  </Menu>\n);\n\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <ButtonGroup style={{ marginRight: 5, display: \'inline-block\' }}>\n          <Button icon="copy">top</Button>\n          <Dropdown trigger="click" placement="top" menu={menu}>\n            <Button icon="more" />\n          </Dropdown>\n        </ButtonGroup>\n        <Dropdown menu={menu} trigger="click" placement="topLeft">\n          <Button type="primary">topLeft</Button>\n        </Dropdown>\n        <Dropdown menu={menu} trigger="click" placement="topRight">\n          <Button type="success">topRight</Button>\n        </Dropdown>\n        <Divider />\n        <Dropdown menu={menu} trigger="click" placement="bottomRight">\n          <Button type="light">bottomRight</Button>\n        </Dropdown>\n        <Dropdown menu={menu} trigger="click" placement="bottom">\n          <Button type="warning">bottom</Button>\n        </Dropdown>\n        <Dropdown menu={menu} trigger="click" placement="bottomLeft">\n          <Button type="danger">bottomLeft</Button>\n        </Dropdown>\n        <Dropdown menu={menu} trigger="click" placement="right">\n          <Button type="dark">right</Button>\n        </Dropdown>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n| -------- | -------- | -------- | -------- |\n| menu | 菜单 | [`<Menu>`](#/components/menu) | - |\n| disabled | 菜单是否禁用 | Boolean | - |\n| trigger[`<OverlayTrigger>`](#/components/overlay-trigger) | 悬停/点击弹出窗口 | Enum{`hover`, `click`, `focus`} | `hover` |\n| placement[`<OverlayTrigger>`](#/components/overlay-trigger) | 指定弹出框位置，支持 12 个访问展示菜单。 | Enum{} | `bottomLeft` |\n\n更多属性文档请参考 [OverlayTrigger](#/components/overlay-trigger)。'}}]);