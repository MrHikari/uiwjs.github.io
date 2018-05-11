(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[119],{

/***/ 636:
/***/ (function(module, exports) {

module.exports = "Modal 对话框\n===\n\n模态对话框。\n\n### 基本用法\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading:true\n    }\n  }\n\n  showConfirm(){\n    Modal.info({\n      title: 'Want to delete these items s?',\n      content: 'When clicked the OK button, Some descriptions.',\n      okText: 'OK',\n      cancelText: 'Cancel',\n      maskClosable:false,\n      className:\"aaa\",\n      onOk:()=>{\n        console.log(\"确定回调！1111\")\n      },\n      onCancel:()=>{\n        console.log(\"取消回调！222\")\n      },\n    })\n  }\n\n  showConfirm2(){\n    Modal.info({\n      title: 'Want to delete these items?',\n      content: 'When clicked the OK button, this dialog will be closed after 1 second',\n      okText: '确定按钮',\n      onOk:()=>{\n        console.log(\"确定回调！\")\n      },\n    })\n  }\n\n  showConfirm3(){\n    Modal.error({\n      title: 'Want to delete these items?',\n      content: 'When clicked the OK button, this dialog will be closed after 3 second',\n      okText: '确定按钮',\n      onOk:()=>{\n        console.log(\"确定回调！, 这里是利用Promise等执行完成再去关闭窗口\")\n        return new Promise((resolve, reject) => {\n          console.log(\"test\",Math.random() > 0.5,'--',resolve, reject)\n          setTimeout(Math.random() > 0.5 ? resolve : reject, 3000);\n        }).catch((e,a) => {\n          console.log('Oops errors!',e,a)\n        });\n      },\n    })\n  }\n  render() {\n    const ButtonGroup = Button.Group;\n    return (\n      <ButtonGroup>\n        <Button size=\"small\" onClick={this.showConfirm} type=\"default\">确认对话框</Button>\n        <Button size=\"small\" onClick={this.showConfirm2} type=\"default\">一个确认按钮对话框</Button>\n        <Button size=\"small\" onClick={this.showConfirm3.bind(this)} type=\"default\">延迟关闭对话框</Button>\n      </ButtonGroup>\n    )\n  }\n}\n```\n<!--End-->\n\n### 不同颜色的提示对话框\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      loading:true\n    }\n  }\n  showConfirm4(){\n    Modal.info({\n      title: 'Want to delete these items?',\n      content: 'When clicked the OK button, this dialog will be closed after 1 second',\n      okText: '确定按钮',\n      onOk() {\n        console.log(\"确定回调！\")\n      },\n    })\n  }\n\n  showConfirm5(){\n    Modal.warn({\n      title: 'Want to delete these items?',\n      content: 'When clicked the OK button, this dialog will be closed after 1 second',\n      okText: '确定按钮',\n      onOk() {\n        console.log(\"确定回调！\")\n      },\n    })\n  }\n\n  showConfirm6(){\n    Modal.error({\n      title: 'Want to delete these items?',\n      content: 'When clicked the OK button, this dialog will be closed after 1 second',\n      okText: '确定按钮',\n      onOk() {\n        console.log(\"确定回调！\")\n      },\n    })\n  }\n\n  showConfirm7(){\n    Modal.success({\n      title: 'Want to delete these items?',\n      content: 'When clicked the OK button, this dialog will be closed after 1 second',\n      okText: '确定按钮',\n      onOk() {\n        console.log(\"确定回调！\")\n      },\n    })\n  }\n  render() {\n    const ButtonGroup = Button.Group;\n    return (\n      <ButtonGroup>\n        <Button size=\"small\" onClick={this.showConfirm4} type=\"info\">消息</Button>\n        <Button size=\"small\" onClick={this.showConfirm5} type=\"warn\">警告</Button>\n        <Button size=\"small\" onClick={this.showConfirm6} type=\"error\">错误</Button>\n        <Button size=\"small\" onClick={this.showConfirm7} type=\"success\">成功</Button>\n      </ButtonGroup>\n    )\n  }\n}\n```\n<!--End-->\n\n### horizontal\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1:false,\n      visible2:false,\n      visible3:false,\n      visible4:false,\n      confirmLoading:false,\n    }\n  }\n  onClick(key){\n    console.log(\"key:------------------------------>:\",key,this.state.visible1)\n    this.setState({\n      [key]:true\n    })\n  }\n  render() {\n    return (\n      <div>\n        <Modal \n          title=\"This Title\" \n          horizontal=\"right\"\n          width={300}\n          visible={this.state.visible1}\n          styleMask={{ // 遮罩层样式\n            \"top\": 60,\n            \"backgroundColor\":\"rgba(51, 51, 51, 0)\"\n          }} \n          style={{     // 弹出层容器样式\n            //\"top\": 60\n          }}\n          onOk={()=>{\n            this.setState({\n              confirmLoading:true\n            })\n\n            setTimeout(() => {\n              this.setState({\n                visible1: false,\n                confirmLoading: false,\n              });\n            }, 2000);\n\n          }} // 点击确定提交按钮\n          onCancel={()=>{\n            console.log(\"-点击确定提交按钮-->\",this.state.visible1)\n            this.setState({visible1:false})\n          }}\n          confirmLoading={this.state.confirmLoading}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n        </Modal>\n\n        <Modal \n          title=\"This Title\" \n          horizontal=\"right\"\n          width={300}\n          visible={this.state.visible2}\n          styleMask={{          // 遮罩层样式\n            \"top\": 60,\n            \"backgroundColor\":\"rgba(51, 51, 51, 0.23)\"\n          }} \n          style={{\n            \"top\": 60\n          }}\n          onOk={()=>{\n            this.setState({\n              confirmLoading:true\n            })\n\n            setTimeout(() => {\n              this.setState({\n                visible2: false,\n                confirmLoading: false,\n              });\n            }, 2000);\n\n          }} // 点击确定提交按钮\n          onCancel={()=>this.setState({visible2:false})}\n          confirmLoading={this.state.confirmLoading}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n        </Modal>\n\n        <Modal \n          title=\"This Title\" \n          horizontal=\"left\"\n          width={300}\n          visible={this.state.visible3}\n          onOk={()=>{\n            this.setState({\n              confirmLoading:true\n            })\n\n            setTimeout(() => {\n              this.setState({\n                visible3: false,\n                confirmLoading: false,\n              });\n            }, 2000);\n\n          }} // 点击确定提交按钮\n          onCancel={()=>this.setState({visible3:false})}\n          confirmLoading={this.state.confirmLoading}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n        </Modal>\n\n        <Modal \n          title=\"点击确定后异步关闭对话框\" \n          horizontal=\"right\"\n          width={300}\n          visible={this.state.visible4}\n          onOk={()=>{\n            this.setState({\n              confirmLoading:true\n            })\n\n            setTimeout(() => {\n              this.setState({\n                visible4: false,\n                confirmLoading: false,\n              });\n            }, 2000);\n\n          }} // 点击确定提交按钮\n          onCancel={()=>this.setState({visible4:false})}\n          confirmLoading={this.state.confirmLoading}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n        </Modal>\n\n        <Button size=\"small\" onClick={this.onClick.bind(this,'visible1')}>Right顶部留出空隙，隐藏遮罩层</Button>\n\n        <Button size=\"small\" onClick={this.onClick.bind(this,'visible2')}>Right顶部留出空隙</Button>\n\n        <Button size=\"small\" onClick={this.onClick.bind(this,'visible3')}>Left</Button>\n\n        <Button size=\"small\" onClick={this.onClick.bind(this,'visible4')}>Right</Button> \n\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 在render中使用\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible:false,\n    }\n  }\n  render() {\n    return (\n      <div> \n        <Button size=\"small\" onClick={()=>{\n          this.setState({visible:true})\n        }}>Open Modal dialog</Button>  &nbsp;\n        <Modal \n          title=\"Modal Title\" \n          visible={this.state.visible}\n          onOk={()=>{\n            this.setState({visible:false})\n          }} // 点击确定提交按钮\n          width={600}          // 有默认值可以不传递\n          style={{top: 20}}    // 可以设定容器的位置以及样式\n          onCancel={()=>{\n            this.setState({visible:false})\n          }}\n          maskClosable={false} // 禁止遮罩层关闭\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p>\n        </Modal>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### Modals自定义Footer\n\n自定义按钮，需要定义`onCancel`方法，`onCancel`方法改变父组件的`visible`属性。`footer`可以赋值`null`，不显示底部按钮。\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible:false,\n    }\n  }\n  handleCancel(){\n    this.setState({visible:false})\n  }\n  handleShow(){\n    this.setState({visible:true})\n  }\n  render() {\n    return (\n      <div> \n        <Button size=\"small\" onClick={this.handleShow.bind(this)}>Modals自定义Footer</Button>\n        <Modal \n          title=\"Modals自定义Footer\" \n          visible={this.state.visible}\n          onOk={this.handleOk} // 点击确定提交按钮\n          style={{top: 20}}    // 可以设定容器的位置以及样式\n          onCancel={this.handleCancel.bind(this)}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n          // 自定义页脚按钮\n          // footer={null}\n          footer={(\n            <div>\n              <Button size=\"small\" onClick={()=>{\n                this.setState({\n                  visible:false\n                })\n              }}>\n                取消\n              </Button>\n              <Button size=\"small\" onClick={()=>{\n                this.setState({\n                  visible:false\n                })\n              }}>\n                确定\n              </Button>\n            </div>\n          )}\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p>\n        </Modal>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### Modals居中显示\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible3:false,\n    }\n  }\n  render() {\n    return (\n      <div> \n        <Button size=\"small\" onClick={()=>{\n          this.setState({visible3:true})\n        }}>Modals居中显示，</Button> &nbsp;\n        <Modal \n          title=\"Modals自定义Footer\" \n          visible={this.state.visible3}\n          onOk={()=>{\n            // 点击确定提交按钮\n          }} \n          onCancel={()=>this.setState({visible3:false})}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n        </Modal>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n### 点击确定后异步关闭对话框\n\n<!--DemoStart--> \n```js\nclass Demo extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      confirmLoading:false,\n      loading:false,\n      visible:false,\n    }\n  }\n  render() {\n    return (\n      <div> \n        <Button size=\"small\" onClick={()=>{\n          this.setState({visible:true})\n        }}>点击确定后异步关闭对话框， 并添加加载状态</Button> \n        <Modal \n          title=\"点击确定后异步关闭对话框\" \n          visible={this.state.visible}\n          onOk={()=>{\n            this.setState({\n              confirmLoading:true,\n              loading:true\n            })\n\n            setTimeout(() => {\n              this.setState({\n                visible: false,\n                confirmLoading: false,\n                loading:false\n              });\n            }, 2000);\n\n          }} // 点击确定提交按钮\n          onCancel={()=>this.setState({visible:false})}\n          confirmLoading={this.state.confirmLoading}\n          okText=\"OK\" \n          cancelText=\"Cancel\"\n        >\n          <Loading loading={this.state.loading}>\n          <p style={{color:\"#333\"}}>Bla bla ...</p>\n          <p>Bla bla ...</p>\n          <p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p><p>Bla bla ...</p>\n          </Loading>\n        </Modal>\n      </div>\n    )\n  }\n}\n```\n<!--End-->\n\n\n### Modal Attributes\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| visible | 对话框是否可见 | boolean | - |\n| title | 标题 | string、ReactNode | - |\n| okText | 确认按钮文字 | string | 确定 |\n| onOk | 点击确定回调 | function(e) | - |\n| confirmLoading | 确定按钮 loading | boolean | false |\n| cancelText | 取消按钮文字 | string | 取消 |\n| onCancel | 点击遮罩层或右上角叉或取消按钮的回调 | function(e) | - |\n| footer | 底部内容，当不需要默认底部按钮时，可以设为 footer={null} | string、ReactNode | 确定取消按钮 |\n| width | 宽度, 字符串的时候需要带单位如`300px` | number|string | 520 |\n| maskClosable | 点击蒙层是否允许关闭 | boolean | true |\n| styleMask | 遮罩层样式 | object | - |\n| style | 可用于设置浮层的样式，调整浮层位置等 | object | - |\n| onEntered | 动画进入完成，`<Transition>` 动画库方法 | Function | - |\n| onExited | 动画退出完成，`<Transition>` 动画库方法 | Function | - |\n\n\n\n### Modal.method()\n\n| 方法 | 说明 |\n|--------- |-------- |\n| `Modal.info` | 正常白底效果 |\n| `Modal.success` | 成功提示 |\n| `Modal.warn` | 警告提示 |\n| `Modal.warning` | 警告提示 同warn |\n| `Modal.error` | 错误提示 |\n\n继承Modals组件方法下面是默认，以及新增的方法。\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| title | 标题 | string、ReactNode | - |\n| content | 内容 | string、ReactNode | - |\n| width | 宽度 | string、number | 416 |\n| maskClosable | 点击蒙层是否允许关闭，默认不允许关闭 | boolean | false |\n"

/***/ })

}]);