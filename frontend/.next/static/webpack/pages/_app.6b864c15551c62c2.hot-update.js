"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3modal/wagmi/react */ \"./node_modules/@web3modal/wagmi/dist/esm/exports/react.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/chains */ \"./node_modules/wagmi/dist/chains.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.avalanche,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.bsc,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.gnosis,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_4__.fantom\n];\n// 1. Get projectID at https://cloud.walletconnect.com\nconst projectId = \"5623bd8168bfc38eb8524655b6647f7c\" || 0;\nconst metadata = {\n    name: \"Next Starter Template\",\n    description: \"A Next.js starter template with Web3Modal v3 + Wagmi\",\n    url: \"https://web3modal.com\",\n    icons: [\n        \"https://avatars.githubusercontent.com/u/37784886\"\n    ]\n};\nconst wagmiConfig = (0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__.defaultWagmiConfig)({\n    chains,\n    projectId,\n    metadata\n});\n(0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_2__.createWeb3Modal)({\n    wagmiConfig,\n    projectId,\n    chains\n});\nfunction App(param) {\n    let { Component, pageProps } = param;\n    _s();\n    const [ready, setReady] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setReady(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: ready ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n            config: wagmiConfig,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/harshsingh/projects/scaling-eth/frontend/src/pages/_app.tsx\",\n                lineNumber: 54,\n                columnNumber: 6\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/harshsingh/projects/scaling-eth/frontend/src/pages/_app.tsx\",\n            lineNumber: 53,\n            columnNumber: 5\n        }, this) : null\n    }, void 0, false);\n}\n_s(App, \"KuazqYXqOk+6VRk8yHVvoClyoeE=\");\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQytDO0FBRXpDO0FBRVE7QUFVdEI7QUFFdEIsTUFBTWEsU0FBUztJQUNkSCxpREFBT0E7SUFDUEUsaURBQU9BO0lBQ1BOLG1EQUFTQTtJQUNURCxrREFBUUE7SUFDUkUsNkNBQUdBO0lBQ0hJLGtEQUFRQTtJQUNSRixnREFBTUE7SUFDTkQsZ0RBQU1BO0NBQ047QUFFRCxzREFBc0Q7QUFFdEQsTUFBTU0sWUFBWUMsa0NBQWtDLElBQUksQ0FBRTtBQUUxRCxNQUFNRyxXQUFXO0lBQ2hCQyxNQUFNO0lBQ05DLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBbUQ7QUFDNUQ7QUFFQSxNQUFNQyxjQUFjdEIsMEVBQWtCQSxDQUFDO0lBQUVZO0lBQVFDO0lBQVdJO0FBQVM7QUFFckVsQix1RUFBZUEsQ0FBQztJQUFFdUI7SUFBYVQ7SUFBV0Q7QUFBTztBQUVsQyxTQUFTVyxJQUFJLEtBQWtDO1FBQWxDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZLEdBQWxDOztJQUMzQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRW5DRCxnREFBU0EsQ0FBQztRQUNUeUIsU0FBUztJQUNWLEdBQUcsRUFBRTtJQUNMLHFCQUNDO2tCQUNFRCxzQkFDQSw4REFBQ3pCLDhDQUFXQTtZQUFDMkIsUUFBUU47c0JBQ3BCLDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7O21CQUV0Qjs7QUFHUDtHQWZ3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZVdlYjNNb2RhbCwgZGVmYXVsdFdhZ21pQ29uZmlnIH0gZnJvbSBcIkB3ZWIzbW9kYWwvd2FnbWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdGFyYml0cnVtLFxuXHRhdmFsYW5jaGUsXG5cdGJzYyxcblx0ZmFudG9tLFxuXHRnbm9zaXMsXG5cdG1haW5uZXQsXG5cdG9wdGltaXNtLFxuXHRwb2x5Z29uLFxufSBmcm9tIFwid2FnbWkvY2hhaW5zXCI7XG5cbmNvbnN0IGNoYWlucyA9IFtcblx0bWFpbm5ldCxcblx0cG9seWdvbixcblx0YXZhbGFuY2hlLFxuXHRhcmJpdHJ1bSxcblx0YnNjLFxuXHRvcHRpbWlzbSxcblx0Z25vc2lzLFxuXHRmYW50b20sXG5dO1xuXG4vLyAxLiBHZXQgcHJvamVjdElEIGF0IGh0dHBzOi8vY2xvdWQud2FsbGV0Y29ubmVjdC5jb21cblxuY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCB8fCBcIlwiO1xuXG5jb25zdCBtZXRhZGF0YSA9IHtcblx0bmFtZTogXCJOZXh0IFN0YXJ0ZXIgVGVtcGxhdGVcIixcblx0ZGVzY3JpcHRpb246IFwiQSBOZXh0LmpzIHN0YXJ0ZXIgdGVtcGxhdGUgd2l0aCBXZWIzTW9kYWwgdjMgKyBXYWdtaVwiLFxuXHR1cmw6IFwiaHR0cHM6Ly93ZWIzbW9kYWwuY29tXCIsXG5cdGljb25zOiBbXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzc3ODQ4ODZcIl0sXG59O1xuXG5jb25zdCB3YWdtaUNvbmZpZyA9IGRlZmF1bHRXYWdtaUNvbmZpZyh7IGNoYWlucywgcHJvamVjdElkLCBtZXRhZGF0YSB9KTtcblxuY3JlYXRlV2ViM01vZGFsKHsgd2FnbWlDb25maWcsIHByb2plY3RJZCwgY2hhaW5zIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuXHRjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFJlYWR5KHRydWUpO1xuXHR9LCBbXSk7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHtyZWFkeSA/IChcblx0XHRcdFx0PFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDb25maWd9PlxuXHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdFx0PC9XYWdtaUNvbmZpZz5cblx0XHRcdCkgOiBudWxsfVxuXHRcdDwvPlxuXHQpO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVdlYjNNb2RhbCIsImRlZmF1bHRXYWdtaUNvbmZpZyIsIldhZ21pQ29uZmlnIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcmJpdHJ1bSIsImF2YWxhbmNoZSIsImJzYyIsImZhbnRvbSIsImdub3NpcyIsIm1haW5uZXQiLCJvcHRpbWlzbSIsInBvbHlnb24iLCJjaGFpbnMiLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsIm1ldGFkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJ3YWdtaUNvbmZpZyIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInJlYWR5Iiwic2V0UmVhZHkiLCJjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});