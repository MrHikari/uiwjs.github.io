(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ 619:
/***/ (function(module, exports) {

module.exports = "Timestamp 时间戳\n===\n\n用于时间格式化。\n\n## 基础实例\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Timestamp value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/>\n    )\n  }\n}\n```\n<!--End-->\n\n## 格式化时间\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <div>\n        <div><Timestamp format=\"Y年m月d日 h:i:s\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n        <div><Timestamp format=\"Y年m月d日\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n        <div><Timestamp format={`\\\\T\\\\o\\\\d\\\\a\\\\y \\\\i\\\\s d-m-Y`} value={new Date()}/></div>\n        <div><Timestamp format={`今天是：Y/m/d`} value={new Date()}/></div>\n        <div><Timestamp format=\"h:i:s\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n        <div><Timestamp format=\"Y\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n        <div><Timestamp format=\"m月\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n        <div><Timestamp format=\"d日\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n        <div><Timestamp format=\"d日\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 倒计时\n\n<!--DemoStart--> \n```js\nconst fillZero = num => (num < 10 ? `0${num}` : num);\nconst hours = 60 * 60 * 1000;\nconst minutes = 60 * 1000;\n\nclass Demo extends Component {\n  renderDate(time){\n    const h = fillZero(Math.floor(time / hours));\n    const m = fillZero(Math.floor((time - (h * hours)) / minutes));\n    const s = fillZero(Math.floor((time - (h * hours) - (m * minutes)) / 1000));\n    return `${h}时 ${m}分 ${s}秒`;\n  }\n  render() {\n    return (\n      <div>\n        <div><Timestamp countDown={true} value={Date.now() + 26400000}/></div>\n        <div><Timestamp renderDate={this.renderDate.bind(this)} countDown={true} value={Date.now() + 26400000}/></div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n## 某时间之前\n\n多少小时前、多少分钟前、多少秒前，`interval=0` 不触发定时器，刷新页面\n\n<!--DemoStart--> \n```js\nconst minute = 1000 * 60;\nconst hour = minute * 60;\nconst day = hour * 24;\nconst halfamonth = day * 15;\nconst month = day * 30;\nconst year = month * 12;\n\nclass Demo extends Component {\n  onDateChange(number){\n    let label = '';\n    const _year = number/year;\n    const _month = number/month;\n    const _week = number/(7*day);\n    const _day = number/day;\n    const _hour = number/hour;\n    const _min = number/minute;\n\n    if(_year>=1) label=parseInt(_year) + \"年前\";\n    else if(_month>=1) label=parseInt(_month) + \"个月前\";\n    else if(_week>=1) label=parseInt(_week) + \"周前\";\n    else if(_day>=1) label=parseInt(_day) +\"天前\";\n    else if(_hour>=1) label=parseInt(_hour) +\"个小时前\";\n    else if(_min>=1) label=parseInt(_min) +\"分钟前\";\n    else label=\"刚刚\";\n    return (\n      <span>{label}</span>\n    )\n  }\n  render() {\n    return (\n      <div>\n        <div><Timestamp beforeDate={true} renderDate={this.onDateChange.bind(this)} value={Date.now() - 55000}/></div>\n        <div><Timestamp beforeDate={true} interval={0} renderDate={this.onDateChange.bind(this)} value={Date.now() - 31000}/></div>\n        <div><Timestamp beforeDate={true} interval={0} renderDate={this.onDateChange.bind(this)} value={Date.now() - minute*46}/></div>\n        <div><Timestamp beforeDate={true} interval={0} renderDate={this.onDateChange.bind(this)} value={Date.now() - hour*12}/></div>\n        <div><Timestamp beforeDate={true} interval={0} renderDate={this.onDateChange.bind(this)} value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/></div>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n## 时区转换\n\n`TZC` 为服务器时间时区，将时间转换到东八区时间\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  render() {\n    return (\n      <Timestamp tzc={8} format=\"Y年m月d日 h:i:s\" value=\"Wed Nov 22 2017 02:06:01 GMT+0800 (CST)\"/>\n    )\n  }\n}\n```\n<!--End-->\n\n## 安装和使用\n\n```bash\nnpm install uiw --save\n```\n\n```js\nimport { Timestamp } from 'uiw';\n// or\nimport Timestamp from 'uiw/lib/timestamp';\n```\n\n### Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 日期值作为ISO8601字符串或Date对象，`countDown=true`的时候，它是一个倒计时结束时间。 | String | - |\n| format | 格式化时间，例如：`Y年m月d日 H:i:s`，年`Y`，月`m`，日`d`，时`H`，分`i`，秒`s` | String | `Y-m-d H:i:s` |\n| tzc | 服务器时区，解决因时区变更，导致显示服务器时间不准确 time Zone Converter | Number | - |\n| startTime | 倒计时，起始时间 | Number/String/Date | `new Date()` |\n| beforeDate | 某时间之前，如`8 分钟之前` | Boolean | `false` |\n| countDown | 倒计时，开关 | Boolean | `false` |\n| renderDate | 倒计时，回调函数返回Dom，用于格式化时间 | Function(Date) | `new Date()` |\n| interval | 倒计时，间隔时间，`interval=0` 不触发定时器 | Number | `1000`ms |\n| onDateChange | 倒计时，间隔时间出发事件 | Number | `1000`ms |\n| onDateEnd | 倒计时结束触发事件 | Number | `1000`ms |\n"

/***/ })

}]);