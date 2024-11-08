/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n // Ваши глобальные стили, если есть\n\nfunction App({ Component, pageProps }) {\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [globalSettings, setGlobalSettings] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        hourlyRate: 0,\n        globalDiscount: 0,\n        taxRate: 0,\n        includeTaxInCost: true\n    });\n    const [clientData, setClientData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        name: '',\n        email: '',\n        phone: '',\n        address: ''\n    });\n    // Загрузка данных только на клиенте\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"App.useEffect\": ()=>{\n            try {\n                const savedTasks = localStorage.getItem('tasks');\n                if (savedTasks) {\n                    setTasks(JSON.parse(savedTasks));\n                }\n                const savedSettings = localStorage.getItem('globalSettings');\n                if (savedSettings) {\n                    setGlobalSettings(JSON.parse(savedSettings));\n                }\n                const savedClientData = localStorage.getItem('clientData');\n                if (savedClientData) {\n                    setClientData(JSON.parse(savedClientData));\n                }\n            } catch (error) {\n                console.error('Error loading data:', error);\n            }\n        }\n    }[\"App.useEffect\"], []);\n    // Сохранение данных при изменениях\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"App.useEffect\": ()=>{\n            if (tasks) localStorage.setItem('tasks', JSON.stringify(tasks));\n        }\n    }[\"App.useEffect\"], [\n        tasks\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"App.useEffect\": ()=>{\n            if (globalSettings) localStorage.setItem('globalSettings', JSON.stringify(globalSettings));\n        }\n    }[\"App.useEffect\"], [\n        globalSettings\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"App.useEffect\": ()=>{\n            if (clientData) localStorage.setItem('clientData', JSON.stringify(clientData));\n        }\n    }[\"App.useEffect\"], [\n        clientData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"App.useEffect\": ()=>{\n            // Импортируем Bootstrap JS только на клиенте\n            if (false) {}\n        }\n    }[\"App.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        tasks: tasks,\n        setTasks: setTasks,\n        globalSettings: globalSettings,\n        setGlobalSettings: setGlobalSettings,\n        clientData: clientData,\n        setClientData: setClientData\n    }, void 0, false, {\n        fileName: \"C:\\\\myProjects\\\\Task-Cost-Calculator-Next\\\\pages\\\\_app.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDaEIsQ0FBQyxtQ0FBbUM7QUFDdEI7QUFFN0IsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNoRCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ2pEUSxZQUFZO1FBQ1pDLGdCQUFnQjtRQUNoQkMsU0FBUztRQUNUQyxrQkFBa0I7SUFDdEI7SUFDQSxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7UUFDekNjLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFNBQVM7SUFDYjtJQUVBLG9DQUFvQztJQUNwQ2xCLGdEQUFTQTt5QkFBQztZQUNOLElBQUk7Z0JBQ0EsTUFBTW1CLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztnQkFDeEMsSUFBSUYsWUFBWTtvQkFDWmIsU0FBU2dCLEtBQUtDLEtBQUssQ0FBQ0o7Z0JBQ3hCO2dCQUVBLE1BQU1LLGdCQUFnQkosYUFBYUMsT0FBTyxDQUFDO2dCQUMzQyxJQUFJRyxlQUFlO29CQUNmaEIsa0JBQWtCYyxLQUFLQyxLQUFLLENBQUNDO2dCQUNqQztnQkFFQSxNQUFNQyxrQkFBa0JMLGFBQWFDLE9BQU8sQ0FBQztnQkFDN0MsSUFBSUksaUJBQWlCO29CQUNqQlgsY0FBY1EsS0FBS0MsS0FBSyxDQUFDRTtnQkFDN0I7WUFDSixFQUFFLE9BQU9DLE9BQU87Z0JBQ1pDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3pDO1FBQ0o7d0JBQUcsRUFBRTtJQUVMLG1DQUFtQztJQUNuQzFCLGdEQUFTQTt5QkFBQztZQUNOLElBQUlLLE9BQU9lLGFBQWFRLE9BQU8sQ0FBQyxTQUFTTixLQUFLTyxTQUFTLENBQUN4QjtRQUM1RDt3QkFBRztRQUFDQTtLQUFNO0lBRVZMLGdEQUFTQTt5QkFBQztZQUNOLElBQUlPLGdCQUFnQmEsYUFBYVEsT0FBTyxDQUFDLGtCQUFrQk4sS0FBS08sU0FBUyxDQUFDdEI7UUFDOUU7d0JBQUc7UUFBQ0E7S0FBZTtJQUVuQlAsZ0RBQVNBO3lCQUFDO1lBQ04sSUFBSWEsWUFBWU8sYUFBYVEsT0FBTyxDQUFDLGNBQWNOLEtBQUtPLFNBQVMsQ0FBQ2hCO1FBQ3RFO3dCQUFHO1FBQUNBO0tBQVc7SUFFZmIsZ0RBQVNBO3lCQUFDO1lBQ04sNkNBQTZDO1lBQzdDLElBQUksS0FBNkIsRUFBRSxFQUVsQztRQUNMO3dCQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFDSSxHQUFHQyxTQUFTO1FBQ2JDLE9BQU9BO1FBQ1BDLFVBQVVBO1FBQ1ZDLGdCQUFnQkE7UUFDaEJDLG1CQUFtQkE7UUFDbkJLLFlBQVlBO1FBQ1pDLGVBQWVBOzs7Ozs7QUFHM0IiLCJzb3VyY2VzIjpbIkM6XFxteVByb2plY3RzXFxUYXNrLUNvc3QtQ2FsY3VsYXRvci1OZXh0XFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnOyAvLyDQktCw0YjQuCDQs9C70L7QsdCw0LvRjNC90YvQtSDRgdGC0LjQu9C4LCDQtdGB0LvQuCDQtdGB0YLRjFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ2xvYmFsU2V0dGluZ3MsIHNldEdsb2JhbFNldHRpbmdzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBob3VybHlSYXRlOiAwLFxyXG4gICAgICAgIGdsb2JhbERpc2NvdW50OiAwLFxyXG4gICAgICAgIHRheFJhdGU6IDAsXHJcbiAgICAgICAgaW5jbHVkZVRheEluQ29zdDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbY2xpZW50RGF0YSwgc2V0Q2xpZW50RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICBhZGRyZXNzOiAnJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUg0YLQvtC70YzQutC+INC90LAg0LrQu9C40LXQvdGC0LVcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgc2F2ZWRUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpO1xyXG4gICAgICAgICAgICBpZiAoc2F2ZWRUYXNrcykge1xyXG4gICAgICAgICAgICAgICAgc2V0VGFza3MoSlNPTi5wYXJzZShzYXZlZFRhc2tzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkU2V0dGluZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ2xvYmFsU2V0dGluZ3MnKTtcclxuICAgICAgICAgICAgaWYgKHNhdmVkU2V0dGluZ3MpIHtcclxuICAgICAgICAgICAgICAgIHNldEdsb2JhbFNldHRpbmdzKEpTT04ucGFyc2Uoc2F2ZWRTZXR0aW5ncykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYXZlZENsaWVudERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2xpZW50RGF0YScpO1xyXG4gICAgICAgICAgICBpZiAoc2F2ZWRDbGllbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRDbGllbnREYXRhKEpTT04ucGFyc2Uoc2F2ZWRDbGllbnREYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyDQodC+0YXRgNCw0L3QtdC90LjQtSDQtNCw0L3QvdGL0YUg0L/RgNC4INC40LfQvNC10L3QtdC90LjRj9GFXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0YXNrcykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcclxuICAgIH0sIFt0YXNrc10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdsb2JhbFNldHRpbmdzKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ2xvYmFsU2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShnbG9iYWxTZXR0aW5ncykpO1xyXG4gICAgfSwgW2dsb2JhbFNldHRpbmdzXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2xpZW50RGF0YSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NsaWVudERhdGEnLCBKU09OLnN0cmluZ2lmeShjbGllbnREYXRhKSk7XHJcbiAgICB9LCBbY2xpZW50RGF0YV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8g0JjQvNC/0L7RgNGC0LjRgNGD0LXQvCBCb290c3RyYXAgSlMg0YLQvtC70YzQutC+INC90LAg0LrQu9C40LXQvdGC0LVcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgcmVxdWlyZSgnYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanMnKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29tcG9uZW50IFxyXG4gICAgICAgICAgICB7Li4ucGFnZVByb3BzfSBcclxuICAgICAgICAgICAgdGFza3M9e3Rhc2tzfVxyXG4gICAgICAgICAgICBzZXRUYXNrcz17c2V0VGFza3N9XHJcbiAgICAgICAgICAgIGdsb2JhbFNldHRpbmdzPXtnbG9iYWxTZXR0aW5nc31cclxuICAgICAgICAgICAgc2V0R2xvYmFsU2V0dGluZ3M9e3NldEdsb2JhbFNldHRpbmdzfVxyXG4gICAgICAgICAgICBjbGllbnREYXRhPXtjbGllbnREYXRhfVxyXG4gICAgICAgICAgICBzZXRDbGllbnREYXRhPXtzZXRDbGllbnREYXRhfVxyXG4gICAgICAgIC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRhc2tzIiwic2V0VGFza3MiLCJnbG9iYWxTZXR0aW5ncyIsInNldEdsb2JhbFNldHRpbmdzIiwiaG91cmx5UmF0ZSIsImdsb2JhbERpc2NvdW50IiwidGF4UmF0ZSIsImluY2x1ZGVUYXhJbkNvc3QiLCJjbGllbnREYXRhIiwic2V0Q2xpZW50RGF0YSIsIm5hbWUiLCJlbWFpbCIsInBob25lIiwiYWRkcmVzcyIsInNhdmVkVGFza3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2F2ZWRTZXR0aW5ncyIsInNhdmVkQ2xpZW50RGF0YSIsImVycm9yIiwiY29uc29sZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZXF1aXJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();