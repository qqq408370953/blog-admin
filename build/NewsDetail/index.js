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
/******/ 	return __webpack_require__(__webpack_require__.s = "d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:/学习记录文件/Test/src/NewsDetail/index.ux?uxType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".newsDetail-page": {
    "width": "750px",
    "position": "relative"
  },
  ".bottomShare": {
    "width": "750px",
    "height": "128px",
    "position": "fixed",
    "bottom": "0px",
    "backgroundColor": "#FFFFFF",
    "borderTop": "2px solid #F7F5F5"
  },
  ".contaniner-avator": {
    "width": "64px",
    "height": "64px",
    "borderRadius": "32px",
    "position": "absolute",
    "top": "32px",
    "left": "32px"
  },
  ".contaniner-title": {
    "width": "220px",
    "height": "40px",
    "position": "absolute",
    "top": "24px",
    "left": "112px",
    "fontSize": "26px",
    "fontFamily": "PingFangSC-Medium, PingFang SC",
    "lineHeight": "40px"
  },
  ".container-times": {
    "width": "130px",
    "height": "40px",
    "position": "absolute",
    "top": "64px",
    "left": "112px",
    "fontSize": "26px",
    "color": "rgba(23,35,61,0.55)"
  },
  ".shareIcon": {
    "width": "144px",
    "height": "72px",
    "position": "absolute",
    "top": "28px",
    "right": "32px"
  },
  ".bottomShare-dialog": {
    "width": "750px",
    "position": "fixed",
    "height": "290px",
    "bottom": "0px",
    "backgroundColor": "#F7F5F5",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#FF0000",
    "borderRightColor": "#FF0000",
    "borderBottomColor": "#FF0000",
    "borderLeftColor": "#FF0000"
  }
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:/学习记录文件/Test/src/NewsDetail/index.ux?uxType=page& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "newsDetail-page"
  ],
  "children": [
    {
      "type": "web",
      "attr": {
        "id": "web",
        "src": function () {return this.webViewSrc}
      },
      "id": "web"
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bottomShare"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.avatar}
          },
          "classList": [
            "contaniner-avator"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.nickname}
          },
          "classList": [
            "contaniner-title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return '' + (this.viewed) + '次浏览'}
          },
          "classList": [
            "container-times"
          ]
        },
        {
          "type": "image",
          "attr": {
            "src": "/Common/assets/btn_share_linear_nor.png"
          },
          "classList": [
            "shareIcon"
          ],
          "events": {
            "click": "Show"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:\\学习记录文件\\Test\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\学习记录文件\\Test&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:/学习记录文件/Test/node_modules/babel-loader/lib?cwd=d:/学习记录文件/Test&plugins[]=c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:/学习记录文件/Test/src/NewsDetail/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.webview"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.share"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  "private": {
    newsId: "",
    webViewSrc: "",
    type: "1",
    nickname: "星星达人闹闹女巫",
    viewed: "1",
    avatar: "../Common/assets/icon_chart_48_nor.png",
    currentDire: 'bottom',
    popupShow: false
  },
  goback: function goback() {
    router.back();
  },
  Show: function Show() {
    this.popupShow = true;
  },
  getNewsId: function getNewsId() {
    var _this = this;

    _system4["default"].get({
      key: 'newsData',
      success: function success(data) {
        if (data) {
          var newsData = JSON.parse(data);
          _this.newsId = newsData.newsId;
          _this.nickname = newsData.nickname;
          _this.viewed = newsData.viewed;
          _this.avatar = newsData.avatar;
          _this.title = newsData.title;
          _this.webViewSrc = "http://cm.truegrowth.cn/constellation/news/" + _this.newsId + ".html?type=" + _this.type;
        } else {}
      },
      fail: function fail(data, code) {}
    });
  },
  onInit: function onInit() {
    this.getNewsId();
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

/***/ "d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page":
/*!**********************************************************!*\
  !*** d:/学习记录文件/Test/src/NewsDetail/index.ux?uxType=page ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page& */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page&")
var $app_style$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?cwd=d:/学习记录文件/Test&plugins[]=c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/babel-plugin-jsx.js&comments=false!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!c:/Program Files (x86)/Quickapp/resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!d:\\学习记录文件\\Test\\node_modules\\babel-loader\\lib\\index.js?cwd=d:\\学习记录文件\\Test&plugins[]=c:\\Program Files (x86)\\Quickapp\\resources\\app\\extensions\\hap-debugger\\node_modules\\hap-toolkit\\packager\\lib\\dsl\\ux\\loader\\babel-plugin-jsx.js&comments=false!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./resources/app/extensions/hap-debugger/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!d:\\学习记录文件\\Test\\src\\NewsDetail\\index.ux?uxType=page")

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