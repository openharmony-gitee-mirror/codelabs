/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\MY\\Hi3516D\\SDK\\version-Daily_Version-20210926_102043-ohos-sdk-LTS\\windows\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\MY\\Hi3516D\\SDK\\version-Daily_Version-20210926_102043-ohos-sdk-LTS\\windows\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=D:\\MY\\Hi3516D\\CodeLab\\20210929\\NewsDemo\\entry\\src\\main\\js\\MainAbility\\app.js!../../../../../../../CodeLab/20210929/NewsDemo/entry/src/main/js/MainAbility/app.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\MY\Hi3516D\SDK\version-Daily_Version-20210926_102043-ohos-sdk-LTS\windows\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\MY\Hi3516D\SDK\version-Daily_Version-20210926_102043-ohos-sdk-LTS\windows\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=D:\MY\Hi3516D\CodeLab\20210929\NewsDemo\entry\src\main\js\MainAbility\app.js!../../../../../../../CodeLab/20210929/NewsDemo/entry/src/main/js/MainAbility/app.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  onCreate: function onCreate() {
    console.info("Application onCreate");
  },
  onDestroy: function onDestroy() {
    console.info("Application onDestroy");
  }
};
exports["default"] = _default;
;
(exports["default"] || module.exports).manifest = __webpack_require__(/*! !!../../../../../../../../SDK/version-Daily_Version-20210926_102043-ohos-sdk-LTS/windows/js/3.0.0.0/build-tools/ace-loader/lib/manifest-plugin.js!../../../../.preview/jsManifest/MainAbility/manifest.json */ "./lib/manifest-plugin.js!../../../../../../../CodeLab/20210929/NewsDemo/entry/.preview/jsManifest/MainAbility/manifest.json");

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}
}
/* generated by ace-loader */


/***/ }),

/***/ "./lib/manifest-plugin.js!../../../../../../../CodeLab/20210929/NewsDemo/entry/.preview/jsManifest/MainAbility/manifest.json":
/*!***********************************************************************************************************************************!*\
  !*** ./lib/manifest-plugin.js!../../../../../../../CodeLab/20210929/NewsDemo/entry/.preview/jsManifest/MainAbility/manifest.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"appID":"com.huawei.newsdemo","appName":"$string:entry_MainAbility","versionName":"1.0.0","versionCode":1000000,"minPlatformVersion":7,"pages":["pages/index/index","pages/second/second"],"deviceType":["phone"],"window":{"autoDesignWidth":false,"designWidth":720}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************************************************************************!*\
  !*** ../../../../../../../CodeLab/20210929/NewsDemo/entry/src/main/js/MainAbility/app.js?entry ***!
  \*************************************************************************************************/
var $app_script$ = __webpack_require__(/*! !!../../../../../../../../SDK/version-Daily_Version-20210926_102043-ohos-sdk-LTS/windows/js/3.0.0.0/build-tools/ace-loader/lib/script.js!../../../../../../../../SDK/version-Daily_Version-20210926_102043-ohos-sdk-LTS/windows/js/3.0.0.0/build-tools/ace-loader/node_modules/babel-loader?presets[]=D:\MY\Hi3516D\SDK\version-Daily_Version-20210926_102043-ohos-sdk-LTS\windows\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\preset-env&plugins[]=D:\MY\Hi3516D\SDK\version-Daily_Version-20210926_102043-ohos-sdk-LTS\windows\js\3.0.0.0\build-tools\ace-loader\node_modules\@babel\plugin-transform-modules-commonjs&comments=false!../../../../../../../../SDK/version-Daily_Version-20210926_102043-ohos-sdk-LTS/windows/js/3.0.0.0/build-tools/ace-loader/lib/resource-reference-script.js!../../../../../../../../SDK/version-Daily_Version-20210926_102043-ohos-sdk-LTS/windows/js/3.0.0.0/build-tools/ace-loader/lib/manifest-loader.js?path=D:\MY\Hi3516D\CodeLab\20210929\NewsDemo\entry\src\main\js\MainAbility\app.js!./app.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=D:\\MY\\Hi3516D\\SDK\\version-Daily_Version-20210926_102043-ohos-sdk-LTS\\windows\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\preset-env&plugins[]=D:\\MY\\Hi3516D\\SDK\\version-Daily_Version-20210926_102043-ohos-sdk-LTS\\windows\\js\\3.0.0.0\\build-tools\\ace-loader\\node_modules\\@babel\\plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!./lib/manifest-loader.js?path=D:\\MY\\Hi3516D\\CodeLab\\20210929\\NewsDemo\\entry\\src\\main\\js\\MainAbility\\app.js!../../../../../../../CodeLab/20210929/NewsDemo/entry/src/main/js/MainAbility/app.js")

      $app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$) {
      
      $app_script$($app_module$, $app_exports$, $app_require$)
      if ($app_exports$.__esModule && $app_exports$.default) {
        $app_module$.exports = $app_exports$.default
      }
      
      })
      $app_bootstrap$('@app-application/app',undefined,undefined)
})();

/******/ })()
;