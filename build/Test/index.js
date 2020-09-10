(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/学习记录文件/Test/src/Test/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".starDetail-page": {
    "width": "750px",
    "height": "1650px",
    "backgroundColor": "rgba(247,245,245,1)",
    "position": "relative"
  },
  ".tutorial-page": {
    "backgroundColor": "rgba(255,255,255,1)",
    "width": "750px",
    "height": "1616px",
    "position": "absolute",
    "top": "20px"
  },
  ".tutorial-page1": {
    "backgroundColor": "rgba(255,255,255,1)",
    "position": "absolute",
    "top": "1636px",
    "width": "750px",
    "height": "200px"
  },
  ".height-100": {
    "width": "750px",
    "height": "200px",
    "backgroundColor": "rgba(255,255,255,1)",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".content-item": {
    "width": "686px",
    "height": "404px",
    "marginLeft": "32px",
    "position": "relative",
    "borderBottom": "2px solid rgba(23, 35, 61, 0.06)"
  },
  ".content-item .item-type": {
    "width": "85px",
    "height": "36px",
    "fontSize": "20px",
    "color": "rgba(23,35,61,0.35)",
    "position": "absolute",
    "top": "38px",
    "right": "0px",
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-type"
        }
      ]
    }
  },
  ".item-container": {
    "width": "686px",
    "height": "410px",
    "position": "absolute",
    "top": "34px"
  },
  ".item-container-title": {
    "width": "600px",
    "height": "44px",
    "position": "absolute",
    "top": "0px"
  },
  ".item-container-title>text": {
    "width": "600px",
    "height": "44px",
    "fontSize": "32px",
    "color": "rgba(23,35,61,1)",
    "lines": 1,
    "textOverflow": "ellipsis",
    "textAlign": "left",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container-title"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".item-container-contain": {
    "width": "686px",
    "height": "88px",
    "position": "absolute",
    "top": "50px"
  },
  ".item-container-contain>text": {
    "width": "686px",
    "height": "88px",
    "fontSize": "26px",
    "lineHeight": "44px",
    "color": "rgba(23,35,61,0.55)",
    "textIndent": "30px",
    "lines": 2,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item-container-contain"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".item-container-image": {
    "width": "686px",
    "height": "144px",
    "borderRadius": "10px",
    "position": "absolute",
    "top": "160px"
  },
  ".height-10": {
    "width": "750px",
    "height": "10px",
    "backgroundColor": "rgba(247,245,245,1)"
  },
  ".load-status": {
    "width": "750px",
    "height": "80px",
    "backgroundColor": "rgba(255,255,255,1)",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".moredata": {
    "fontSize": "26px",
    "color": "rgba(23,35,61,0.55)"
  },
  ".nomoredata": {
    "fontSize": "26px",
    "color": "rgba(23,35,61,0.55)"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/学习记录文件/Test/src/Test/index.ux?uxType=page& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "starDetail-page"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "tutorial-page"
      ],
      "events": {
        "scrollbottom": "renderMoreListItem"
      },
      "shown": function () {return this.productList.length},
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": {
            "exp": function () {return this.productList},
            "key": "index",
            "value": "item"
          },
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "product"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "content-item"
                  ],
                  "shown": function () {return this.item.type=='0'},
                  "events": {
                    "click": function (evt) {this.goPtest(this.item.id,evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "测一测"
                      },
                      "classList": [
                        "item-type"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "item-container"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "item-container-title"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.title}
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "item-container-contain"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.question_list}
                              }
                            }
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.item.illustration}
                          },
                          "classList": [
                            "item-container-image"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "content-item"
                  ],
                  "shown": function () {return this.item.type=='1'},
                  "events": {
                    "click": function (evt) {this.goTaro(this.item.id,evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "塔罗测试"
                      },
                      "classList": [
                        "item-type"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "item-container"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "item-container-title"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.title}
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "item-container-contain"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.question_list}
                              }
                            }
                          ]
                        },
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.item.illustration}
                          },
                          "classList": [
                            "item-container-image"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {},
          "classList": [
            "height-10"
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "loadStatus"
          },
          "classList": [
            "load-status"
          ],
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular",
                "show": function () {return this.hasMoreData}
              }
            },
            {
              "type": "text",
              "attr": {
                "show": function () {return this.hasMoreData},
                "value": "加载更多"
              },
              "classList": [
                "moredata"
              ]
            },
            {
              "type": "text",
              "attr": {
                "show": function () {return !this.hasMoreData},
                "value": "没有更多了~"
              },
              "classList": [
                "nomoredata"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "list",
      "attr": {},
      "classList": [
        "tutorial-page1"
      ],
      "shown": function () {return !this.productList.length},
      "events": {
        "scrollbottom": "renderMoreListItemNone"
      },
      "children": [
        {
          "type": "list-item",
          "attr": {},
          "classList": [
            "height-100"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "暂无数据~"
              },
              "classList": [
                "nomoredata"
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "loadStatus"
          },
          "classList": [
            "load-status"
          ],
          "style": {
            "height": "200px"
          },
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular",
                "show": function () {return this.hasMoreDataNo}
              }
            },
            {
              "type": "text",
              "attr": {
                "show": function () {return this.hasMoreDataNo},
                "value": "加载更多"
              },
              "classList": [
                "moredata"
              ]
            },
            {
              "type": "text",
              "attr": {
                "show": function () {return !this.hasMoreDataNo},
                "value": "暂无数据~"
              },
              "classList": [
                "nomoredata"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:\\学习记录文件\\Test\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\学习记录文件\\Test&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:/学习记录文件/Test/node_modules/babel-loader/lib?cwd=d:/学习记录文件/Test&plugins[]=c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/学习记录文件/Test/src/Test/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var memList = [];
var _default = {
  "private": {
    productList: [],
    hasMoreData: true,
    hasMoreDataNo: true,
    size: 5,
    isLoadingData: false,
    page: 1
  },
  goback: function goback() {
    _system3["default"].back();
  },
  goPtest: function goPtest(id) {
    console.log(id);
    alert(id);
  },
  goTaro: function goTaro(id) {
    console.log(id);

    _system4["default"].set({
      key: 'testId',
      value: id,
      success: function success(data) {
        _system3["default"].push({
          uri: '/Taro'
        });
      },
      fail: function fail(data, code) {}
    });
  },
  routeHome: function routeHome(name, date, id) {
    var v = {
      starId: id,
      starName: name,
      starDate: date
    };
    var a = JSON.stringify(v);

    _system4["default"].set({
      key: 'params',
      value: a,
      success: function success(data) {
        _system3["default"].push({
          uri: '/Home'
        });
      },
      fail: function fail(data, code) {}
    });
  },
  loadAndRender: function loadAndRender() {
    var doRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var _this = this;

    this.isLoadingData = true;
    var data = {
      page: this.page,
      limit: this.size
    };

    _system2["default"].fetch({
      url: "http://cmapi.truegrowth.cn/test/list/quickapp/1.0",
      method: "POST",
      responseType: "json",
      data: data,
      success: function success(res) {
        if (res.data.data.code == 0) {
          _this.homeLists = res.data.data.info.items;
          this.isLoadingData = false;

          if (!_this.homeLists.length) {
            _this.hasMoreData = false;
          } else {
            memList = memList.concat(_this.homeLists);
            _this.productList = memList;

            if (_this.productList.length > 0) {
              _this.height = "home-height";
            }
          }
        }
      }
    });
  },
  renderMoreListItem: function renderMoreListItem() {
    var _this = this;

    setTimeout(function () {
      _this.page++;

      _this.loadAndRender();
    }, 1000);
  },
  renderMoreListItemNone: function renderMoreListItemNone() {
    var _this = this;

    setTimeout(function () {
      _this.hasMoreDataNo = false;
    }, 1000);
  },
  onInit: function onInit() {
    this.loadAndRender();
  }
};
exports["default"] = _default;
var moduleOwn = exports["default"] || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page":
/*!****************************************************!*\
  !*** d:/学习记录文件/Test/src/Test/index.ux?uxType=page ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page&")
var $app_style$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=d:/学习记录文件/Test&plugins[]=c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:\\学习记录文件\\Test\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\学习记录文件\\Test&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:\\学习记录文件\\Test\\src\\Test\\index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map