webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    [
      _c(
        "div",
        { staticClass: "container head" },
        [
          _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
            _vm._v("La Flowers")
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "search-bar" },
            [_c("search"), _vm._v(" "), _vm._m(1)],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "magazine-buttons" },
            [
              _c(
                "router-link",
                { staticClass: "btn-flat", attrs: { to: "/login" } },
                [
                  _c("i", { staticClass: "material-icons" }, [
                    _vm._v("account_box")
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(2)
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("mynav")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "phone", attrs: { href: "tel:88122344455" } },
      [
        _vm._v("8(812) 234-44-55\r\n                "),
        _c("span", [_vm._v("Работаем с 8:00 до 23:00")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _vm._v("ДОСТАВКА\r\n                    "),
      _c("i", { staticClass: "material-icons" }, [_vm._v("remove")]),
      _vm._v("ОПЛАТА\r\n                    "),
      _c("i", { staticClass: "material-icons" }, [_vm._v("remove")]),
      _vm._v("КОНТАКТЫ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "btn-flat cart" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("shopping_cart")]),
      _vm._v(" "),
      _c("span", [_vm._v("1")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-478ce54b", module.exports)
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(111)
/* template */
var __vue_template__ = __webpack_require__(112)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\footer\\vfooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-90eba132", Component.options)
  } else {
    hotAPI.reload("data-v-90eba132", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "page-footer" }, [
      _c("div", { staticClass: "container" }, [
        _c("h2", [_vm._v("Доставка и оплата")]),
        _vm._v(" "),
        _c("div", { staticClass: "topay" }, [
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "cash" }, [_vm._v("Наличными")]),
            _vm._v(" "),
            _c("p", [_vm._v("Оплата наличными курьеру после 30% предоплаты")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Выезд менеджера для приема оплаты\r\n                    "
              ),
              _c("br"),
              _vm._v("(необходимо согласовать с оператором)")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "cards" }, [_vm._v("Банковские карты")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("Visa")]),
              _vm._v(" "),
              _c("li", [_vm._v("Mastercard")]),
              _vm._v(" "),
              _c("li", [_vm._v("На расчётный счет(через банковские системы)")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "cards" }, [_vm._v("Электронные деньги")]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [_vm._v("Оплата со счёта WebMoney")]),
              _vm._v(" "),
              _c("li", [_vm._v("Оплата через Яндекс.Деньги")]),
              _vm._v(" "),
              _c("li", [_vm._v("Оплата Qiwi")]),
              _vm._v(" "),
              _c("li", [_vm._v("Оплата через PayPal")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "block" }, [
            _c("h3", { staticClass: "call" }, [
              _c("a", { attrs: { href: "tel:88122344455" } }, [
                _vm._v("8(812) 234-44-55")
              ])
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("Работаем с 8:00 до 23:00")]),
            _vm._v(" "),
            _c("ul", { staticClass: "social" }, [
              _c("li", [_c("a", { staticClass: "img-link vk" })]),
              _vm._v(" "),
              _c("li", [_c("a", { staticClass: "img-link inst" })])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer-copyright" }, [
        _c("div", { staticClass: "container" }, [
          _vm._v("\r\n            © 2014 Copyright Text\r\n            "),
          _c(
            "a",
            {
              staticClass: "grey-text text-lighten-4 right",
              attrs: { href: "#!" }
            },
            [_vm._v("More Links")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-90eba132", module.exports)
  }
}

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("vheader"),
      _vm._v(" "),
      _c("main", [_c("router-view")], 1),
      _vm._v(" "),
      _c("vfooter"),
      _vm._v(" "),
      _c("vue-progress-bar")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-08cc93eb", module.exports)
  }
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(88)
/* template */
var __vue_template__ = __webpack_require__(113)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\magazine.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08cc93eb", Component.options)
  } else {
    hotAPI.reload("data-v-08cc93eb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 60:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(62)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_vheader_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_vheader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_vheader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_vfooter_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_vfooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__footer_vfooter_vue__);
var _mounted$components$m;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = (_mounted$components$m = {
  mounted: function mounted() {
    console.log("App mounted");
  },

  components: {
    vfooter: __WEBPACK_IMPORTED_MODULE_1__footer_vfooter_vue___default.a,
    vheader: __WEBPACK_IMPORTED_MODULE_0__header_vheader_vue___default.a
  }
}, _defineProperty(_mounted$components$m, "mounted", function mounted() {
  //  [App.vue specific] When App.vue is finish loading finish the progress bar
  this.$Progress.finish();
}), _defineProperty(_mounted$components$m, "created", function created() {
  var _this = this;

  //  [App.vue specific] When App.vue is first loaded start the progress bar
  this.$Progress.start();
  //  hook the progress bar to start before we move router-view
  this.$router.beforeEach(function (to, from, next) {
    //  does the page we want to go to have a meta.progress object
    if (to.meta.progress !== undefined) {
      var meta = to.meta.progress;
      // parse meta tags
      _this.$Progress.parseMeta(meta);
    }
    //  start the progress bar
    _this.$Progress.start();
    //  continue to next page
    next();
  });
  //  hook the progress bar to finish after we've finished moving router-view
  this.$router.afterEach(function (to, from) {
    //  finish the progress bar
    _this.$Progress.finish();
  });
}), _mounted$components$m);

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(92)
/* template */
var __vue_template__ = __webpack_require__(109)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-478ce54b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\header\\vheader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-478ce54b", Component.options)
  } else {
    hotAPI.reload("data-v-478ce54b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(61)("2c86b80a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-478ce54b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vheader.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-478ce54b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vheader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.btn-flat[data-v-478ce54b]:focus {\r\n  background-color: rgba(0, 0, 0, 0);\n}\n.router-link-exact-active[data-v-478ce54b] {\r\n  background-color: #ffaf60 !important;\r\n  color: #fff !important;\n}\na.logo[data-v-478ce54b] {\r\n  color: black !important;\r\n  background-color: #fff !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_materialize_css__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_materialize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_materialize_css__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var search = function search() {
  return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 93));
};
var mynav = function mynav() {
  return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, 96));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    search: search,
    mynav: mynav
  }
});

/***/ })

});