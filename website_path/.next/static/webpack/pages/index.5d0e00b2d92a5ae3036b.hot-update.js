webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blog-section.js":
/*!**************************************!*\
  !*** ./src/sections/blog-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogSection; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_post_card_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/post-card.js */ "./src/components/post-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_blog_4_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/blog/4.jpg */ "./src/assets/blog/4.jpg");
/* harmony import */ var assets_blog_4_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_blog_4_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_blog_5_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/blog/5.jpg */ "./src/assets/blog/5.jpg");
/* harmony import */ var assets_blog_5_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_blog_5_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_blog_7_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/blog/7.jpg */ "./src/assets/blog/7.jpg");
/* harmony import */ var assets_blog_7_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_blog_7_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);





var _jsxFileName = "D:\\path-admin\\website_path\\src\\sections\\blog-section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @jsxRuntime classic */

/** @jsx jsx */











var data = [{
  id: 1,
  imgSrc: assets_blog_4_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
  altText: 'Program',
  postLink: '#',
  title: 'Early detection device of various sleeping diseases',
  authorName: 'On progress',
  date: 'Mei, 2020'
}, {
  id: 2,
  imgSrc: assets_blog_5_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
  altText: 'Creative',
  postLink: '#',
  title: 'Mobile-based public service application',
  authorName: 'On progress',
  date: 'Mei, 2020'
}, {
  id: 3,
  imgSrc: assets_blog_7_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
  altText: 'Startup',
  postLink: '#',
  title: 'Our next project will be coming soon',
  authorName: 'Coming soon',
  date: '#'
}, {
  id: 4,
  imgSrc: assets_blog_5_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
  altText: 'Creative',
  postLink: '#',
  title: 'Our next project will be coming soon',
  authorName: 'Coming soon',
  date: '#'
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1310
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1310,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};

var BlogSection = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BlogSection, _React$Component);

  var _super = _createSuper(BlogSection);

  function BlogSection() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogSection);

    _this = _super.call(this);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogSection, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
        sx: {
          variant: 'section.news'
        },
        id: "products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 5
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 7
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        slogan: "our products",
        title: "Here are some products we have made",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 9
        }
      }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Box"], {
        sx: styles.carouselWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_9___default.a, {
        additionalTransfrom: 0,
        arrows: false,
        autoPlaySpeed: 3000,
        centerMode: false,
        className: "",
        containerClass: "carousel-container",
        customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 32
          }
        }),
        dotListClass: "test",
        draggable: true,
        focusOnSelect: false,
        infinite: true,
        itemClass: "",
        keyBoardControl: true,
        minimumTouchDrag: 80,
        renderButtonGroupOutside: true,
        renderDotsOutside: false,
        responsive: responsive,
        showDots: false,
        sliderClass: "",
        slidesToSlide: 1,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }
      }, data.map(function (item) {
        return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(components_post_card_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: item.id,
          src: item.imgSrc,
          alt: item.altText,
          postLink: item.postLink,
          title: item.title,
          authorName: item.authorName,
          date: item.date,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 15
          }
        });
      })))));
    }
  }]);

  return BlogSection;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);


var styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJQb3N0VGh1bWIxIiwiYWx0VGV4dCIsInBvc3RMaW5rIiwidGl0bGUiLCJhdXRob3JOYW1lIiwiZGF0ZSIsIlBvc3RUaHVtYjIiLCJQb3N0VGh1bWIzIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiQmxvZ1NlY3Rpb24iLCJzdGF0ZSIsInZhcmlhbnQiLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyx5REFGVjtBQUdFQyxTQUFPLEVBQUUsU0FIWDtBQUlFQyxVQUFRLEVBQUUsR0FKWjtBQUtFQyxPQUFLLEVBQUUscURBTFQ7QUFNRUMsWUFBVSxFQUFFLGFBTmQ7QUFPRUMsTUFBSSxFQUFFO0FBUFIsQ0FEVyxFQVVYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU8seURBRlY7QUFHRUwsU0FBTyxFQUFFLFVBSFg7QUFJRUMsVUFBUSxFQUFFLEdBSlo7QUFLRUMsT0FBSyxFQUFFLHlDQUxUO0FBTUVDLFlBQVUsRUFBRSxhQU5kO0FBT0VDLE1BQUksRUFBRTtBQVBSLENBVlcsRUFtQlg7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFUSx5REFG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QWEsRUFBRSxDQXBCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXNCR1gsSUFBSSxDQUFDMEIsR0FBTCxDQUFTLFVBQUNDLElBQUQ7QUFBQSxlQUNSLHFEQUFDLCtEQUFEO0FBQ0UsYUFBRyxFQUFFQSxJQUFJLENBQUMxQixFQURaO0FBRUUsYUFBRyxFQUFFMEIsSUFBSSxDQUFDekIsTUFGWjtBQUdFLGFBQUcsRUFBRXlCLElBQUksQ0FBQ3ZCLE9BSFo7QUFJRSxrQkFBUSxFQUFFdUIsSUFBSSxDQUFDdEIsUUFKakI7QUFLRSxlQUFLLEVBQUVzQixJQUFJLENBQUNyQixLQUxkO0FBTUUsb0JBQVUsRUFBRXFCLElBQUksQ0FBQ3BCLFVBTm5CO0FBT0UsY0FBSSxFQUFFb0IsSUFBSSxDQUFDbkIsSUFQYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFE7QUFBQSxPQUFULENBdEJILENBREYsQ0FORixDQURGLENBREY7QUErQ0Q7Ozs7RUF6RHdDb0IsNkNBQUssQ0FBQ0MsUzs7O0FBNEQvQyxJQUFNTCxNQUFNLEdBQUc7QUFDYkMsaUJBQWUsRUFBRTtBQUNmLDJCQUF1QjtBQUNyQkssUUFBRSxFQUFFLENBQUM7QUFEZ0I7QUFEUjtBQURKLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWQwZTAwYjJkOTJhNWFlMzAzNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvcG9zdC1jYXJkLmpzJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IFBvc3RUaHVtYjEgZnJvbSAnYXNzZXRzL2Jsb2cvNC5qcGcnO1xyXG5pbXBvcnQgUG9zdFRodW1iMiBmcm9tICdhc3NldHMvYmxvZy81LmpwZyc7XHJcbmltcG9ydCBQb3N0VGh1bWIzIGZyb20gJ2Fzc2V0cy9ibG9nLzcuanBnJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpbWdTcmM6IFBvc3RUaHVtYjEsXHJcbiAgICBhbHRUZXh0OiAnUHJvZ3JhbScsXHJcbiAgICBwb3N0TGluazogJyMnLFxyXG4gICAgdGl0bGU6ICdFYXJseSBkZXRlY3Rpb24gZGV2aWNlIG9mIHZhcmlvdXMgc2xlZXBpbmcgZGlzZWFzZXMnLFxyXG4gICAgYXV0aG9yTmFtZTogJ09uIHByb2dyZXNzJyxcclxuICAgIGRhdGU6ICdNZWksIDIwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpbWdTcmM6IFBvc3RUaHVtYjIsXHJcbiAgICBhbHRUZXh0OiAnQ3JlYXRpdmUnLFxyXG4gICAgcG9zdExpbms6ICcjJyxcclxuICAgIHRpdGxlOiAnTW9iaWxlLWJhc2VkIHB1YmxpYyBzZXJ2aWNlIGFwcGxpY2F0aW9uJyxcclxuICAgIGF1dGhvck5hbWU6ICdPbiBwcm9ncmVzcycsXHJcbiAgICBkYXRlOiAnTWVpLCAyMDIwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgaW1nU3JjOiBQb3N0VGh1bWIzLFxyXG4gICAgYWx0VGV4dDogJ1N0YXJ0dXAnLFxyXG4gICAgcG9zdExpbms6ICcjJyxcclxuICAgIHRpdGxlOiAnT3VyIG5leHQgcHJvamVjdCB3aWxsIGJlIGNvbWluZyBzb29uJyxcclxuICAgIGF1dGhvck5hbWUgOiAnQ29taW5nIHNvb24nLFxyXG4gICAgZGF0ZTogJyMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBpbWdTcmM6IFBvc3RUaHVtYjIsXHJcbiAgICBhbHRUZXh0OiAnQ3JlYXRpdmUnLFxyXG4gICAgcG9zdExpbms6ICcjJyxcclxuICAgIHRpdGxlOiAnT3VyIG5leHQgcHJvamVjdCB3aWxsIGJlIGNvbWluZyBzb29uJyxcclxuICAgIGF1dGhvck5hbWU6ICdDb21pbmcgc29vbicsXHJcbiAgICBkYXRlOiAnIycsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc3BvbnNpdmUgPSB7XHJcbiAgZGVza3RvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTMxMCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbGFwdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTMxMCwgbWluOiAxMDI0IH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICB0YWJsZXQ6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxyXG4gICAgaXRlbXM6IDIsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgbW9iaWxlOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxvZ1NlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIHJlbmRlcigpeyBcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ubmV3cycgfX0gaWQ9XCJwcm9kdWN0c1wiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJvdXIgcHJvZHVjdHNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJIZXJlIGFyZSBzb21lIHByb2R1Y3RzIHdlIGhhdmUgbWFkZVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cclxuICAgICAgICAgICAgY2VudGVyTW9kZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cclxuICAgICAgICAgICAgZG90TGlzdENsYXNzPVwidGVzdFwiXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICBpdGVtQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgICBrZXlCb2FyZENvbnRyb2xcclxuICAgICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZVxyXG4gICAgICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8UG9zdENhcmRcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICAgIHBvc3RMaW5rPXtpdGVtLnBvc3RMaW5rfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBhdXRob3JOYW1lPXtpdGVtLmF1dGhvck5hbWV9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICBteDogLTMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=