(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ 611:
/***/ (function(module, exports) {

module.exports = "Calendar 日历\n===\n\n按照日历形式展示数据的容器。\n\n## 基础用法\n\n一个通用的日历面板，支持年/月切换。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Calendar />\n    )\n  }\n}\n```\n<!--End-->\n\n## 通知事项日历\n\n在日历面板上面添加通知事件，还可以通过设置`disabledDate`来禁止部分日期点击，如下实例每月`12`号不能点击。\n\n<!--DemoStart--> \n```js\nfunction disabledDate(current) {\n  // 每个月 12 号禁止选中\n  return current.day === 12;\n}\nfunction getListData(value) {\n  let listData;\n  switch (value) {\n    case 8:\n      listData = [\n        { type: 'warning', content: '小弟调调，生日' },\n        { type: 'success', content: '见客户' },\n      ]; break;\n    case 10:\n      listData = [\n        { type: 'warning', content: 'DatePicker添加disabledDate禁用属性.' },\n        { type: 'success', content: '组件Avatar添加小尺寸.' },\n        { type: 'error', content: 'scrollTop方法问题修复。' },\n      ]; break;\n    case 15:\n      listData = [\n        { type: 'warning', content: 'EVGA宣布以1000美元天价回收GeForce 4显卡' },\n        { type: 'success', content: '中国电动车初创公司蔚来据称考虑明年赴美上市。' },\n        { type: 'error', content: '组件库库uiw 1.5.5 发布' },\n        { type: 'error', content: '美区 iMac Pro 正式发售 中国区将于近期发售。' },\n        { type: 'error', content: '《人民日报》评玩命视频：带血的钱不能赚' },\n        { type: 'error', content: '分析师：iPhone X销量尚可 但不会带来超级更新周期' },\n      ]; break;\n    default:\n  }\n  return listData || [];\n}\nconst styles = {\n  overflow: 'hidden',\n  whiteSpace: 'nowrap',\n  width: '100%',\n  textOverflow: 'ellipsis',\n  fontSize: '12px',\n}\nfunction dateCellRender(dateItem){\n  return (\n    <div>\n      {getListData(dateItem.day).map((item,index)=>{\n        return (\n          <Badge key={index} style={styles} status={item.type}>\n            <span>{item.content}</span>\n          </Badge>\n        )\n      })}\n    </div>\n  );\n};\n\nfunction monthCellRender(date,month){\n  console.log('date.getMonth():',month);\n  return (\n    <div>\n      {getListData(month).map((item,index)=>{\n        return (\n          <Badge key={index} style={styles} status={item.type}>\n            <span>{item.content}</span>\n          </Badge>\n        )\n      })}\n    </div>\n  );\n}\n\nfunction onClick(item){\n  console.log('item:',item);\n}\nclass Demo extends Component {\n  render() {\n    return (\n      <Calendar \n        disabledDate={disabledDate}\n        weekLabel={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}\n        dateCellRender={dateCellRender}\n        monthCellRender={monthCellRender}\n        onClick={onClick}\n      />\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 通知事项月份日历\n\n在日历面板上面添加通知事件。\n\n<!--DemoStart--> \n```js\nfunction disabledDate(current) {\n  // 每个月 12 号禁止选中\n  return current.day === 12;\n}\nfunction getListData(value) {\n  let listData;\n  switch (value) {\n    case 8:\n      listData = [\n        { type: 'warning', content: '小弟调调，生日' },\n        { type: 'success', content: '见客户' },\n      ]; \n      break;\n    case 10:\n      listData = [\n        { type: 'warning', content: 'DatePicker添加disabledDate禁用属性.' },\n        { type: 'success', content: '组件Avatar添加小尺寸.' },\n        { type: 'error', content: 'scrollTop方法问题修复。' },\n        { type: 'warning', content: 'DatePicker添加disabledDate禁用属性.' },\n        { type: 'success', content: '组件Avatar添加小尺寸.' },\n        { type: 'error', content: 'scrollTop方法问题修复。' },\n        { type: 'warning', content: 'DatePicker添加disabledDate禁用属性.' },\n        { type: 'success', content: '组件Avatar添加小尺寸.' },\n        { type: 'error', content: 'scrollTop方法问题修复。' },\n      ]; \n      break;\n    default: listData=[]; break;\n  }\n  return listData || [];\n}\nconst styles = {\n  overflow: 'hidden',\n  whiteSpace: 'nowrap',\n  width: '100%',\n  textOverflow: 'ellipsis',\n  fontSize: '12px',\n}\n\nfunction monthCellRender(date,month){\n  const year = date.getFullYear();\n  const newYear = (new Date()).getFullYear();\n  if(year!==newYear) return null;\n  return (\n    <div>\n      {getListData(month).map((item,index)=>{\n        return (\n          <Badge key={index} style={styles} status={item.type}>\n            <span>{item.content}</span>\n          </Badge>\n        )\n      })}\n    </div>\n  );\n}\n\nfunction onClick(item){\n  console.log('item:',item);\n}\nclass Demo extends Component {\n  render() {\n    return (\n      <Calendar \n        disabledDate={disabledDate}\n        weekLabel={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}\n        monthCellRender={monthCellRender}\n        mode=\"year\"\n        onClick={onClick}\n      />\n    )\n  }\n}\n```\n<!--End-->\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { Calendar } from 'uiw';\n// or\nimport Calendar from 'uiw/lib/calendar';\n```\n\n### Calendar\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| weekLabel | 星期显示文本 | Array | `['日', '一', '二', '三', '四', '五', '六']` |\n| dateCellRender | 自定义渲染日期单元格，返回内容会被追加到单元格 | function(date:{day,month,date,format,week})=> ReactNode | - |\n| monthCellRender | 自定义渲染月单元格，返回内容会被追加到单元格 | function(date:{date,month})=> ReactNode | - |\n| disabledDate | 不可选择的日期 | function(date:{day,month,date,format,week})=> Boolean | - |\n| onClick | 点击选择日期回调 | function(date:{day,month,date,format,week})=> ReactNode | - |\n| date | 默认展示今天 | Date | `new Date()` |\n| mode | 展示日期面板 | Enum{`year`, `month`, `week`} | `month` |\n"

/***/ })

}]);