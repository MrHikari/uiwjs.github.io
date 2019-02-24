(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{669:function(n,e){n.exports="TimePicker 时间选择器\n===\n\n当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。\n\n```jsx\nimport { TimePicker } from 'uiw';\n```\n\n## 基础用法\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col fixed>\n      <TimePicker />\n    </Col>\n  </Row>\n)\n```\n\x3c!--End--\x3e\n\n## 禁用\n\n可以使用 `disabledHours` `disabledMinutes` `disabledSeconds` 禁用部分时间选择。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col fixed>\n      <TimePicker\n        disabledHours={(hour, date) => {\n          if (hour < 3) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n    <Col>\n      <TimePicker disabled />\n    </Col>\n  </Row>\n)\n```\n\x3c!--End--\x3e\n\n## 不显示禁用\n\n可以使用 `hideDisabled` 将禁用的部分时间隐藏。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col fixed>\n      <TimePicker\n        hideDisabled\n        disabledHours={(hour, date) => {\n          if (hour < 3) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n  </Row>\n)\n```\n\x3c!--End--\x3e\n\n## 间隔时间\n\n可以使用 `hideDisabled` 将禁用的部分时间隐藏。\n\n\x3c!--DemoStart,bgWhite--\x3e \n```js\nconst Demo = () => (\n  <Row gutter={10} style={{ maxWidth: 360 }}>\n    <Col fixed>\n      <TimePicker\n        hideDisabled\n        disabledMinutes={(minute, date) => {\n          if (minute % 15 !== 0) {\n            return true;\n          }\n        }}\n        disabledSeconds={(second, date) => {\n          if (second % 15 !== 0) {\n            return true;\n          }\n        }}\n      />\n    </Col>\n  </Row>\n)\n```\n\x3c!--End--\x3e\n\n## Props\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 初始时间值 | Date | - |\n| placeholder | 输入框提示文字 | String | - |\n| format | 禁止选择部分秒选项 | Function | `HH:mm:ss` |\n| disabled | 禁用全部操作 | Boolean | `false` |\n| disabledHours | 禁止选择部分小时选项 | Function(hour, selectedDate) | - |\n| disabledMinutes | 禁止选择部分分钟选项 | Function(minute, selectedDate) | - |\n| disabledSeconds | 禁止选择部分秒选项 | Function(second, selectedDate) | - |\n| hideDisabled | 不可选择的项隐藏 | Boolean | `false` |\n| onChange | 时间发生变化的回调 | Function | - |\n\n## Props.inputProps\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| inputProps | 将参数传递给 [`<Input>`](#/components/input) 组件 | `Object` | - |\n\n## Props.popoverProps\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| popoverProps | 将参数传递给 [`<Popover>`](#/components/popover) 组件 | `Object` | - |\n"}}]);