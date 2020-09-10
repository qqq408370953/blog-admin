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
/******/ 	return __webpack_require__(__webpack_require__.s = "d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/学习记录文件/Test/src/Home/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".home-page": {
    "width": "750px",
    "backgroundColor": "rgba(247,245,245,1)",
    "position": "relative"
  },
  ".home-height": {
    "height": "2600px"
  },
  ".header-container": {
    "width": "750px",
    "height": "885px",
    "backgroundImage": "/Common/assets/home_top_bg.png",
    "backgroundSize": "100% 100%"
  },
  ".header-container-appname": {
    "color": "#ffffff",
    "fontSize": "48px",
    "marginTop": "68px",
    "marginLeft": "32px",
    "width": "255px",
    "height": "64px"
  },
  ".header-container-user": {
    "width": "48px",
    "height": "48px",
    "borderRadius": "24px",
    "backgroundImage": "/Common/assets/icon_person_20_nor.png",
    "backgroundColor": "#ffffff",
    "backgroundSize": "100% 100%",
    "position": "absolute",
    "top": "76px",
    "right": "32px"
  },
  ".header-container-constellation": {
    "width": "200px",
    "height": "64px",
    "position": "absolute",
    "top": "156px",
    "left": "32px"
  },
  ".header-container-constellation .constellation-name": {
    "color": "#ffffff",
    "fontSize": "40px",
    "width": "120px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header-container-constellation"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "constellation-name"
        }
      ]
    }
  },
  ".header-container-constellation .constellation-selected-icon": {
    "marginLeft": "8px",
    "width": "45px",
    "height": "45px",
    "marginTop": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header-container-constellation"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "constellation-selected-icon"
        }
      ]
    }
  },
  ".header-container-constellation-date": {
    "width": "200px",
    "height": "64px",
    "position": "absolute",
    "top": "208px",
    "left": "32px"
  },
  ".header-container-constellation-date .constellation-date": {
    "color": "rgba(255,255,255,0.75)",
    "fontSize": "28px",
    "width": "200px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header-container-constellation-date"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "constellation-date"
        }
      ]
    }
  },
  ".header-container-card": {
    "width": "686px",
    "height": "416px",
    "paddingTop": "5px",
    "paddingRight": "5px",
    "paddingBottom": "5px",
    "paddingLeft": "5px",
    "backgroundImage": "/Common/assets/card_luck_bg_nor.png",
    "backgroundSize": "100% 100%",
    "position": "absolute",
    "top": "292px",
    "left": "32px"
  },
  ".card-title": {
    "position": "absolute",
    "left": "32px",
    "top": "24px",
    "color": "#17233D",
    "fontSize": "32px",
    "width": "192px",
    "height": "44px"
  },
  ".card-date": {
    "width": "188px",
    "height": "38px",
    "position": "absolute",
    "left": "230px",
    "top": "28px",
    "color": "rgba(25,35,61,0.55)",
    "fontSize": "28px"
  },
  ".card-container": {
    "width": "622px",
    "height": "180px",
    "position": "absolute",
    "left": "32px",
    "top": "90px",
    "color": "rgba(23,35,61,0.65)",
    "lineHeight": "39px",
    "fontSize": "26px",
    "textOverflow": "ellipsis",
    "lines": 5,
    "textIndent": "30px"
  },
  ".card-rating-title": {
    "width": "296px",
    "height": "42px",
    "fontSize": "26px",
    "color": "rgba(23,35,61,0.55)",
    "position": "absolute",
    "left": "32px",
    "top": "280px"
  },
  ".card-rating-num-star": {
    "position": "absolute"
  },
  ".card-rating-num": {
    "fontSize": "40px",
    "lineHeight": "52px",
    "color": "rgba(23,35,61,1)",
    "top": "320px",
    "left": "50px"
  },
  ".card-rating-star": {
    "top": "330px",
    "width": "238px",
    "height": "39px",
    "left": "100px"
  },
  ".card-rating-right-img": {
    "width": "144px",
    "height": "72px",
    "position": "absolute",
    "top": "310px",
    "right": "32px"
  },
  ".header-router": {
    "width": "550px",
    "height": "176px",
    "position": "absolute",
    "top": "715px",
    "left": "100px",
    "justifyContent": "space-between"
  },
  ".e-router": {
    "position": "relative",
    "width": "104px",
    "height": "140px"
  },
  ".e-router>image": {
    "width": "96px",
    "height": "96px",
    "position": "absolute",
    "top": "0px",
    "left": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "e-router"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".e-router>text": {
    "width": "104px",
    "height": "44px",
    "fontSize": "26px",
    "color": "rgba(23,35,61,0.75)",
    "position": "absolute",
    "top": "96px",
    "left": "0px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "e-router"
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
  ".tutorial-page-title": {
    "backgroundColor": "rgba(255,255,255,1)",
    "position": "absolute",
    "top": "900px",
    "width": "750px",
    "height": "100px",
    "borderBottom": "1px solid rgba(23, 35, 61, 0.06)",
    "paddingLeft": "32px",
    "color": "#17233D",
    "fontSize": "32px"
  },
  ".tutorial-page": {
    "backgroundColor": "rgba(255,255,255,1)",
    "position": "absolute",
    "top": "1000px",
    "width": "750px",
    "height": "1600px"
  },
  ".tutorial-page1": {
    "backgroundColor": "rgba(255,255,255,1)",
    "position": "absolute",
    "top": "1000px",
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
    "height": "320px",
    "borderBottom": "1px solid rgba(23, 35, 61, 0.06)",
    "marginLeft": "32px",
    "position": "relative"
  },
  ".content-item .avatar": {
    "width": "64px",
    "height": "64px",
    "marginTop": "30px",
    "borderRadius": "32px",
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
          "v": "avatar"
        }
      ]
    }
  },
  ".content-item .item-date": {
    "width": "170px",
    "height": "40px",
    "fontSize": "24px",
    "color": "rgba(23,35,61,0.55)",
    "marginTop": "25px",
    "marginLeft": "300px",
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
          "v": "item-date"
        }
      ]
    }
  },
  ".content-item .avatar-title-times": {
    "width": "208px",
    "height": "100px",
    "marginTop": "25px",
    "marginLeft": "10px",
    "position": "relative",
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
          "v": "avatar-title-times"
        }
      ]
    }
  },
  ".avatar-title": {
    "width": "200px",
    "height": "40px",
    "fontSize": "28px",
    "color": "rgba(23,35,61,0.85)",
    "position": "absolute",
    "top": "5px"
  },
  ".avatar-times": {
    "width": "200px",
    "height": "40px",
    "fontSize": "24px",
    "color": "rgba(23,35,61,0.55)",
    "position": "absolute",
    "top": "40px"
  },
  ".item-container": {
    "width": "686px",
    "height": "200px",
    "position": "absolute",
    "top": "120px"
  },
  ".item-container-title": {
    "width": "452px",
    "height": "44px",
    "position": "absolute",
    "top": "0px"
  },
  ".item-container-title>text": {
    "width": "452px",
    "height": "44px",
    "fontSize": "32px",
    "color": "rgba(23,35,61,1)",
    "lines": 1,
    "textOverflow": "ellipsis",
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
    "width": "496px",
    "height": "88px",
    "position": "absolute",
    "top": "64px"
  },
  ".item-container-contain>text": {
    "width": "496px",
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
    "width": "144px",
    "height": "144px",
    "borderRadius": "10px",
    "position": "absolute",
    "top": "0px",
    "right": "0px"
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

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/学习记录文件/Test/src/Home/index.ux?uxType=page& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": function () {return ['home-page', this.height]},
  "children": [
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.isRefreshing},
        "type": function () {return this.refreshType},
        "progressColor": "red"
      },
      "classList": [
        "refresh"
      ],
      "events": {
        "refresh": "refresh"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "header-container"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "星座物语"
              },
              "classList": [
                "header-container-appname"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "header-container-user"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "header-container-constellation"
              ],
              "events": {
                "click": "goStar"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.constellationName}
                  },
                  "classList": [
                    "constellation-name"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/assets/icon_arrow_right.png"
                  },
                  "classList": [
                    "constellation-selected-icon"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "header-container-constellation-date"
              ],
              "events": {
                "click": "goStar"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.constellationDate}
                  },
                  "classList": [
                    "constellation-date"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "header-container-card"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "你的今日运势"
                  },
                  "classList": [
                    "card-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.today}
                  },
                  "classList": [
                    "card-date"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.content}
                  },
                  "classList": [
                    "card-container"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "幸运指数"
                  },
                  "classList": [
                    "card-rating-title"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.starNum}
                  },
                  "classList": [
                    "card-rating-num",
                    "card-rating-num-star"
                  ]
                },
                {
                  "type": "rating",
                  "attr": {
                    "stepsize": "0.5",
                    "rating": function () {return this.starNum},
                    "numstars": "5",
                    "indicator": "true"
                  },
                  "classList": [
                    "card-rating-star",
                    "card-rating-num-star"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/assets/home_btn_luck_nor.png"
                  },
                  "classList": [
                    "card-rating-right-img"
                  ],
                  "events": {
                    "click": "goConstellation"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "header-router"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "e-router"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/assets/icon_chart_48_nor.png"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "看看星盘"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "e-router"
                  ],
                  "events": {
                    "click": "goDivine"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/assets/icon_divination_48_nor.png"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "每日一占"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "e-router"
                  ],
                  "events": {
                    "click": "goTest"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/assets/icon_test_48_nor.png"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "心理测试"
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": " 推荐星闻 "
          },
          "classList": [
            "tutorial-page-title"
          ]
        },
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
                      "events": {
                        "click": function (evt) {this.goProduct(this.item.id,this.item.nickname,this.item.init_viewed,this.item.real_viewed,this.item.avatar,this.item.title,evt)}
                      },
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "avatar"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.item.avatar}
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "avatar-title-times"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.item.nickname}
                              },
                              "classList": [
                                "avatar-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '' + (Number(this.item.init_viewed)+Number(this.item.real_viewed)) + '次浏览'}
                              },
                              "classList": [
                                "avatar-times"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.item.edit_time}
                          },
                          "classList": [
                            "item-date"
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
                                    "value": function () {return this.item.summary}
                                  }
                                }
                              ]
                            },
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.item.cover_page_image}
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
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:\\学习记录文件\\Test\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\学习记录文件\\Test&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:/学习记录文件/Test/node_modules/babel-loader/lib?cwd=d:/学习记录文件/Test&plugins[]=c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/学习记录文件/Test/src/Home/index.ux?uxType=page ***!
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
    text: '欢迎打开主页',
    isRefreshing: false,
    refreshType: 'auto',
    homeLists: [],
    productList: [],
    hasMoreData: true,
    hasMoreDataNo: true,
    size: 5,
    isLoadingData: false,
    page: 1,
    height: "",
    constellationName: "",
    constellationDate: "",
    constellationId: "",
    content: "",
    starNum: "2",
    today: "",
    filterList: []
  },
  goStar: function goStar() {
    _system3["default"].push({
      uri: '/Stardetail'
    });
  },
  goConstellation: function goConstellation() {
    _system3["default"].push({
      uri: '/Constellation'
    });
  },
  goTest: function goTest() {
    _system3["default"].push({
      uri: '/Test'
    });
  },
  goDivine: function goDivine() {
    _system3["default"].push({
      uri: '/Divine'
    });
  },
  goProduct: function goProduct(id, nickname, init_viewed, real_viewed, avatar, title) {
    var viewed = Number(init_viewed) + Number(real_viewed);
    var v = {
      newsId: id,
      nickname: nickname,
      viewed: viewed,
      avatar: avatar,
      title: title
    };
    var a = JSON.stringify(v);

    _system4["default"].set({
      key: 'newsData',
      value: a,
      success: function success(data) {
        _system3["default"].push({
          uri: '/NewsDetail'
        });
      },
      fail: function fail(data, code) {}
    });
  },
  getStar: function getStar() {
    var _this = this;

    var data = {};

    _system2["default"].fetch({
      url: "http://cmapi.truegrowth.cn/constellation/getList/quickapp/1.0",
      method: "POST",
      responseType: "json",
      data: data,
      success: function success(res) {
        if (res.data.data.code == 0) {
          var info = res.data.data.info;
          var filterList = info.filter(function (item, index) {
            var dataArray = item.time_period_desc.split("-");

            if (item.name == "摩羯座") {
              dataArray[1] = "2002.1.19";
            }

            ;

            if (_this.isDuringDate(dataArray[0], dataArray[1], _this.today)) {
              return item;
            }
          });
          _this.constellationName = filterList[0].name;

          _system4["default"].set({
            key: 'starName',
            value: _this.constellationName
          });

          _this.constellationDate = filterList[0].time_period_desc;
          _this.constellationId = filterList[0].id;

          _this.getFortune();
        }
      }
    });
  },
  refresh: function refresh(e) {
    var self = this;
    self.isRefreshing = e.refreshing;
    setTimeout(function () {
      self.isRefreshing = false;

      _system["default"].showToast({
        message: '刷新完成'
      });
    }, 1000);
  },
  isDuringDate: function isDuringDate(beginDateAtr, endDateStr, nowDateStr) {
    var curDate = new Date(nowDateStr);
    var beginDate = new Date(beginDateAtr);
    var endDate = new Date(endDateStr);

    if (curDate >= beginDate && curDate <= endDate) {
      return true;
    }

    return false;
  },
  getStarEve: function getStarEve() {
    var _this = this;

    _system4["default"].get({
      key: 'params',
      success: function success(data) {
        if (data) {
          var params = JSON.parse(data);
          _this.constellationName = params.starName;

          _system4["default"].set({
            key: 'starName',
            value: _this.constellationName
          });

          _this.constellationDate = params.starDate;
          _this.constellationId = params.starId;

          _this.getFortune();
        } else {
          _this.getStar();
        }
      },
      fail: function fail(data, code) {}
    });
  },
  getFortune: function getFortune() {
    var _this = this;

    var data = {
      type: "1",
      constellation_id: this.constellationId
    };

    _system2["default"].fetch({
      url: "http://cmapi.truegrowth.cn/constellation/fortune/quickapp/1.0",
      method: "POST",
      responseType: "json",
      data: data,
      success: function success(res) {
        if (res.data.data.code == 0) {
          var content = JSON.parse(res.data.data.info.content);
          _this.content = content.desc[0];
          _this.starNum = content.index.star[0];
        }
      }
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
      url: "http://cmapi.truegrowth.cn/news/list/quickapp/1.0",
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
    var date = new Date();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    this.today = m + "." + d;
    this.loadAndRender();
    this.getStarEve();
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

/***/ "d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page":
/*!****************************************************!*\
  !*** d:/学习记录文件/Test/src/Home/index.ux?uxType=page ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page&")
var $app_style$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=d:/学习记录文件/Test&plugins[]=c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:\\学习记录文件\\Test\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\学习记录文件\\Test&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:\\学习记录文件\\Test\\src\\Home\\index.ux?uxType=page")

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