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
          team: response.data.team
        });
      })["catch"](function (error) {
        console.log(error);
      });
    });

    _this.state = {
      team: [],
      action: "",
      id_team: "",
      nama: "",
      imgSrc: "",
      jabatan: "",
      social_media: "",
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
          lineNumber: 216,
          columnNumber: 5
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 7
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        slogan: "our team",
        title: "The most qualified and talented individuals",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }
      }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        sx: styles.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
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
            lineNumber: 225,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3RlYW0tc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJUZWFtU2VjdGlvbiIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJ0ZWFtIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiYWN0aW9uIiwiaWRfdGVhbSIsIm5hbWEiLCJpbWdTcmMiLCJqYWJhdGFuIiwic29jaWFsX21lZGlhIiwidXBsb2FkRmlsZSIsImdldFRlYW0iLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsInRlYW1faW1hZ2VfdXJsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsQ0FBbkIsRUFBc0IsSUFBdEIsRUFBNEIsSUFBNUIsRUFBa0MsV0FBbEMsQ0FGTDtBQUdKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtBQUhqQjtBQURPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGQwMDBjNzgzZTRhMGExZWVkYTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XHJcbmltcG9ydCBUZWFtQ2FyZCBmcm9tICdjb21wb25lbnRzL3RlYW0tY2FyZCc7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2tGLCBGYVR3aXR0ZXIsIEZhSW5zdGFncmFtIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBiYXNlX3VybCwgdGVhbV9pbWFnZV91cmwgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgTWVtYmVyMSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMi5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyMyBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItMy5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNCBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNC5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNSBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNS5wbmcnO1xyXG5pbXBvcnQgTWVtYmVyNiBmcm9tICdhc3NldHMvdGVhbS9tZW1iZXItNi5wbmcnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuLy8gY29uc3QgZGF0YSA9IFtcclxuLy8gICB7XHJcbi8vICAgICBpZDogMSxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMSxcclxuLy8gICAgIGFsdFRleHQ6ICdCYXJsaWFuIEhlbnJ5cmFudScsXHJcbi8vICAgICB0aXRsZTogJ0JhcmxpYW4gSGVucnlyYW51JyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnUzMgQmlvLWluZm9ybWF0aWNzICYgU3l0ZW0gZGVzaWduZXInLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogMixcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMixcclxuLy8gICAgIGFsdFRleHQ6ICdFZGl0YSBSb3NhbmEgJyxcclxuLy8gICAgIHRpdGxlOiAnRWRpdGEgUm9zYW5hICcsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJ1MzIEJpby1pbmZvcm1hdGljcyAmIFN5dGVtIGRlc2lnbmVyJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDMsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjMsXHJcbi8vICAgICBhbHRUZXh0OiAnQ2Flc2FyZWRpIFJhbWEnLFxyXG4vLyAgICAgdGl0bGU6ICdDYWVzYXJlZGkgUmFtYScsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJyMnLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNCxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyNCxcclxuLy8gICAgIGFsdFRleHQ6ICdkci4gTXVzdGlrYSBEaWFuJyxcclxuLy8gICAgIHRpdGxlOiAnZHIuIE11c3Rpa2EgRGlhbicsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJyMnLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNSxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMixcclxuLy8gICAgIGFsdFRleHQ6ICdJbnRhbiBQdXJib3dhdGknLFxyXG4vLyAgICAgdGl0bGU6ICdJbnRhbiBQdXJib3dhdGknLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICcjJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAzLFxyXG4vLyAgICAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDYsXHJcbi8vICAgICBpbWdTcmM6IE1lbWJlcjYsXHJcbi8vICAgICBhbHRUZXh0OiAnQW5vbnltJyxcclxuLy8gICAgIHRpdGxlOiAnQW5vbnltJyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnV2ViIERlc2lnbmVyJyxcclxuLy8gICAgIHNvY2lhbFByb2ZpbGU6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAxLFxyXG4vLyAgICAgICAgIG5hbWU6ICdmYWNlYm9vaycsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUZhY2Vib29rRiAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIGlkOiAyLFxyXG4vLyAgICAgICAgIG5hbWU6ICd0d2l0dGVyJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhVHdpdHRlciAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgICAgLy8ge1xyXG4vLyAgICAgICAvLyAgIGlkOiAzLFxyXG4vLyAgICAgICAvLyAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4vLyAgICAgICAvLyAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgLy8gICBpY29uOiA8RmFJbnN0YWdyYW0gLz4sXHJcbi8vICAgICAgIC8vIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFtU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbmNvbnN0cnVjdG9yKCl7XHJcbiAgc3VwZXIoKVxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB0ZWFtOiBbXSxcclxuICAgIGFjdGlvbjogXCJcIixcclxuICAgIGlkX3RlYW06IFwiXCIsXHJcbiAgICBuYW1hOiBcIlwiLFxyXG4gICAgaW1nU3JjOiBcIlwiLFxyXG4gICAgamFiYXRhbjogXCJcIixcclxuICAgIHNvY2lhbF9tZWRpYTogXCJcIixcclxuICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgfVxyXG59XHJcblxyXG5nZXRUZWFtID0gKCkgPT4ge1xyXG4gIGxldCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC90ZWFtXCJcclxuICBheGlvcy5nZXQodXJsKVxyXG4gIC50aGVuKHJlc3BvbnNlPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZWFtOiByZXNwb25zZS5kYXRhLnRlYW19KVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuY29tcG9uZW50RGlkTW91bnQoKXtcclxuICB0aGlzLmdldFRlYW0oKVxyXG59XHJcblxyXG4gcmVuZGVyICgpe1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwib3VyIHRlYW1cIlxyXG4gICAgICAgICAgdGl0bGU9XCJUaGUgbW9zdCBxdWFsaWZpZWQgYW5kIHRhbGVudGVkIGluZGl2aWR1YWxzXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgeyB0aGlzLnN0YXRlLnRlYW0ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8VGVhbUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2B0ZWFtLS1rZXkke2l0ZW0uaWRfdGVhbX1gfVxyXG4gICAgICAgICAgICAgIHNyYz17IHRlYW1faW1hZ2VfdXJsICsgXCIvXCIrIGl0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIC8vIGFsdFRleHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1hfVxyXG4gICAgICAgICAgICAgIGRlc2lnbmF0aW9uPXtpdGVtLmphYmF0YW59XHJcbiAgICAgICAgICAgICAgLy8gc29jaWFsPXtpdGVtLnNvY2lhbFByb2ZpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIG10OiBbMCwgbnVsbCwgLTYsIG51bGwsIC00XSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwcHgnLCBudWxsLCAwLCBudWxsLCBudWxsLCAnMzBweCAzNXB4J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9