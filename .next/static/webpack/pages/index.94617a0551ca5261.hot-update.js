"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_TaskTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TaskTable */ \"./components/TaskTable.js\");\n/* harmony import */ var _components_Summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Summary */ \"./components/Summary.js\");\n/* harmony import */ var _components_GlobalSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GlobalSettings */ \"./components/GlobalSettings.js\");\n/* harmony import */ var _components_ClientForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ClientForm */ \"./components/ClientForm.js\");\n/* harmony import */ var _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contexts/AppContext */ \"./contexts/AppContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const { tasks, setTasks, clientData, setClientData, globalSettings, setGlobalSettings } = (0,_contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__.useApp)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Task Cost Calculator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Task Cost Calculator for managing and summarizing project tasks.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ClientForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                clientData: clientData || {},\n                                setClientData: setClientData\n                            }, void 0, false, {\n                                fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GlobalSettings__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                globalSettings: globalSettings || {},\n                                setGlobalSettings: setGlobalSettings\n                            }, void 0, false, {\n                                fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TaskTable__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                tasks: tasks || [],\n                                setTasks: setTasks,\n                                globalSettings: globalSettings || {}\n                            }, void 0, false, {\n                                fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Summary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                tasks: tasks || [],\n                                clientData: clientData || {},\n                                globalSettings: globalSettings || {}\n                            }, void 0, false, {\n                                fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\index.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"YiQGwwE9rKr//YF93QVenf1dXKU=\", false, function() {\n    return [\n        _contexts_AppContext__WEBPACK_IMPORTED_MODULE_7__.useApp\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2E7QUFDTTtBQUNKO0FBQ2M7QUFDUjtBQUNGO0FBRWpDLFNBQVNPOztJQUNwQixNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHUCw0REFBTUE7SUFFaEcscUJBQ0ksOERBQUNMLDBEQUFNQTs7MEJBQ0gsOERBQUNELGtEQUFJQTs7a0NBQ0QsOERBQUNjO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR3JDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ2QsOERBQVVBO2dDQUNQSyxZQUFZQSxjQUFjLENBQUM7Z0NBQzNCQyxlQUFlQTs7Ozs7OzBDQUVuQiw4REFBQ1Asa0VBQWNBO2dDQUNYUSxnQkFBZ0JBLGtCQUFrQixDQUFDO2dDQUNuQ0MsbUJBQW1CQTs7Ozs7OzBDQUV2Qiw4REFBQ1gsNkRBQVNBO2dDQUNOTSxPQUFPQSxTQUFTLEVBQUU7Z0NBQ2xCQyxVQUFVQTtnQ0FDVkcsZ0JBQWdCQSxrQkFBa0IsQ0FBQzs7Ozs7OzBDQUV2Qyw4REFBQ1QsMkRBQU9BO2dDQUNKSyxPQUFPQSxTQUFTLEVBQUU7Z0NBQ2xCRSxZQUFZQSxjQUFjLENBQUM7Z0NBQzNCRSxnQkFBZ0JBLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9EO0dBcEN3Qkw7O1FBQ3NFRCx3REFBTUE7OztLQUQ1RUMiLCJzb3VyY2VzIjpbIkM6XFxteVByb2plY3RzXFxUYXNrLUNvc3QtQ2FsY3VsYXRvci1OZXh0XFxwYWdlc1xcaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBUYXNrVGFibGUgZnJvbSAnLi4vY29tcG9uZW50cy9UYXNrVGFibGUnO1xyXG5pbXBvcnQgU3VtbWFyeSBmcm9tICcuLi9jb21wb25lbnRzL1N1bW1hcnknO1xyXG5pbXBvcnQgR2xvYmFsU2V0dGluZ3MgZnJvbSAnLi4vY29tcG9uZW50cy9HbG9iYWxTZXR0aW5ncyc7XHJcbmltcG9ydCBDbGllbnRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xpZW50Rm9ybSc7XHJcbmltcG9ydCB7IHVzZUFwcCB9IGZyb20gJy4uL2NvbnRleHRzL0FwcENvbnRleHQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHsgdGFza3MsIHNldFRhc2tzLCBjbGllbnREYXRhLCBzZXRDbGllbnREYXRhLCBnbG9iYWxTZXR0aW5ncywgc2V0R2xvYmFsU2V0dGluZ3MgfSA9IHVzZUFwcCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+VGFzayBDb3N0IENhbGN1bGF0b3I8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlRhc2sgQ29zdCBDYWxjdWxhdG9yIGZvciBtYW5hZ2luZyBhbmQgc3VtbWFyaXppbmcgcHJvamVjdCB0YXNrcy5cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xpZW50Rm9ybSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudERhdGE9e2NsaWVudERhdGEgfHwge319IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpZW50RGF0YT17c2V0Q2xpZW50RGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHbG9iYWxTZXR0aW5ncyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNldHRpbmdzPXtnbG9iYWxTZXR0aW5ncyB8fCB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHbG9iYWxTZXR0aW5ncz17c2V0R2xvYmFsU2V0dGluZ3N9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFza1RhYmxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza3M9e3Rhc2tzIHx8IFtdfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRhc2tzPXtzZXRUYXNrc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxTZXR0aW5ncz17Z2xvYmFsU2V0dGluZ3MgfHwge319IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VtbWFyeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzPXt0YXNrcyB8fCBbXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnREYXRhPXtjbGllbnREYXRhIHx8IHt9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFNldHRpbmdzPXtnbG9iYWxTZXR0aW5ncyB8fCB7fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGF5b3V0IiwiVGFza1RhYmxlIiwiU3VtbWFyeSIsIkdsb2JhbFNldHRpbmdzIiwiQ2xpZW50Rm9ybSIsInVzZUFwcCIsIkhvbWUiLCJ0YXNrcyIsInNldFRhc2tzIiwiY2xpZW50RGF0YSIsInNldENsaWVudERhdGEiLCJnbG9iYWxTZXR0aW5ncyIsInNldEdsb2JhbFNldHRpbmdzIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});