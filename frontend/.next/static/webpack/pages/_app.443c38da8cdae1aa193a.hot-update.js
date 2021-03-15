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

var update = function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
};

var RemoveFromCart = function RemoveFromCart(_ref) {
  _s();

  var id = _ref.id;

  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id: id
    },
    update: update // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },

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
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyJdLCJuYW1lcyI6WyJCaWdCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiZXZpY3QiLCJpZGVudGlmeSIsImRhdGEiLCJkZWxldGVDYXJ0SXRlbSIsIlJlbW92ZUZyb21DYXJ0IiwiaWQiLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlbW92ZUZyb21DYXJ0IiwibG9hZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEseUZBQWY7S0FBTUYsUztBQVVOLElBQU1HLHlCQUF5QixHQUFHQyxrREFBSCxtQkFBL0I7O0FBUUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ2pDRCxPQUFLLENBQUNFLEtBQU4sQ0FBWUYsS0FBSyxDQUFDRyxRQUFOLENBQWVGLE9BQU8sQ0FBQ0csSUFBUixDQUFhQyxjQUE1QixDQUFaO0FBQ0QsQ0FGRDs7QUFJQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQVk7QUFBQTs7QUFBQSxNQUFUQyxFQUFTLFFBQVRBLEVBQVM7O0FBQUEscUJBQ0tDLGtFQUFXLENBQUNYLHlCQUFELEVBQTRCO0FBQzNFWSxhQUFTLEVBQUU7QUFBRUYsUUFBRSxFQUFGQTtBQUFGLEtBRGdFO0FBRTNFUixVQUFNLEVBQU5BLE1BRjJFLENBRzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFSMkUsR0FBNUIsQ0FEaEI7QUFBQTtBQUFBLE1BQzFCVyxjQUQwQjtBQUFBLE1BQ1JDLE9BRFEsb0JBQ1JBLE9BRFE7O0FBV2pDLHNCQUNFLHFFQUFDLFNBQUQ7QUFDRSxXQUFPLEVBQUVELGNBRFg7QUFFRSxZQUFRLEVBQUVDLE9BRlo7QUFHRSxRQUFJLEVBQUMsUUFIUDtBQUlFLFNBQUssRUFBQyxRQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQXJCRDs7R0FBTUwsYztVQUNrQ0UsMEQ7OztNQURsQ0YsYztBQXVCU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NDNjMzhkYThjZGFlMWFhMTkzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmNvbnN0IEJpZ0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OKCRpZDogSUQhKSB7XHJcbiAgICBkZWxldGVDYXJ0SXRlbShpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXBkYXRlID0gKGNhY2hlLCBwYXlsb2FkKSA9PiB7XHJcbiAgY2FjaGUuZXZpY3QoY2FjaGUuaWRlbnRpZnkocGF5bG9hZC5kYXRhLmRlbGV0ZUNhcnRJdGVtKSk7XHJcbn07XHJcblxyXG5jb25zdCBSZW1vdmVGcm9tQ2FydCA9ICh7IGlkIH0pID0+IHtcclxuICBjb25zdCBbcmVtb3ZlRnJvbUNhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgdXBkYXRlLFxyXG4gICAgLy8gb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XHJcbiAgICAvLyAgIGRlbGV0ZUNhcnRJdGVtOiB7XHJcbiAgICAvLyAgICAgX190eXBlbmFtZTogJ0NhcnRJdGVtJyxcclxuICAgIC8vICAgICBpZCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCaWdCdXR0b25cclxuICAgICAgb25DbGljaz17cmVtb3ZlRnJvbUNhcnR9XHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgdGl0bGU9XCJyZW1vdmVcIlxyXG4gICAgPlxyXG4gICAgICAmdGltZXM7XHJcbiAgICA8L0JpZ0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVtb3ZlRnJvbUNhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=