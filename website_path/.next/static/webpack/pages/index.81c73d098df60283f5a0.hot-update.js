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














var data = [{
  id: 1,
  imgSrc: assets_team_member_1_png__WEBPACK_IMPORTED_MODULE_13___default.a,
  altText: 'Barlian Henryranu',
  title: 'Barlian Henryranu',
  designation: 'S3 Bio-informatics & Sytem designer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 2,
  imgSrc: assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_14___default.a,
  altText: 'Edita Rosana ',
  title: 'Edita Rosana ',
  designation: 'S3 Bio-informatics & Sytem designer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 3,
  imgSrc: assets_team_member_3_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  altText: 'Caesaredi Rama',
  title: 'Caesaredi Rama',
  designation: '#',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 4,
  imgSrc: assets_team_member_4_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  altText: 'dr. Mustika Dian',
  title: 'dr. Mustika Dian',
  designation: '#',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 5,
  imgSrc: assets_team_member_2_png__WEBPACK_IMPORTED_MODULE_14___default.a,
  altText: 'Intan Purbowati',
  title: 'Intan Purbowati',
  designation: '#',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    })
  }]
}, {
  id: 6,
  imgSrc: assets_team_member_6_png__WEBPACK_IMPORTED_MODULE_18___default.a,
  altText: 'Anonym',
  title: 'Anonym',
  designation: 'Web Designer',
  socialProfile: [{
    id: 1,
    name: 'facebook',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookF"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    })
  }, {
    id: 2,
    name: 'twitter',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTwitter"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }
    })
  }, {
    id: 3,
    name: 'instagram',
    path: '#',
    icon: Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaInstagram"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 15
      }
    })
  }]
}];

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
          lineNumber: 223,
          columnNumber: 5
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 7
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        slogan: "our team",
        title: "The most qualified and talented individuals",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 9
        }
      }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_7__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
        sx: styles.grid,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
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
            lineNumber: 232,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3RlYW0tc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJNZW1iZXIxIiwiYWx0VGV4dCIsInRpdGxlIiwiZGVzaWduYXRpb24iLCJzb2NpYWxQcm9maWxlIiwibmFtZSIsInBhdGgiLCJpY29uIiwiTWVtYmVyMiIsIk1lbWJlcjMiLCJNZW1iZXI0IiwiTWVtYmVyNiIsIlRlYW1TZWN0aW9uIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsInRlYW0iLCJlcnJvciIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImFjdGlvbiIsImlkX3RlYW0iLCJuYW1hIiwiamFiYXRhbiIsInNvY2lhbF9tZWRpYSIsInVwbG9hZEZpbGUiLCJnZXRUZWFtIiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJ0ZWFtX2ltYWdlX3VybCIsIlJlYWN0IiwiQ29tcG9uZW50IiwibXQiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyxnRUFGVjtBQUdFQyxTQUFPLEVBQUUsbUJBSFg7QUFJRUMsT0FBSyxFQUFFLG1CQUpUO0FBS0VDLGFBQVcsRUFBRSxxQ0FMZjtBQU1FQyxlQUFhLEVBQUUsQ0FDYjtBQUNFTixNQUFFLEVBQUUsQ0FETjtBQUVFTyxRQUFJLEVBQUUsVUFGUjtBQUdFQyxRQUFJLEVBQUUs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QUxwQixDQU1FO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUR3QjtBQUFBLE9BQXhCLENBREosQ0FORixDQURGLENBREY7QUF1QkQ7Ozs7RUE3RHdDUyw2Q0FBSyxDQUFDQyxTOzs7QUFnRS9DLElBQU1OLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSk0sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFDLENBQVgsRUFBYyxJQUFkLEVBQW9CLENBQUMsQ0FBckIsQ0FEQTtBQUVKQyxXQUFPLEVBQUUsQ0FBQyxVQUFELEVBQWEsSUFBYixFQUFtQixDQUFuQixFQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxXQUFsQyxDQUZMO0FBR0pDLHVCQUFtQixFQUFFLENBQ25CLGVBRG1CLEVBRW5CLElBRm1CLEVBR25CLGVBSG1CLEVBSW5CLElBSm1CLEVBS25CLGVBTG1CO0FBSGpCO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MWM3M2QwOThkZjYwMjgzZjVhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFRlYW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvdGVhbS1jYXJkJztcclxuaW1wb3J0IHsgRmFGYWNlYm9va0YsIEZhVHdpdHRlciwgRmFJbnN0YWdyYW0gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IGJhc2VfdXJsLCB0ZWFtX2ltYWdlX3VybCB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBNZW1iZXIxIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0xLnBuZyc7XHJcbmltcG9ydCBNZW1iZXIyIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0yLnBuZyc7XHJcbmltcG9ydCBNZW1iZXIzIGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci0zLnBuZyc7XHJcbmltcG9ydCBNZW1iZXI0IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci00LnBuZyc7XHJcbmltcG9ydCBNZW1iZXI1IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci01LnBuZyc7XHJcbmltcG9ydCBNZW1iZXI2IGZyb20gJ2Fzc2V0cy90ZWFtL21lbWJlci02LnBuZyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaW1nU3JjOiBNZW1iZXIxLFxyXG4gICAgYWx0VGV4dDogJ0JhcmxpYW4gSGVucnlyYW51JyxcclxuICAgIHRpdGxlOiAnQmFybGlhbiBIZW5yeXJhbnUnLFxyXG4gICAgZGVzaWduYXRpb246ICdTMyBCaW8taW5mb3JtYXRpY3MgJiBTeXRlbSBkZXNpZ25lcicsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4gICAgYWx0VGV4dDogJ0VkaXRhIFJvc2FuYSAnLFxyXG4gICAgdGl0bGU6ICdFZGl0YSBSb3NhbmEgJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnUzMgQmlvLWluZm9ybWF0aWNzICYgU3l0ZW0gZGVzaWduZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGltZ1NyYzogTWVtYmVyMyxcclxuICAgIGFsdFRleHQ6ICdDYWVzYXJlZGkgUmFtYScsXHJcbiAgICB0aXRsZTogJ0NhZXNhcmVkaSBSYW1hJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnIycsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBNZW1iZXI0LFxyXG4gICAgYWx0VGV4dDogJ2RyLiBNdXN0aWthIERpYW4nLFxyXG4gICAgdGl0bGU6ICdkci4gTXVzdGlrYSBEaWFuJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnIycsXHJcbiAgICBzb2NpYWxQcm9maWxlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuYW1lOiAnZmFjZWJvb2snLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFGYWNlYm9va0YgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBuYW1lOiAndHdpdHRlcicsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYVR3aXR0ZXIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuYW1lOiAnaW5zdGFncmFtJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhSW5zdGFncmFtIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaW1nU3JjOiBNZW1iZXIyLFxyXG4gICAgYWx0VGV4dDogJ0ludGFuIFB1cmJvd2F0aScsXHJcbiAgICB0aXRsZTogJ0ludGFuIFB1cmJvd2F0aScsXHJcbiAgICBkZXNpZ25hdGlvbjogJyMnLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGltZ1NyYzogTWVtYmVyNixcclxuICAgIGFsdFRleHQ6ICdBbm9ueW0nLFxyXG4gICAgdGl0bGU6ICdBbm9ueW0nLFxyXG4gICAgZGVzaWduYXRpb246ICdXZWIgRGVzaWduZXInLFxyXG4gICAgc29jaWFsUHJvZmlsZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmFtZTogJ2ZhY2Vib29rJyxcclxuICAgICAgICBwYXRoOiAnIycsXHJcbiAgICAgICAgaWNvbjogPEZhRmFjZWJvb2tGIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgICAgIHBhdGg6ICcjJyxcclxuICAgICAgICBpY29uOiA8RmFUd2l0dGVyIC8+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgbmFtZTogJ2luc3RhZ3JhbScsXHJcbiAgICAgICAgcGF0aDogJyMnLFxyXG4gICAgICAgIGljb246IDxGYUluc3RhZ3JhbSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW1TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuY29uc3RydWN0b3IoKXtcclxuICBzdXBlcigpXHJcbiAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIHRlYW06IFtdLFxyXG4gICAgYWN0aW9uOiBcIlwiLFxyXG4gICAgaWRfdGVhbTogXCJcIixcclxuICAgIG5hbWE6IFwiXCIsXHJcbiAgICBpbWdTcmM6IFwiXCIsXHJcbiAgICBqYWJhdGFuOiBcIlwiLFxyXG4gICAgc29jaWFsX21lZGlhOiBcIlwiLFxyXG4gICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICB9XHJcbn1cclxuXHJcbmdldFRlYW0gPSAoKSA9PiB7XHJcbiAgbGV0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RlYW1cIlxyXG4gIGF4aW9zLmdldCh1cmwpXHJcbiAgLnRoZW4ocmVzcG9uc2U9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RlYW06IHJlc3BvbnNlLmRhdGEudGVhbX0pXHJcbiAgfSlcclxuICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgIHdpbmRvdy5hbGVydChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvbG9naW5cIilcclxuICAgICAgICAgIH1cclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5jb21wb25lbnREaWRNb3VudCgpe1xyXG4gIHRoaXMuZ2V0VGVhbSgpXHJcbn1cclxuXHJcbiByZW5kZXIgKCl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJvdXIgdGVhbVwiXHJcbiAgICAgICAgICB0aXRsZT1cIlRoZSBtb3N0IHF1YWxpZmllZCBhbmQgdGFsZW50ZWQgaW5kaXZpZHVhbHNcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7IHRoaXMuc3RhdGUudGVhbS5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgIDxUZWFtQ2FyZFxyXG4gICAgICAgICAgICAgIGtleT17YHRlYW0tLWtleSR7aXRlbS5pZF90ZWFtfWB9XHJcbiAgICAgICAgICAgICAgc3JjPXsgdGVhbV9pbWFnZV91cmwgKyBcIi9cIisgaXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgLy8gYWx0VGV4dD17aXRlbS5hbHRUZXh0fVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLm5hbWF9XHJcbiAgICAgICAgICAgICAgZGVzaWduYXRpb249e2l0ZW0uamFiYXRhbn1cclxuICAgICAgICAgICAgICAvLyBzb2NpYWw9e2l0ZW0uc29jaWFsUHJvZmlsZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZ3JpZDoge1xyXG4gICAgbXQ6IFswLCBudWxsLCAtNiwgbnVsbCwgLTRdLFxyXG4gICAgZ3JpZEdhcDogWyczNXB4IDBweCcsIG51bGwsIDAsIG51bGwsIG51bGwsICczMHB4IDM1cHgnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=