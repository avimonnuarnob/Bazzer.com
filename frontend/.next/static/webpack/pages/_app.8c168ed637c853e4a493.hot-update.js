webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var G_Avimonnu_arnob_Advanced_React_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var G_Avimonnu_arnob_Advanced_React_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");




var _jsxFileName = "G:\\Avimonnu_arnob\\Advanced-React\\frontend\\components\\RemoveFromCart.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(G_Avimonnu_arnob_Advanced_React_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {\n    deleteCartItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var BigButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
_c = BigButton;
var REMOVE_FROM_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var RemoveFromCart = function RemoveFromCart(_ref) {
  _s();

  var id = _ref.id;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id: id
    }
  }),
      _useMutation2 = Object(G_Avimonnu_arnob_Advanced_React_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      removeFromCart = _useMutation2[0],
      loading = _useMutation2[1].loading;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(BigButton, {
    onClick: removeFromCart,
    disabled: loading,
    type: "button",
    title: "remove",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(RemoveFromCart, "1gobEhNNb1zJTO706ogXU/cmTeU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"]];
});

_c2 = RemoveFromCart;
/* harmony default export */ __webpack_exports__["default"] = (RemoveFromCart);

var _c, _c2;

$RefreshReg$(_c, "BigButton");
$RefreshReg$(_c2, "RemoveFromCart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyJdLCJuYW1lcyI6WyJCaWdCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OIiwiZ3FsIiwiUmVtb3ZlRnJvbUNhcnQiLCJpZCIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVtb3ZlRnJvbUNhcnQiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSx5RkFBZjtLQUFNRixTO0FBVU4sSUFBTUcseUJBQXlCLEdBQUdDLGtEQUFILG1CQUEvQjs7QUFRQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQVk7QUFBQTs7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7O0FBQUEscUJBQ0tDLGtFQUFXLENBQUNKLHlCQUFELEVBQTRCO0FBQzNFSyxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGO0FBRGdFLEdBQTVCLENBRGhCO0FBQUE7QUFBQSxNQUMxQkcsY0FEMEI7QUFBQSxNQUNSQyxPQURRLG9CQUNSQSxPQURROztBQUlqQyxzQkFDRSxxRUFBQyxTQUFEO0FBQ0UsV0FBTyxFQUFFRCxjQURYO0FBRUUsWUFBUSxFQUFFQyxPQUZaO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsUUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FkRDs7R0FBTUwsYztVQUNrQ0UsMEQ7OztNQURsQ0YsYztBQWdCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YzE2OGVkNjM3Yzg1M2U0YTQ5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmNvbnN0IEJpZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVDYXJ0SXRlbShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUmVtb3ZlRnJvbUNhcnQgPSAoeyBpZCB9KSA9PiB7XHJcbiAgY29uc3QgW3JlbW92ZUZyb21DYXJ0LCB7IGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJpZ0J1dHRvblxyXG4gICAgICBvbkNsaWNrPXtyZW1vdmVGcm9tQ2FydH1cclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICB0aXRsZT1cInJlbW92ZVwiXHJcbiAgICA+XHJcbiAgICAgICZ0aW1lcztcclxuICAgIDwvQmlnQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVGcm9tQ2FydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==