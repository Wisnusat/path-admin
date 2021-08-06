webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/team/member-1.png */ "./src/assets/team/member-1.png");
/* harmony import */ var assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/team/member-2.png */ "./src/assets/team/member-2.png");
/* harmony import */ var assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/team/member-3.png */ "./src/assets/team/member-3.png");
/* harmony import */ var assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/team/member-4.png */ "./src/assets/team/member-4.png");
/* harmony import */ var assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/team/member-5.png */ "./src/assets/team/member-5.png");
/* harmony import */ var assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_5_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/team/member-6.png */ "./src/assets/team/member-6.png");
/* harmony import */ var assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);







var _jsxFileName = "D:\\path-admin\\website_path\\src\\sections\\team-section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_19___default.a.createElement;

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
      var url = "http://localhost:5000/team";
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(url).then(function (response) {
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
      nama: "",
      imgSrc: "",
      jabatan: "",
      id_team: "",
      uploadFile: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TeamSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getTeam();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 5
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 7
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        slogan: "our team",
        title: "The most qualified and talented individuals",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 9
        }
      }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        sx: styles.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
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
            lineNumber: 231,
            columnNumber: 13
          }
        });
      }))));
    }
  }]);

  return TeamSection;
}(react__WEBPACK_IMPORTED_MODULE_19___default.a.Component);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3RlYW0tc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJUZWFtU2VjdGlvbiIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJwcm9kdWN0cyIsImRhdGEiLCJlcnJvciIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInRlYW0iLCJhY3Rpb24iLCJuYW1hIiwiaW1nU3JjIiwiamFiYXRhbiIsImlkX3RlYW0iLCJ1cGxvYWRGaWxlIiwiZ2V0VGVhbSIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpdGVtIiwidGVhbV9pbWFnZV91cmwiLCJSZWFjdCIsIkNvbXBvbmVudCIsIm10IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QU5GLENBREYsQ0FERjtBQXVCRDs7OztFQTVEd0NTLDZDQUFLLENBQUNDLFM7OztBQStEL0MsSUFBTU4sTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKTSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQUMsQ0FBWCxFQUFjLElBQWQsRUFBb0IsQ0FBQyxDQUFyQixDQURBO0FBRUpDLFdBQU8sRUFBRSxDQUFDLFVBQUQsRUFBYSxJQUFiLEVBQW1CLENBQW5CLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLFdBQWxDLENBRkw7QUFHSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7QUFIakI7QUFETyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY4MmU4YjNlMjA1ODBiNDgyYmNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgVGVhbUNhcmQgZnJvbSAnY29tcG9uZW50cy90ZWFtLWNhcmQnO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiwgRmFUd2l0dGVyLCBGYUluc3RhZ3JhbSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgYmFzZV91cmwsIHRlYW1faW1hZ2VfdXJsIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IE1lbWJlcjEgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTEucG5nJztcclxuaW1wb3J0IE1lbWJlcjIgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTIucG5nJztcclxuaW1wb3J0IE1lbWJlcjMgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTMucG5nJztcclxuaW1wb3J0IE1lbWJlcjQgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTQucG5nJztcclxuaW1wb3J0IE1lbWJlcjUgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTUucG5nJztcclxuaW1wb3J0IE1lbWJlcjYgZnJvbSAnYXNzZXRzL3RlYW0vbWVtYmVyLTYucG5nJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGNvbnN0IGRhdGEgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjEsXHJcbi8vICAgICBhbHRUZXh0OiAnQmFybGlhbiBIZW5yeXJhbnUnLFxyXG4vLyAgICAgdGl0bGU6ICdCYXJsaWFuIEhlbnJ5cmFudScsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJ1MzIEJpby1pbmZvcm1hdGljcyAmIFN5dGVtIGRlc2lnbmVyJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDIsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjIsXHJcbi8vICAgICBhbHRUZXh0OiAnRWRpdGEgUm9zYW5hICcsXHJcbi8vICAgICB0aXRsZTogJ0VkaXRhIFJvc2FuYSAnLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICdTMyBCaW8taW5mb3JtYXRpY3MgJiBTeXRlbSBkZXNpZ25lcicsXHJcbi8vICAgICBzb2NpYWxQcm9maWxlOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAzLFxyXG4vLyAgICAgaW1nU3JjOiBNZW1iZXIzLFxyXG4vLyAgICAgYWx0VGV4dDogJ0NhZXNhcmVkaSBSYW1hJyxcclxuLy8gICAgIHRpdGxlOiAnQ2Flc2FyZWRpIFJhbWEnLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICcjJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDQsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjQsXHJcbi8vICAgICBhbHRUZXh0OiAnZHIuIE11c3Rpa2EgRGlhbicsXHJcbi8vICAgICB0aXRsZTogJ2RyLiBNdXN0aWthIERpYW4nLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICcjJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDUsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjIsXHJcbi8vICAgICBhbHRUZXh0OiAnSW50YW4gUHVyYm93YXRpJyxcclxuLy8gICAgIHRpdGxlOiAnSW50YW4gUHVyYm93YXRpJyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnIycsXHJcbi8vICAgICBzb2NpYWxQcm9maWxlOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiA2LFxyXG4vLyAgICAgaW1nU3JjOiBNZW1iZXI2LFxyXG4vLyAgICAgYWx0VGV4dDogJ0Fub255bScsXHJcbi8vICAgICB0aXRsZTogJ0Fub255bScsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJ1dlYiBEZXNpZ25lcicsXHJcbi8vICAgICBzb2NpYWxQcm9maWxlOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIC8vIHtcclxuLy8gICAgICAgLy8gICBpZDogMyxcclxuLy8gICAgICAgLy8gICBuYW1lOiAnaW5zdGFncmFtJyxcclxuLy8gICAgICAgLy8gICBwYXRoOiAnIycsXHJcbi8vICAgICAgIC8vICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4vLyAgICAgICAvLyB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhbVNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5jb25zdHJ1Y3Rvcigpe1xyXG4gIHN1cGVyKClcclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAgdGVhbTogW10sXHJcbiAgICBhY3Rpb246IFwiXCIsXHJcbiAgICBuYW1hOiBcIlwiLFxyXG4gICAgaW1nU3JjOiBcIlwiLFxyXG4gICAgamFiYXRhbjogXCJcIixcclxuICAgIGlkX3RlYW06IFwiXCIsXHJcbiAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gIH1cclxufVxyXG5cclxuZ2V0VGVhbSA9ICgpID0+IHtcclxuICBsZXQgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdGVhbVwiXHJcbiAgYXhpb3MuZ2V0KHVybClcclxuICAudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvZHVjdHM6IHJlc3BvbnNlLmRhdGF9KVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29tcG9uZW50RGlkTW91bnQoKXtcclxuICB0aGlzLmdldFRlYW0oKVxyXG59XHJcblxyXG4gcmVuZGVyICgpe1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwib3VyIHRlYW1cIlxyXG4gICAgICAgICAgdGl0bGU9XCJUaGUgbW9zdCBxdWFsaWZpZWQgYW5kIHRhbGVudGVkIGluZGl2aWR1YWxzXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgeyB0aGlzLnN0YXRlLnRlYW0ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8VGVhbUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2B0ZWFtLS1rZXkke2l0ZW0uaWRfdGVhbX1gfVxyXG4gICAgICAgICAgICAgIHNyYz17IHRlYW1faW1hZ2VfdXJsICsgXCIvXCIrIGl0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIC8vIGFsdFRleHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1hfVxyXG4gICAgICAgICAgICAgIGRlc2lnbmF0aW9uPXtpdGVtLmphYmF0YW59XHJcbiAgICAgICAgICAgICAgLy8gc29jaWFsPXtpdGVtLnNvY2lhbFByb2ZpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIG10OiBbMCwgbnVsbCwgLTYsIG51bGwsIC00XSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwcHgnLCBudWxsLCAwLCBudWxsLCBudWxsLCAnMzBweCAzNXB4J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9