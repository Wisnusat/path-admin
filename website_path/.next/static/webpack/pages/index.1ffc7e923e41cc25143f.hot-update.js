webpackHotUpdate_N_E("pages/index",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: base_url, product_image_url, team_image_url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base_url", function() { return base_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product_image_url", function() { return product_image_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "team_image_url", function() { return team_image_url; });
var base_url = "http://localhost:5000/";
var product_image_url = "http://localhost:5000/product_image/";
var team_image_url = "http://localhost:5000/team_image/";


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/sections/team-section.js":
/*!**************************************!*\
  !*** ./src/sections/team-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TeamSection; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_team_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/team-card */ "./src/components/team-card.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/team/member-1.png */ "./src/assets/team/member-1.png");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/team/member-2.png */ "./src/assets/team/member-2.png");
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/team/member-3.png */ "./src/assets/team/member-3.png");
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/team/member-4.png */ "./src/assets/team/member-4.png");
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/team/member-5.png */ "./src/assets/team/member-5.png");
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/team/member-6.png */ "./src/assets/team/member-6.png");
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_18__);







var _jsxFileName = "D:\\path-admin\\website_path\\src\\sections\\team-section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_18___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @jsxRuntime classic */

/** @jsx jsx */












 // const data = [
//   {
//     id: 1,
//     imgSrc: Member1,
//     altText: 'Barlian Henryranu',
//     title: 'Barlian Henryranu',
//     designation: 'S3 Bio-informatics & Sytem designer',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 2,
//     imgSrc: Member2,
//     altText: 'Edita Rosana ',
//     title: 'Edita Rosana ',
//     designation: 'S3 Bio-informatics & Sytem designer',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 3,
//     imgSrc: Member3,
//     altText: 'Caesaredi Rama',
//     title: 'Caesaredi Rama',
//     designation: '#',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 4,
//     imgSrc: Member4,
//     altText: 'dr. Mustika Dian',
//     title: 'dr. Mustika Dian',
//     designation: '#',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 5,
//     imgSrc: Member2,
//     altText: 'Intan Purbowati',
//     title: 'Intan Purbowati',
//     designation: '#',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       {
//         id: 3,
//         name: 'instagram',
//         path: '#',
//         icon: <FaInstagram />,
//       },
//     ],
//   },
//   {
//     id: 6,
//     imgSrc: Member6,
//     altText: 'Anonym',
//     title: 'Anonym',
//     designation: 'Web Designer',
//     socialProfile: [
//       {
//         id: 1,
//         name: 'facebook',
//         path: '#',
//         icon: <FaFacebookF />,
//       },
//       {
//         id: 2,
//         name: 'twitter',
//         path: '#',
//         icon: <FaTwitter />,
//       },
//       // {
//       //   id: 3,
//       //   name: 'instagram',
//       //   path: '#',
//       //   icon: <FaInstagram />,
//       // },
//     ],
//   },
// ];

var TeamSection = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TeamSection, _React$Component);

  var _super = _createSuper(TeamSection);

  function TeamSection() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TeamSection);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "getTeam", function () {
      var url = _config__WEBPACK_IMPORTED_MODULE_11__["base_url"] + "/team";
      axios.get(url, _this.headerConfig()).then(function (response) {
        _this.setState({
          products: response.data
        });
      })["catch"](function (error) {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message); // this.props.history.push("/login")
          }
        } else {
          console.log(error);
        }
      });
    });

    _this.state = {
      team: [],
      action: "",
      title: "",
      imgSrc: "",
      designation: "",
      id_team: "",
      uploadFile: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TeamSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 5
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 7
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        slogan: "our team",
        title: "The most qualified and talented individuals",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 9
        }
      }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        sx: styles.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 9
        }
      }, this.state.team.map(function (item) {
        return Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(components_team_card__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: "team--key".concat(item.id_team),
          src: _config__WEBPACK_IMPORTED_MODULE_11__["team_image_url"] + "/" + item.imgSrc // altText={item.altText}
          ,
          title: item.nama,
          designation: item.jabatan // social={item.socialProfile}
          ,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }
        });
      }))));
    }
  }]);

  return TeamSection;
}(react__WEBPACK_IMPORTED_MODULE_18___default.a.Component);


var styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvdGVhbS1zZWN0aW9uLmpzIl0sIm5hbWVzIjpbImJhc2VfdXJsIiwicHJvZHVjdF9pbWFnZV91cmwiLCJ0ZWFtX2ltYWdlX3VybCIsIlRlYW1TZWN0aW9uIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJoZWFkZXJDb25maWciLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsInByb2R1Y3RzIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwidGVhbSIsImFjdGlvbiIsInRpdGxlIiwiaW1nU3JjIiwiZGVzaWduYXRpb24iLCJpZF90ZWFtIiwidXBsb2FkRmlsZSIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpdGVtIiwibmFtYSIsImphYmF0YW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIm10IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1BLFFBQVEsR0FBRyx3QkFBakI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxzQ0FBMUI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsbUNBQXZCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q3hCLHFEQUFDLDREQUFEO0FBQ0UsYUFBRyxxQkFBY0EsSUFBSSxDQUFDTCxPQUFuQixDQURMO0FBRUUsYUFBRyxFQUFHeEIsdURBQWMsR0FBRyxHQUFqQixHQUFzQjZCLElBQUksQ0FBQ1AsTUFGbkMsQ0FHRTtBQUhGO0FBSUUsZUFBSyxFQUFFTyxJQUFJLENBQUNDLElBSmQ7QUFLRSxxQkFBVyxFQUFFRCxJQUFJLENBQUNFLE9BTHBCLENBTUU7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRHdCO0FBQUEsT0FBeEIsQ0FESixDQU5GLENBREYsQ0FERjtBQXVCRDs7OztFQXhEd0NDLDZDQUFLLENBQUNDLFM7OztBQTJEL0MsSUFBTVAsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKTyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsQ0FBQyxDQUFyQixDQURBO0FBRUpDLFdBQU8sRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLFdBQWxDLENBRkw7QUFHSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7QUFIakI7QUFETyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFmZmM3ZTkyM2U0MWNjMjUxNDNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBiYXNlX3VybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL1wiXHJcbmNvbnN0IHByb2R1Y3RfaW1hZ2VfdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJvZHVjdF9pbWFnZS9cIlxyXG5jb25zdCB0ZWFtX2ltYWdlX3VybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RlYW1faW1hZ2UvXCJcclxuZXhwb3J0IHtcclxuICAgIGJhc2VfdXJsLFxyXG4gICAgcHJvZHVjdF9pbWFnZV91cmwsXHJcbiAgICB0ZWFtX2ltYWdlX3VybFxyXG59XHJcbiIsIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBUZWFtQ2FyZCBmcm9tICdjb21wb25lbnRzL3RlYW0tY2FyZCc7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBiYXNlX3VybCwgdGVhbV9pbWFnZV91cmwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgTWVtYmVyMSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMi5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMyBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMy5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNCBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNC5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNi5wbmcnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gY29uc3QgZGF0YSA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogMSxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMSxcclxuLy8gICAgIGFsdFRleHQ6ICdCYXJsaWFuIEhlbnJ5cmFudScsXHJcbi8vICAgICB0aXRsZTogJ0JhcmxpYW4gSGVucnlyYW51JyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnUzMgQmlvLWluZm9ybWF0aWNzICYgU3l0ZW0gZGVzaWduZXInLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMixcclxuLy8gICAgIGFsdFRleHQ6ICdFZGl0YSBSb3NhbmEgJyxcclxuLy8gICAgIHRpdGxlOiAnRWRpdGEgUm9zYW5hICcsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJ1MzIEJpby1pbmZvcm1hdGljcyAmIFN5dGVtIGRlc2lnbmVyJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDMsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjMsXHJcbi8vICAgICBhbHRUZXh0OiAnQ2Flc2FyZWRpIFJhbWEnLFxyXG4vLyAgICAgdGl0bGU6ICdDYWVzYXJlZGkgUmFtYScsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJyMnLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNCxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyNCxcclxuLy8gICAgIGFsdFRleHQ6ICdkci4gTXVzdGlrYSBEaWFuJyxcclxuLy8gICAgIHRpdGxlOiAnZHIuIE11c3Rpa2EgRGlhbicsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJyMnLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNSxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMixcclxuLy8gICAgIGFsdFRleHQ6ICdJbnRhbiBQdXJib3dhdGknLFxyXG4vLyAgICAgdGl0bGU6ICdJbnRhbiBQdXJib3dhdGknLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICcjJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDYsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjYsXHJcbi8vICAgICBhbHRUZXh0OiAnQW5vbnltJyxcclxuLy8gICAgIHRpdGxlOiAnQW5vbnltJyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnV2ViIERlc2lnbmVyJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgLy8ge1xyXG4vLyAgICAgICAvLyAgIGlkOiAzLFxyXG4vLyAgICAgICAvLyAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAvLyAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgLy8gICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIC8vIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbmNvbnN0cnVjdG9yKCl7XHJcbiAgc3VwZXIoKVxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB0ZWFtOiBbXSxcclxuICAgIGFjdGlvbjogXCJcIixcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgaW1nU3JjOiBcIlwiLFxyXG4gICAgZGVzaWduYXRpb246IFwiXCIsXHJcbiAgICBpZF90ZWFtOiBcIlwiLFxyXG4gICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICB9XHJcbn1cclxuXHJcbmdldFRlYW0gPSAoKSA9PiB7XHJcbiAgbGV0IHVybCA9IGJhc2VfdXJsICsgXCIvdGVhbVwiXHJcbiAgYXhpb3MuZ2V0KHVybCwgdGhpcy5oZWFkZXJDb25maWcoKSlcclxuICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvZHVjdHM6IHJlc3BvbnNlLmRhdGF9KVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuIHJlbmRlciAoKXtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkZXJcclxuICAgICAgICAgIHNsb2dhbj1cIm91ciB0ZWFtXCJcclxuICAgICAgICAgIHRpdGxlPVwiVGhlIG1vc3QgcXVhbGlmaWVkIGFuZCB0YWxlbnRlZCBpbmRpdmlkdWFsc1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS50ZWFtLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgPFRlYW1DYXJkXHJcbiAgICAgICAgICAgICAga2V5PXtgdGVhbS0ta2V5JHtpdGVtLmlkX3RlYW19YH1cclxuICAgICAgICAgICAgICBzcmM9eyB0ZWFtX2ltYWdlX3VybCArIFwiL1wiKyBpdGVtLmltZ1NyY31cclxuICAgICAgICAgICAgICAvLyBhbHRUZXh0PXtpdGVtLmFsdFRleHR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0ubmFtYX1cclxuICAgICAgICAgICAgICBkZXNpZ25hdGlvbj17aXRlbS5qYWJhdGFufVxyXG4gICAgICAgICAgICAgIC8vIHNvY2lhbD17aXRlbS5zb2NpYWxQcm9maWxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBncmlkOiB7XHJcbiAgICBtdDogWzAsIG51bGwsIC02LCBudWxsLCAtNF0sXHJcbiAgICBncmlkR2FwOiBbJzM1cHggMHB4JywgbnVsbCwgMCwgbnVsbCwgbnVsbCwgJzMwcHggMzVweCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==