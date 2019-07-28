(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{652:function(n,i){n.exports='Divider 分割线\n===\n\n区隔内容的分割线。\n\n```jsx\nimport { Divider } from \'uiw\';\n```\n\n### 基础实例\n\n基础实例包含虚线分割线、带文本的分割线、实线分割线。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Divider } from \'uiw\';\n\nReactDOM.render(\n  <div style={{ maxWidth: 530 }}>\n    <div>周星驰： 香港演员、导演。祖籍浙江宁波，1962年6月22日生于香港，他是香港最为重要的喜剧片演员与编导之一。中学毕业以后考入香港无线电视台艺员训练班的夜间部。结业后成为无线艺人，最初曾在《香城浪子》《射雕英雄传》等剧集中担任临时演员。</div>\n    <Divider />\n    <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n    <Divider>大话西游</Divider>\n    <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。 如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。 如果非要在这份爱上加上一个期限，我希望是…… 一万年</div>\n    <Divider dashed />\n    <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；曾经牵挂，才能了无牵挂。</div>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 垂直分割线\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Divider } from \'uiw\';\n\nReactDOM.render(\n  <div>\n    首页\n    <Divider type="vertical" />\n    <a href="#">列表页面</a>\n    <Divider type="vertical" />\n    <a href="#">文章详情</a>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n### 标题对齐位置\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```jsx\nimport { Divider } from \'uiw\';\n\nReactDOM.render(\n  <div style={{ maxWidth: 530 }}>\n    <Divider dashed />\n    <div>周星驰： 香港演员、导演。祖籍浙江宁波，1962年6月22日生于香港，他是香港最为重要的喜剧片演员与编导之一。中学毕业以后考入香港无线电视台艺员训练班的夜间部。结业后成为无线艺人，最初曾在《香城浪子》《射雕英雄传》等剧集中担任临时演员。</div>\n    <Divider align="left">大话西游</Divider>\n    <div>古有关云长全神贯注下象棋刮骨疗毒，今有我零零漆聚精会神看A片挖骨取弹头。</div>\n    <Divider>大话西游</Divider>\n    <div>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。</div>\n    <Divider dashed align="right">大话西游</Divider>\n    <div>曾经痛苦，才知道真正的痛苦；曾经执著，才能放下执著；曾经牵挂，才能了无牵挂。</div>\n  </div>,\n  _mount_\n);\n```\n\x3c!--End--\x3e\n\n## API\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| type | 水平还是垂直类型 | enum{`horizontal`,`vertical`}\t| `horizontal` |\n| dashed | 是否虚线 |\tBoolean\t| `false` |\n| align | 分割线标题的对齐位置 | Enum{`left`, `right`, `center`}\t| `center` |\n'}}]);