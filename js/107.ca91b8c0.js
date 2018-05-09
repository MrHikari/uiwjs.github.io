(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ 623:
/***/ (function(module, exports) {

module.exports = "Table 表格\n===\n\n用于页面中展示重要的提示信息。\n\n\n### 基本用法\n\n⚠️  columns 中的 key 很重要，在一个表中是唯一的。这个key 对应数据中的key，保持一致，columns中的render函数才会有作用。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180 },\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"},\n        {\n          title: \"操作\",\n          key: \"edit\",\n          width: 110,\n          render: (text, row, index) => {\n            const ButtonGroup = Button.Group;\n            return (\n              <div>\n                <Button size=\"mini\" type=\"danger\">删除</Button>\n                <Button size=\"mini\" type=\"success\">修改</Button>\n              </div>\n            )\n          },\n        }\n      ],\n      dataSource:[\n{name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。',edit:\"\"},\n{name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:\"\"},\n{name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:\"\"},\n{name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:\"\"},\n{name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。',edit:\"\"},\n{name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班',edit:\"\"},\n{name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。',edit:\"\"},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table data={this.state.dataSource} columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n### 暂无数据\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180 },\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"},\n        {\n          title: \"操作\",\n          key: \"edit\",\n          width: 110,\n          render: (text, row, index) => {\n            const ButtonGroup = Button.Group;\n            return (\n              <div>\n                <Button size=\"mini\" type=\"danger\">删除</Button>\n                <Button size=\"mini\" type=\"success\">修改</Button>\n              </div>\n            )\n          },\n        }\n      ],\n      dataSource:[]\n    }\n  }\n  render() {\n    return (\n      <Table data={this.state.dataSource} columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 列数据在数据项\n\n通过设置 `columns` 参数 `dataIndex`值，指定 `data` 参数中的 `key` 对应的值，默认情况表格的单元格，是按照顺序生成单元格。\n\n下面数据清晰对比有`dataIndex`和没有`dataIndex`的区别。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: [\n        {title: \"姓名\", key: \"age\",  width: 160},\n        {title: \"年龄\", key: \"name\", dataIndex: 'name',  width: 160},\n        {\n          title: \"操作\",\n          key: \"edit\",\n          dataIndex: 'edit',\n          width: 110,\n          render: (text, row, index) => {\n            const ButtonGroup = Button.Group;\n            return (\n              <span>\n                <Button size=\"mini\" type=\"danger\">删除{text}</Button>\n                <Button size=\"mini\" type=\"success\">修改</Button>\n              </span>\n            )\n          },\n        },\n        {title: \"说明\", key: \"info\", width: 160},\n        \n      ],\n      dataSource:[\n        {name: '邓紫棋', age: '12', edit:\"11\", info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},\n        {name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。',edit:\"11\"},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table \n        data={this.state.dataSource} \n        columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n### 带表头标题和页脚\n\n通过设置 `caption` 和 `footer` 来设置表的标题\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      paging:{\n          activePage:5,\n          total:250,\n      },\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180 },\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"}\n      ],\n      dataSource:[\n    {name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},\n    {name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},\n    {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},\n    {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},\n    {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table \n        paging={this.state.paging}\n        caption={<div>明星基本信息</div>}\n        footer={<div>更新于1983年12月6日</div>}\n        data={this.state.dataSource} \n        columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n### 带加载状态的表\n\n⚠️  columns 中的 key 很重要，在一个表中是唯一的。这个key 对应数据中的key，保持一致，columns中的render函数才会有作用。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading:false,\n      paging:{\n          activePage:5,\n          total:250,\n          onChange:this.handleTableChange.bind(this)\n      },\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180 },\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"}\n      ],\n      dataSource:[\n  {name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},\n  {name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},\n  {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},\n  {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},\n  {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},\n  {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},\n  {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},\n      ]\n    }\n  }\n\n  handleTableChange(activePage,total,pageSize){\n\n    this.setState({\n      loading:true,\n      activePage:activePage\n    })\n\n    setTimeout(()=>{\n\n      this.setState({\n        loading:false\n      })\n\n    },2000)\n    \n  }\n  render() {\n    return (\n      <Table \n        data={this.state.dataSource} \n        paging={this.state.paging}\n        loading={this.state.loading}\n        columns={this.state.columns}\n      />\n    )\n  }\n}\n```\n<!--End-->\n\n### 表头分组\n\n表头分组通过 `children` 来实现，复制的表头，需要设置每列的`width`，不然无法对齐表格。\n\n<!--DemoStart--> \n对应数据中的key，保持一致，columns中的render函数才会有作用。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      paging:{\n          activePage:5,\n          total:250,\n      },\n      columns: [\n          {\n            title: '姓名',\n            key: 'name', \n            children:[\n              {\n                title: '中文名字',\n                key: 'enname',\n                children:[\n                  {\n                    title: '姓',\n                    key: 'firstname',\n                    children:[\n                      {title: '祖姓', key: 'firstname_wcj', width: 150, },\n                      {title: '先姓', key: 'lastname_wcj', width: 150, }\n                    ]\n                  },{\n                    title: '名',\n                    key: 'lastname',\n                    children:[\n                      {title: '谱名', width: 150, key: 'puname'},\n                      {title: '名', width: 150, key: 'lastpuname'}\n                    ]\n                  }\n                ]\n              },{\n                title: '英文名字',\n                key: 'cnname'\n              }\n            ]\n          }, {\n            title: '公司',\n            key: 'company',\n            children:[\n              {title: '地址', width: 150, key: 'companyaddress'},\n              {title: '公司名字', width: 150, key: 'companyname'}\n            ]\n          }, {\n            title: '操作',\n            key: 'edit',\n            width: 150,\n            render: (text, row, index) => <a href=\"#\" onClick={()=>{\n              console.log(text,row, index)\n            }}>{text}</a>,\n          }\n      ],\n      dataSource:[\n        {firstname_wcj: '周', lastname_wcj: '杰伦', puname:\"street\", lastpuname:\"street\", cnname: 32, companyaddress: '亮金信息科技', companyname: '亮金', edit: '编辑11'},\n        {firstname_wcj: '周', lastname_wcj: '杰伦', puname:\"street\", lastpuname:\"street\", cnname: 32, companyaddress: '亮金信息科技', companyname: '亮金', edit: '编辑11'},\n        {firstname_wcj: '周', lastname_wcj: '杰伦', puname:\"street\", lastpuname:\"street\", cnname: 32, companyaddress: '亮金信息科技', companyname: '亮金', edit: '编辑11'},\n        {firstname_wcj: '周', lastname_wcj: '杰伦', puname:\"street\", lastpuname:\"street\", cnname: 32, companyaddress: '亮金信息科技', companyname: '亮金', edit: '编辑11'},\n        {firstname_wcj: '周', lastname_wcj: '杰伦', puname:\"street\", lastpuname:\"street\", cnname: 32, companyaddress: '亮金信息科技', companyname: '亮金', edit: '编辑11'},\n        {firstname_wcj: '周', lastname_wcj: '杰伦', puname:\"street\", lastpuname:\"street\", cnname: 32, companyaddress: '亮金信息科技', companyname: '亮金', edit: '编辑11'},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table \n        paging={this.state.paging}\n        width={2000}\n        footer={<div>更新于1983年12月6日</div>}\n        data={this.state.dataSource} columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n### 固定表头\n\n固定表头通过设置表格 `height` 来实现。\n\n<!--DemoStart--> \n对应数据中的key，保持一致，columns中的render函数才会有作用。\n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      paging:{\n          activePage:5,\n          total:250,\n      },\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180 },\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"}\n      ],\n      dataSource:[\n    {name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},\n    {name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},\n    {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},\n    {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},\n    {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},\n    {name: 'Angelababy', age: '54', info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。'},\n    {name: '唐嫣', age: '12', info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班'},\n    {name: '吴亦凡', age: '4', info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。'},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table height={300} \n      paging={this.state.paging}\n      data={this.state.dataSource} columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### 选择功能的配置\n\n通过 rowSelection 自定义选择项，默认rowSelection 存在就会有选择功能呢。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180 },\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"}\n      ],\n      dataSource:[\n    {_checked:true,name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。'},\n    {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人'},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手'},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。'},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table \n        rowSelection={{\n          onSelectAll:(selectDatas,checked,e)=>{\n            console.log(\"所有选择的数据：\",selectDatas)\n            console.log(\"是否选中：\",checked)\n          },\n          onSelect:(row,number,checked,allChecked,e)=>{ //选中行的数据, 选中的行数, 是否选中, 选中的所有数据,e\n            console.log(\"选中行的数据row:\",row)\n            console.log(\"选中的行数number:\",number)\n            console.log(\"是否选中checked:\",checked)\n            console.log(\"选中的所有数据allChecked:\",allChecked)\n            console.log(\"Evn:\",e)\n          }\n        }}\n        data={this.state.dataSource} \n        columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n### 固定表头和列\n\n通过设置属性 `height` 给表格指定高度后，会自动固定表头，当纵向内容过多时可以使用。  \n通过设置属性 `width` 来实现横向滚动条，设置columns 的 `fixed: 'right'` 属性来固定列。   \n固定列必须设置Tables属性`width`，如果表头与内容无法对其，设置 `columns` 的属性 `width` 。  \n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: [\n        {title: \"姓名\", key: \"name\", width: 180, fixed: 'left'},\n        {title: \"年龄\", key: \"age\", width: 180 },\n        {title: \"地址\", key: \"info\"}, \n        {\n          title: '操作',\n          key: 'edit',\n          width: 60,\n          fixed: 'right',\n          render: (text, row, index) => <a href=\"javascript:void(0)\" onClick={()=>{\n            console.log(\"--->\",text,row, index)\n          }}>{text}</a>,\n        }\n      ],\n      dataSource:[\n    {_checked:true,name: '邓紫棋', age: '12', info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，4岁移居香港，中国香港创作型女歌手。',edit:\"编辑\"},\n    {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:\"编辑\"},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:\"编辑\"},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:\"编辑\"},\n    {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:\"编辑\"},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:\"编辑\"},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:\"编辑\"},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:\"编辑\"},\n    {_disabled:true,name: '李易峰', age: '32', info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',edit:\"编辑\"},\n    {name: '范冰冰', age: '23', info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',edit:\"编辑\"},\n    {name: '杨幂', age: '34', info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',edit:\"编辑\"},\n      ]\n    }\n  }\n  render() {\n    return (\n      <Table \n        height={200}\n        width={2000}\n        rowSelection={{\n          onSelectAll:(selectDatas,checked,e)=>{\n            console.log(\"选择或取消选择所有选项！\",selectDatas)\n          },\n          onSelect:()=>{\n            console.log(\"选择单行选项！\")\n          }\n        }}\n        data={this.state.dataSource} \n        columns={this.state.columns}/>\n    )\n  }\n}\n```\n<!--End-->\n\n## API\n\n### Table \n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| options | 指定可选项 | string[] | [] |\n| caption | 表格标题 | Function | - |\n| footer | 表格尾部 | Function | - |\n| height | 通过设置属性 height 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。 | number | - |\n| width | 设置属性 width 出现横向滚动条，若列头与内容不对齐，请指定列的宽度 width | number | - |\n| defaultChecked | 默认选中的选项 | string | [] |\n| onChange | 变化时回调函数 | Function(checkedValues:Array, value:String, checked:Boolean, e:Event) | - |\n| paging | 分页器，配置项参考 paging，设为 false 时不展示和进行分页 | Object | - |\n| rowSelection | 选择功能的配置。方法参考下面 `rowSelection` 文档 | Object | - |\n| rowClassName | 表格行的类名 | Function(record, index):string | - |\n\n\n### Table Column\n\n列描述数据对象，是 columns 中的一项，`Column` 使用相同的 API。\n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| width | 列宽度 | string | - |\n| dataIndex | 列数据在数据项中对应的 `key` | Function | string |\n| fixed | 列是否固定，`left`、`right` | string | - |\n| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格行/列合并 | Function(text, rowData, index) {} | - |\n| className | 列的 className | string | - |\n| onCellClick | 单元格点击回调 | Function(cellData, colNumber, rowNum, columnKey, rowData, ischecked, event) | - |\n\n### Table rowSelection\n\n选择功能的配置。\n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| onSelect | 用户手动选择/取消选择某一行的回调，配置onSelect | Function(选中行的数据, 选中的行数, 是否选中, 选中的所有数据,e) | - |\n| onSelectAll | 用户手动选择/取消选择所有列的回调 | Function(selectedRowKeys, selectedRows) | - |\n\n### Table data\n\nTables中的data描述数, 注意参数是有顺序的，必须放置最前面\n\n| 参数 | 说明 | 类型 | 默认值 |\n|------ |-------- |---------- |-------- |\n| _checked  | 给 data 项设置特殊 key `_checked: true` 可以默认选中当前项。 | Boolean | false | \n| _disabled  | 给 data 项设置特殊 key `_disabled: true` 可以禁止选择当前项。 | Boolean | false | \n| ~~`_select`~~ | 特殊`key:_select`，框架内部使用，请不要设置 | - | - | \n"

/***/ })

}]);