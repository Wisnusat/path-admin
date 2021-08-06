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
          team: response.data
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3RlYW0tc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJUZWFtU2VjdGlvbiIsInVybCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwic2V0U3RhdGUiLCJ0ZWFtIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiYWN0aW9uIiwibmFtYSIsImltZ1NyYyIsImphYmF0YW4iLCJpZF90ZWFtIiwidXBsb2FkRmlsZSIsImdldFRlYW0iLCJzdHlsZXMiLCJncmlkIiwibWFwIiwiaXRlbSIsInRlYW1faW1hZ2VfdXJsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJtdCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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REY7QUF1QkQ7Ozs7RUE1RHdDUyw2Q0FBSyxDQUFDQyxTOzs7QUErRC9DLElBQU1OLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSk0sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFDLENBQVgsRUFBYyxJQUFkLEVBQW9CLENBQUMsQ0FBckIsQ0FEQTtBQUVKQyxXQUFPLEVBQUUsQ0FBQyxVQUFELEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxXQUFsQyxDQUZMO0FBR0pDLHVCQUFtQixFQUFFLENBQ25CLGVBRG1CLEVBRW5CLElBRm1CLEVBR25CLGVBSG1CLEVBSW5CLElBSm1CLEVBS25CLGVBTG1CO0FBSGpCO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYTgzNzE4NjIzYTFkM2NjMmM4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFRlYW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvdGVhbS1jYXJkJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhVHdpdHRlciwgRmFJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGJhc2VfdXJsLCB0ZWFtX2ltYWdlX3VybCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBNZW1iZXIxIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0xLnBuZyc7XHJcbmltcG9ydCBNZW1iZXIyIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0yLnBuZyc7XHJcbmltcG9ydCBNZW1iZXIzIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0zLnBuZyc7XHJcbmltcG9ydCBNZW1iZXI0IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci00LnBuZyc7XHJcbmltcG9ydCBNZW1iZXI1IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci01LnBuZyc7XHJcbmltcG9ydCBNZW1iZXI2IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci02LnBuZyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBjb25zdCBkYXRhID0gW1xyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgaW1nU3JjOiBNZW1iZXIxLFxyXG4vLyAgICAgYWx0VGV4dDogJ0JhcmxpYW4gSGVucnlyYW51JyxcclxuLy8gICAgIHRpdGxlOiAnQmFybGlhbiBIZW5yeXJhbnUnLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICdTMyBCaW8taW5mb3JtYXRpY3MgJiBTeXRlbSBkZXNpZ25lcicsXHJcbi8vICAgICBzb2NpYWxQcm9maWxlOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAyLFxyXG4vLyAgICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4vLyAgICAgYWx0VGV4dDogJ0VkaXRhIFJvc2FuYSAnLFxyXG4vLyAgICAgdGl0bGU6ICdFZGl0YSBSb3NhbmEgJyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnUzMgQmlvLWluZm9ybWF0aWNzICYgU3l0ZW0gZGVzaWduZXInLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogMyxcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyMyxcclxuLy8gICAgIGFsdFRleHQ6ICdDYWVzYXJlZGkgUmFtYScsXHJcbi8vICAgICB0aXRsZTogJ0NhZXNhcmVkaSBSYW1hJyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnIycsXHJcbi8vICAgICBzb2NpYWxQcm9maWxlOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiA0LFxyXG4vLyAgICAgaW1nU3JjOiBNZW1iZXI0LFxyXG4vLyAgICAgYWx0VGV4dDogJ2RyLiBNdXN0aWthIERpYW4nLFxyXG4vLyAgICAgdGl0bGU6ICdkci4gTXVzdGlrYSBEaWFuJyxcclxuLy8gICAgIGRlc2lnbmF0aW9uOiAnIycsXHJcbi8vICAgICBzb2NpYWxQcm9maWxlOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMSxcclxuLy8gICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMixcclxuLy8gICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogMyxcclxuLy8gICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiA1LFxyXG4vLyAgICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4vLyAgICAgYWx0VGV4dDogJ0ludGFuIFB1cmJvd2F0aScsXHJcbi8vICAgICB0aXRsZTogJ0ludGFuIFB1cmJvd2F0aScsXHJcbi8vICAgICBkZXNpZ25hdGlvbjogJyMnLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDMsXHJcbi8vICAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNixcclxuLy8gICAgIGltZ1NyYzogTWVtYmVyNixcclxuLy8gICAgIGFsdFRleHQ6ICdBbm9ueW0nLFxyXG4vLyAgICAgdGl0bGU6ICdBbm9ueW0nLFxyXG4vLyAgICAgZGVzaWduYXRpb246ICdXZWIgRGVzaWduZXInLFxyXG4vLyAgICAgc29jaWFsUHJvZmlsZTogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDEsXHJcbi8vICAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuLy8gICAgICAgICBwYXRoOiAnIycsXHJcbi8vICAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IDIsXHJcbi8vICAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4vLyAgICAgICAgIHBhdGg6ICcjJyxcclxuLy8gICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICAvLyB7XHJcbi8vICAgICAgIC8vICAgaWQ6IDMsXHJcbi8vICAgICAgIC8vICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbi8vICAgICAgIC8vICAgcGF0aDogJyMnLFxyXG4vLyAgICAgICAvLyAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuLy8gICAgICAgLy8gfSxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW1TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuY29uc3RydWN0b3IoKXtcclxuICBzdXBlcigpXHJcbiAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHRlYW06IFtdLFxyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgbmFtYTogXCJcIixcclxuICAgIGltZ1NyYzogXCJcIixcclxuICAgIGphYmF0YW46IFwiXCIsXHJcbiAgICBpZF90ZWFtOiBcIlwiLFxyXG4gICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICB9XHJcbn1cclxuXHJcbmdldFRlYW0gPSAoKSA9PiB7XHJcbiAgbGV0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RlYW1cIlxyXG4gIGF4aW9zLmdldCh1cmwpXHJcbiAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RlYW06IHJlc3BvbnNlLmRhdGF9KVxyXG4gIH0pXHJcbiAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2xvZ2luXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29tcG9uZW50RGlkTW91bnQoKXtcclxuICB0aGlzLmdldFRlYW0oKVxyXG59XHJcblxyXG4gcmVuZGVyICgpe1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwib3VyIHRlYW1cIlxyXG4gICAgICAgICAgdGl0bGU9XCJUaGUgbW9zdCBxdWFsaWZpZWQgYW5kIHRhbGVudGVkIGluZGl2aWR1YWxzXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgeyB0aGlzLnN0YXRlLnRlYW0ubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICA8VGVhbUNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2B0ZWFtLS1rZXkke2l0ZW0uaWRfdGVhbX1gfVxyXG4gICAgICAgICAgICAgIHNyYz17IHRlYW1faW1hZ2VfdXJsICsgXCIvXCIrIGl0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgIC8vIGFsdFRleHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICB0aXRsZT17aXRlbS5uYW1hfVxyXG4gICAgICAgICAgICAgIGRlc2lnbmF0aW9uPXtpdGVtLmphYmF0YW59XHJcbiAgICAgICAgICAgICAgLy8gc29jaWFsPXtpdGVtLnNvY2lhbFByb2ZpbGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGdyaWQ6IHtcclxuICAgIG10OiBbMCwgbnVsbCwgLTYsIG51bGwsIC00XSxcclxuICAgIGdyaWRHYXA6IFsnMzVweCAwcHgnLCBudWxsLCAwLCBudWxsLCBudWxsLCAnMzBweCAzNXB4J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9