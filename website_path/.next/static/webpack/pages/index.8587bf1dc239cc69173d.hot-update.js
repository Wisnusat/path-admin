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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJQb3N0VGh1bWIxIiwiYWx0VGV4dCIsInBvc3RMaW5rIiwidGl0bGUiLCJhdXRob3JOYW1lIiwiZGF0ZSIsIlBvc3RUaHVtYjIiLCJQb3N0VGh1bWIzIiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiQmxvZ1NlY3Rpb24iLCJ2YXJpYW50Iiwic3R5bGVzIiwiY2Fyb3VzZWxXcmFwcGVyIiwibWFwIiwiaXRlbSIsIlJlYWN0IiwiQ29tcG9uZW50IiwibXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUMseURBRlY7QUFHRUMsU0FBTyxFQUFFLFNBSFg7QUFJRUMsVUFBUSxFQUFFLEdBSlo7QUFLRUMsT0FBSyxFQUFFLHFEQUxUO0FBTUVDLFlBQVUsRUFBRSxhQU5kO0FBT0VDLE1BQUksRUFBRTtBQVBSLENBRFcsRUFVWDtBQUNFUCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFNLEVBQUVPLHlEQUZWO0FBR0VMLFNBQU8sRUFBRSxVQUhYO0FBSUVDLFVBQVEsRUFBRSxHQUpaO0FBS0VDLE9BQUssRUFBRSx5Q0FMVDtBQU1FQyxZQUFVLEVBQUUsYUFOZDtBQU9FQyxNQUFJLEVBQUU7QUFQUixDQVZXLEVBbUJYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRVEseURBRlY7QUFHRU4s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QixHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLGVBQ1IscURBQUMsK0RBQUQ7QUFDRSxhQUFHLEVBQUVBLElBQUksQ0FBQ3pCLEVBRFo7QUFFRSxhQUFHLEVBQUV5QixJQUFJLENBQUN4QixNQUZaO0FBR0UsYUFBRyxFQUFFd0IsSUFBSSxDQUFDdEIsT0FIWjtBQUlFLGtCQUFRLEVBQUVzQixJQUFJLENBQUNyQixRQUpqQjtBQUtFLGVBQUssRUFBRXFCLElBQUksQ0FBQ3BCLEtBTGQ7QUFNRSxvQkFBVSxFQUFFb0IsSUFBSSxDQUFDbkIsVUFObkI7QUFPRSxjQUFJLEVBQUVtQixJQUFJLENBQUNsQixJQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUTtBQUFBLE9BQVQsQ0F0QkgsQ0FERixDQU5GLENBREYsQ0FERjtBQStDRDs7OztFQWpEd0NtQiw2Q0FBSyxDQUFDQyxTOzs7QUFvRC9DLElBQU1MLE1BQU0sR0FBRztBQUNiQyxpQkFBZSxFQUFFO0FBQ2YsMkJBQXVCO0FBQ3JCSyxRQUFFLEVBQUUsQ0FBQztBQURnQjtBQURSO0FBREosQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NTg3YmYxZGMyMzljYzY5MTczZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnY29tcG9uZW50cy9wb3N0LWNhcmQuanMnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xyXG5pbXBvcnQgUG9zdFRodW1iMSBmcm9tICdhc3NldHMvYmxvZy80LmpwZyc7XHJcbmltcG9ydCBQb3N0VGh1bWIyIGZyb20gJ2Fzc2V0cy9ibG9nLzUuanBnJztcclxuaW1wb3J0IFBvc3RUaHVtYjMgZnJvbSAnYXNzZXRzL2Jsb2cvNy5qcGcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGltZ1NyYzogUG9zdFRodW1iMSxcclxuICAgIGFsdFRleHQ6ICdQcm9ncmFtJyxcclxuICAgIHBvc3RMaW5rOiAnIycsXHJcbiAgICB0aXRsZTogJ0Vhcmx5IGRldGVjdGlvbiBkZXZpY2Ugb2YgdmFyaW91cyBzbGVlcGluZyBkaXNlYXNlcycsXHJcbiAgICBhdXRob3JOYW1lOiAnT24gcHJvZ3Jlc3MnLFxyXG4gICAgZGF0ZTogJ01laSwgMjAyMCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGltZ1NyYzogUG9zdFRodW1iMixcclxuICAgIGFsdFRleHQ6ICdDcmVhdGl2ZScsXHJcbiAgICBwb3N0TGluazogJyMnLFxyXG4gICAgdGl0bGU6ICdNb2JpbGUtYmFzZWQgcHVibGljIHNlcnZpY2UgYXBwbGljYXRpb24nLFxyXG4gICAgYXV0aG9yTmFtZTogJ09uIHByb2dyZXNzJyxcclxuICAgIGRhdGU6ICdNZWksIDIwMjAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpbWdTcmM6IFBvc3RUaHVtYjMsXHJcbiAgICBhbHRUZXh0OiAnU3RhcnR1cCcsXHJcbiAgICBwb3N0TGluazogJyMnLFxyXG4gICAgdGl0bGU6ICdPdXIgbmV4dCBwcm9qZWN0IHdpbGwgYmUgY29taW5nIHNvb24nLFxyXG4gICAgYXV0aG9yTmFtZTogJ0NvbWluZyBzb29uJyxcclxuICAgIGRhdGU6ICcjJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaW1nU3JjOiBQb3N0VGh1bWIyLFxyXG4gICAgYWx0VGV4dDogJ0NyZWF0aXZlJyxcclxuICAgIHBvc3RMaW5rOiAnIycsXHJcbiAgICB0aXRsZTogJ091ciBuZXh0IHByb2plY3Qgd2lsbCBiZSBjb21pbmcgc29vbicsXHJcbiAgICBhdXRob3JOYW1lOiAnQ29taW5nIHNvb24nLFxyXG4gICAgZGF0ZTogJyMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCByZXNwb25zaXZlID0ge1xyXG4gIGRlc2t0b3A6IHtcclxuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEzMTAgfSxcclxuICAgIGl0ZW1zOiAzLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIGxhcHRvcDoge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEzMTAsIG1pbjogMTAyNCB9LFxyXG4gICAgaXRlbXM6IDMsXHJcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxyXG4gIH0sXHJcbiAgdGFibGV0OiB7XHJcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcclxuICAgIGl0ZW1zOiAyLFxyXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cclxuICB9LFxyXG4gIG1vYmlsZToge1xyXG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXHJcbiAgICBpdGVtczogMSxcclxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2dTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuIHJlbmRlcigpeyBcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24ubmV3cycgfX0gaWQ9XCJwcm9kdWN0c1wiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICBzbG9nYW49XCJvdXIgcHJvZHVjdHNcIlxyXG4gICAgICAgICAgdGl0bGU9XCJIZXJlIGFyZSBzb21lIHByb2R1Y3RzIHdlIGhhdmUgbWFkZVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XHJcbiAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cclxuICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX1cclxuICAgICAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cclxuICAgICAgICAgICAgY2VudGVyTW9kZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcclxuICAgICAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cclxuICAgICAgICAgICAgZG90TGlzdENsYXNzPVwidGVzdFwiXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cclxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICBpdGVtQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgICBrZXlCb2FyZENvbnRyb2xcclxuICAgICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZVxyXG4gICAgICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XHJcbiAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cclxuICAgICAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxyXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlPXsxfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8UG9zdENhcmRcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0uYWx0VGV4dH1cclxuICAgICAgICAgICAgICAgIHBvc3RMaW5rPXtpdGVtLnBvc3RMaW5rfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICBhdXRob3JOYW1lPXtpdGVtLmF1dGhvck5hbWV9XHJcbiAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJvdXNlbFdyYXBwZXI6IHtcclxuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xyXG4gICAgICBteDogLTMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=