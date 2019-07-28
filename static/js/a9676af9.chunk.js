(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{736:function(n,e){n.exports="BackTop 返回顶部\n===\n\n返回页面顶部的操作按钮。\n\n```jsx\nimport { BackTop } from 'uiw';\n```\n\n## 基本用法\n\n\x3c!--DemoStart,codePen--\x3e \n```js\nimport { BackTop } from 'uiw';\n\nReactDOM.render(\n  <div>\n    <div>滚动滚动条，【快看右下角】，显示返回顶部按钮。</div>\n    <BackTop\n      style={{ backgroundColor: 'red', color: '#fff' }}\n      step={500}\n      speed={10}\n      content={<div>Top</div>}\n    />\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 函数子组件\n\n点击按钮滚动到顶部\n\n\x3c!--DemoStart,codePen--\x3e \n```js\nimport { BackTop, Button } from 'uiw';\n\nReactDOM.render(\n  <BackTop\n    fixed={false}\n    step={500}\n    clickable={false}\n    speed={10}\n  >\n    {({ percent, scrollToTop }) => (\n      <Button onClick={() => scrollToTop() } type=\"success\">点击滚动到顶部{`${percent}%`}</Button>\n    )}\n  </BackTop>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## 组件子节点\n\n点击按钮滚动到顶部\n\n\x3c!--DemoStart,codePen--\x3e \n```js\nimport { BackTop, Button } from 'uiw';\n\nReactDOM.render(\n  <BackTop\n    fixed={false}\n    step={500}\n    speed={10}\n  >\n    <Button type=\"success\">点击滚动到顶部</Button>\n  </BackTop>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## Params\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| content | 滚动到顶部按钮内容 | ReactNode/String | `0` |\n| offsetTop | 是否始终显示组件 | Number | `0` |\n| showBelow | 滚动距离多少时显示组件 | Number | `1` |\n| clickable | 是否可以点击 | Bool | `true` |\n| speed | 滚动速度 | Number | `50` |\n| fixed | 是否固定，默认`true` | Bool | `true` |\n| style | CSS样式 | Object | - |\n| className | CSS类名称 | String | - |\n| onClick | 点击回调 | Function | - |\n"}}]);