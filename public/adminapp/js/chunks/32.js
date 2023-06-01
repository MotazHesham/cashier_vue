(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      query: {
        period: {
          year: null,
          month: null
        }
      }
    };
  },
  created: function created() {
    this.query.period = {
      year: moment().year(),
      month: moment().month() + 1
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    query: {
      handler: function handler(query) {
        this.setQuery(query);
        this.fetchIndexData();
      },
      deep: true
    }
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ExpenseReports', ['expensesSummary', 'incomesSummary', 'expensesTotal', 'incomesTotal', 'profit'])), {}, {
    years: function years() {
      return _.range(moment().year(), 1900);
    },
    months: function months() {
      return moment.months().map(function (item, index) {
        return {
          value: index + 1,
          label: item
        };
      });
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ExpenseReports', ['fetchIndexData', 'resetState', 'setQuery']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=template&id=2c5a32c5&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=template&id=2c5a32c5& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c(
            "div",
            { staticClass: "card-header card-header-primary card-header-icon" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("h4", { staticClass: "card-title" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("cruds.expenseReport.reports.incomeReport")) +
                    "\n          "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row pt-3" }, [
              _c("div", { staticClass: "col-md-2" }, [
                _c(
                  "div",
                  { staticClass: "form-group bmd-form-group has-items" },
                  [
                    _c("label", { staticClass: "bmd-label-floating" }, [
                      _vm._v(
                        "\n                  " +
                          _vm._s(_vm.$t("global.year")) +
                          "\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: { options: _vm.years, clearable: false },
                      model: {
                        value: _vm.query.period.year,
                        callback: function ($$v) {
                          _vm.$set(_vm.query.period, "year", $$v)
                        },
                        expression: "query.period.year",
                      },
                    }),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c(
                  "div",
                  { staticClass: "form-group bmd-form-group has-items" },
                  [
                    _c("label", { staticClass: "bmd-label-floating" }, [
                      _vm._v(
                        "\n                  " +
                          _vm._s(_vm.$t("global.month")) +
                          "\n                "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      attrs: {
                        options: _vm.months,
                        clearable: false,
                        reduce: function (entry) {
                          return entry.value
                        },
                      },
                      model: {
                        value: _vm.query.period.month,
                        callback: function ($$v) {
                          _vm.$set(_vm.query.period, "month", $$v)
                        },
                        expression: "query.period.month",
                      },
                    }),
                  ],
                  1
                ),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-striped table-bordered table-hover",
                  },
                  [
                    _c("tbody", [
                      _c("tr", [
                        _c("th", [
                          _vm._v(
                            "\n                      " +
                              _vm._s(
                                _vm.$t("cruds.expenseReport.reports.income")
                              ) +
                              "\n                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v(_vm._s(_vm.incomesTotal)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [
                          _vm._v(
                            "\n                      " +
                              _vm._s(
                                _vm.$t("cruds.expenseReport.reports.expense")
                              ) +
                              "\n                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v(_vm._s(_vm.expensesTotal)),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [
                          _vm._v(
                            "\n                      " +
                              _vm._s(
                                _vm.$t("cruds.expenseReport.reports.profit")
                              ) +
                              "\n                    "
                          ),
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "text-right" }, [
                          _vm._v(_vm._s(_vm.profit)),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-striped table-bordered table-hover",
                  },
                  [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(
                                  _vm.$t(
                                    "cruds.expenseReport.reports.incomeByCategory"
                                  )
                                ) +
                                "\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _c("strong", [_vm._v(_vm._s(_vm.incomesTotal))]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.incomesSummary, function (entry) {
                          return _c("tr", { key: entry.name }, [
                            _c("th", [
                              _vm._v(
                                "\n                      " +
                                  _vm._s(entry.name) +
                                  "\n                    "
                              ),
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(entry.amount.toFixed(2))),
                            ]),
                          ])
                        }),
                      ],
                      2
                    ),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-striped table-bordered table-hover",
                  },
                  [
                    _c(
                      "tbody",
                      [
                        _c("tr", [
                          _c("th", [
                            _vm._v(
                              "\n                      " +
                                _vm._s(
                                  _vm.$t(
                                    "cruds.expenseReport.reports.expenseByCategory"
                                  )
                                ) +
                                "\n                    "
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _c("strong", [_vm._v(_vm._s(_vm.expensesTotal))]),
                          ]),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.incomesSummary, function (entry) {
                          return _c("tr", { key: entry.name }, [
                            _c("th", [_vm._v(_vm._s(entry.name))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right" }, [
                              _vm._v(_vm._s(entry.amount.toFixed(2))),
                            ]),
                          ])
                        }),
                      ],
                      2
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-icon" }, [
      _c("i", { staticClass: "material-icons" }, [_vm._v("assignment")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/adminapp/js/cruds/ExpenseReports/Index.vue":
/*!**************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ExpenseReports/Index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_2c5a32c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=2c5a32c5& */ "./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=template&id=2c5a32c5&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_2c5a32c5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_2c5a32c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/ExpenseReports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=template&id=2c5a32c5&":
/*!*********************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=template&id=2c5a32c5& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2c5a32c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=2c5a32c5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/ExpenseReports/Index.vue?vue&type=template&id=2c5a32c5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2c5a32c5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_2c5a32c5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);