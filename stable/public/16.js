webpackJsonp([16],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container nav-cont" }, [
    _c("nav", [
      _c("div", { staticClass: "nav-wrapper" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "hide-on-med-and-down" },
          _vm._l(_vm.Categories, function(category) {
            return _c("navlink", {
              key: category.id,
              attrs: { category: category }
            })
          })
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "side-nav", attrs: { id: "mobile-demo" } },
      [_c("mobilenavlink")],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "sidenav-trigger button-collapse",
        attrs: { href: "#", "data-activates": "mobile-demo" }
      },
      [_c("i", { staticClass: "material-icons" }, [_vm._v("menu")])]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d4230bf", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(60)
/* script */
var __vue_script__ = __webpack_require__(97)
/* template */
var __vue_template__ = __webpack_require__(108)
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
Component.options.__file = "resources\\assets\\js\\components\\header\\mynav.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d4230bf", Component.options)
  } else {
    hotAPI.reload("data-v-1d4230bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
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

var navlink = function navlink() {
  return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, 98));
};
var mobilenavlink = function mobilenavlink() {
  return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, 103));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      Categories: []
    };
  },
  components: {
    navlink: navlink,
    mobilenavlink: mobilenavlink
  },
  beforeCreate: function beforeCreate() {
    var init = this;
    axios.get("/api/catalog").then(function (resp) {
      init.Categories = resp.data;
    });
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".button-collapse").sideNav();
  }
});

/***/ })

});