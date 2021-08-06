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










 // const data = [
//   {
//     id: 1,
//     imgSrc: PostThumb1,
//     altText: 'Program',
//     postLink: '#',
//     title: 'Early detection device of various sleeping diseases',
//     authorName: 'On progress',
//     date: 'Mei, 2020',
//   },
//   {
//     id: 2,
//     imgSrc: PostThumb2,
//     altText: 'Creative',
//     postLink: '#',
//     title: 'Mobile-based public service application',
//     authorName: 'On progress',
//     date: 'Mei, 2020',
//   },
//   {
//     id: 3,
//     imgSrc: PostThumb3,
//     altText: 'Startup',
//     postLink: '#',
//     title: 'Our next project will be coming soon',
//     authorName: 'Coming soon',
//     date: '#',
//   },
//   {
//     id: 4,
//     imgSrc: PostThumb2,
//     altText: 'Creative',
//     postLink: '#',
//     title: 'Our next project will be coming soon',
//     authorName: 'Coming soon',
//     date: '#',
//   },
// ];

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
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogSection);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogSection, [{
    key: "render",
    value: function render() {
      var _this = this;

      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])("section", {
        sx: {
          variant: 'section.news'
        },
        id: "products",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 7
        }
      }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
        slogan: "our products",
        title: "Here are some products we have made",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__["Box"], {
        sx: styles.carouselWrapper,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
            lineNumber: 95,
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
          lineNumber: 88,
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
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInNsaWRlc1RvU2xpZGUiLCJsYXB0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJCbG9nU2VjdGlvbiIsInZhcmlhbnQiLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJkYXRhIiwibWFwIiwiaXRlbSIsImlkIiwiaW1nU3JjIiwiYWx0VGV4dCIsInBvc3RMaW5rIiwidGl0bGUiLCJhdXRob3JOYW1lIiwiZGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxpQkFBYSxFQUFFLENBSFIsQ0FHVzs7QUFIWCxHQURRO0FBTWpCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNB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MzI0NTVlOTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvcG9zdC1jYXJkLmpzJztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvYnV0dG9uLWdyb3VwJztcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcclxuaW1wb3J0IFBvc3RUaHVtYjEgZnJvbSAnYXNzZXRzL2Jsb2cvNC5qcGcnO1xyXG5pbXBvcnQgUG9zdFRodW1iMiBmcm9tICdhc3NldHMvYmxvZy81LmpwZyc7XHJcbmltcG9ydCBQb3N0VGh1bWIzIGZyb20gJ2Fzc2V0cy9ibG9nLzcuanBnJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIGNvbnN0IGRhdGEgPSBbXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBpbWdTcmM6IFBvc3RUaHVtYjEsXHJcbi8vICAgICBhbHRUZXh0OiAnUHJvZ3JhbScsXHJcbi8vICAgICBwb3N0TGluazogJyMnLFxyXG4vLyAgICAgdGl0bGU6ICdFYXJseSBkZXRlY3Rpb24gZGV2aWNlIG9mIHZhcmlvdXMgc2xlZXBpbmcgZGlzZWFzZXMnLFxyXG4vLyAgICAgYXV0aG9yTmFtZTogJ09uIHByb2dyZXNzJyxcclxuLy8gICAgIGRhdGU6ICdNZWksIDIwMjAnLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgaWQ6IDIsXHJcbi8vICAgICBpbWdTcmM6IFBvc3RUaHVtYjIsXHJcbi8vICAgICBhbHRUZXh0OiAnQ3JlYXRpdmUnLFxyXG4vLyAgICAgcG9zdExpbms6ICcjJyxcclxuLy8gICAgIHRpdGxlOiAnTW9iaWxlLWJhc2VkIHB1YmxpYyBzZXJ2aWNlIGFwcGxpY2F0aW9uJyxcclxuLy8gICAgIGF1dGhvck5hbWU6ICdPbiBwcm9ncmVzcycsXHJcbi8vICAgICBkYXRlOiAnTWVpLCAyMDIwJyxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIGlkOiAzLFxyXG4vLyAgICAgaW1nU3JjOiBQb3N0VGh1bWIzLFxyXG4vLyAgICAgYWx0VGV4dDogJ1N0YXJ0dXAnLFxyXG4vLyAgICAgcG9zdExpbms6ICcjJyxcclxuLy8gICAgIHRpdGxlOiAnT3VyIG5leHQgcHJvamVjdCB3aWxsIGJlIGNvbWluZyBzb29uJyxcclxuLy8gICAgIGF1dGhvck5hbWU6ICdDb21pbmcgc29vbicsXHJcbi8vICAgICBkYXRlOiAnIycsXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBpZDogNCxcclxuLy8gICAgIGltZ1NyYzogUG9zdFRodW1iMixcclxuLy8gICAgIGFsdFRleHQ6ICdDcmVhdGl2ZScsXHJcbi8vICAgICBwb3N0TGluazogJyMnLFxyXG4vLyAgICAgdGl0bGU6ICdPdXIgbmV4dCBwcm9qZWN0IHdpbGwgYmUgY29taW5nIHNvb24nLFxyXG4vLyAgICAgYXV0aG9yTmFtZTogJ0NvbWluZyBzb29uJyxcclxuLy8gICAgIGRhdGU6ICcjJyxcclxuLy8gICB9LFxyXG4vLyBdO1xyXG5cclxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcclxuICBkZXNrdG9wOiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMzEwIH0sXHJcbiAgICBpdGVtczogMyxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBsYXB0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMzEwLCBtaW46IDEwMjQgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIHRhYmxldDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXHJcbiAgICBpdGVtczogMixcclxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxuICBtb2JpbGU6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbG9nU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiByZW5kZXIoKXsgXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLm5ld3MnIH19IGlkPVwicHJvZHVjdHNcIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRlclxyXG4gICAgICAgICAgc2xvZ2FuPVwib3VyIHByb2R1Y3RzXCJcclxuICAgICAgICAgIHRpdGxlPVwiSGVyZSBhcmUgc29tZSBwcm9kdWN0cyB3ZSBoYXZlIG1hZGVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxyXG4gICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XHJcbiAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGF1dG9QbGF5U3BlZWQ9ezMwMDB9XHJcbiAgICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXHJcbiAgICAgICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XHJcbiAgICAgICAgICAgIGRvdExpc3RDbGFzcz1cInRlc3RcIlxyXG4gICAgICAgICAgICBkcmFnZ2FibGU9e3RydWV9XHJcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxyXG4gICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgaXRlbUNsYXNzPVwiXCJcclxuICAgICAgICAgICAga2V5Qm9hcmRDb250cm9sXHJcbiAgICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGVcclxuICAgICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxyXG4gICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxyXG4gICAgICAgICAgICBzaG93RG90cz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNsaWRlckNsYXNzPVwiXCJcclxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFBvc3RDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XHJcbiAgICAgICAgICAgICAgICBwb3N0TGluaz17aXRlbS5wb3N0TGlua31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgYXV0aG9yTmFtZT17aXRlbS5hdXRob3JOYW1lfVxyXG4gICAgICAgICAgICAgICAgZGF0ZT17aXRlbS5kYXRlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XHJcbiAgICAnLmNhcm91c2VsLWNvbnRhaW5lcic6IHtcclxuICAgICAgbXg6IC0zLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9