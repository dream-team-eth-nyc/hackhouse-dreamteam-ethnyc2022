"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/GuildCard/GuildCard.tsx":
/*!********************************************!*\
  !*** ./components/GuildCard/GuildCard.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_truncateText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/truncateText */ \"./utils/truncateText.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/tanzeela.khan/Projects/Personal/dream-team/wagmi/frontend/components/GuildCard/GuildCard.tsx\";\n\n\n\n\n\nconst GuildCard = ({\n  name,\n  address,\n  image,\n  members,\n  numGames,\n  numNfts,\n  games\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n  spacing: 12,\n  bgColor: \"gray.900\",\n  px: 12,\n  py: 8,\n  borderRadius: \"md\",\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n    size: \"xl\",\n    name: name,\n    src: image\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n    justifyContent: \"start\",\n    alignItems: \"start\",\n    spacing: 2,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n        as: \"h3\",\n        fontSize: \"lg\",\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        color: \"gray.500\",\n        children: (0,_utils_truncateText__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        fontSize: \"xs\",\n        color: \"gray.300\",\n        children: [members.length, \" Members\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, undefined), members.slice(0, 8).map(({\n        name: memberName,\n        image\n      }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {\n        size: \"2xs\",\n        name: memberName,\n        src: image\n      }, memberName + image, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, undefined)), members.length > 8 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n        fontSize: \"xs\",\n        children: [\"+\", members.length - 8]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, undefined) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n      justifyContent: \"space-between\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n          children: \"$2.5k earned\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n          children: [numNfts, \" NFTs\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n          children: [numGames, \" Games\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n      fontSize: \"xs\",\n      color: \"gray.500\",\n      children: \"Games\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {\n      children: games.map(game => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {\n          bgColor: \"gray.700\",\n          color: \"gray.50\",\n          children: game\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, undefined)\n      }, game, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 34,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GuildCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCRixlQWtDRSw4REFBQyxrREFBRDtBQUFNLGNBQVEsRUFBQyxJQUFmO0FBQW9CLFdBQUssRUFBQyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQ0YsZUFxQ0UsOERBQUMsa0RBQUQ7QUFBQSxnQkFDR0UsS0FBSyxDQUFDRyxHQUFOLENBQVdFLElBQUQsaUJBQ1QsOERBQUMsc0RBQUQ7QUFBQSwrQkFDRSw4REFBQyxpREFBRDtBQUFLLGlCQUFPLEVBQUMsVUFBYjtBQUF3QixlQUFLLEVBQUMsU0FBOUI7QUFBQSxvQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBZUEsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7O0FBNkRBLGlFQUFlWixTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL0d1aWxkQ2FyZC9HdWlsZENhcmQudHN4P2EzNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXZhdGFyLFxuICBTdGFjayxcbiAgSGVhZGluZyxcbiAgSFN0YWNrLFxuICBWU3RhY2ssXG4gIFRhZyxcbiAgVGV4dCxcbiAgV3JhcCxcbiAgV3JhcEl0ZW0sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgdHJ1bmNhdGVUZXh0IGZyb20gXCIuLi8uLi91dGlscy90cnVuY2F0ZVRleHRcIjtcblxudHlwZSBHdWlsZENhcmRQcm9wcyA9IHtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgYWRkcmVzczogc3RyaW5nO1xuICBtZW1iZXJzPzogeyBpbWFnZT86IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXTtcbiAgbnVtTmZ0czogbnVtYmVyO1xuICBudW1HYW1lczogbnVtYmVyO1xuICBnYW1lczogc3RyaW5nW107XG59O1xuXG5jb25zdCBHdWlsZENhcmQ6IFJlYWN0LkZDPEd1aWxkQ2FyZFByb3BzPiA9ICh7XG4gIG5hbWUsXG4gIGFkZHJlc3MsXG4gIGltYWdlLFxuICBtZW1iZXJzLFxuICBudW1HYW1lcyxcbiAgbnVtTmZ0cyxcbiAgZ2FtZXMsXG59KSA9PiAoXG4gIDxIU3RhY2sgc3BhY2luZz17MTJ9IGJnQ29sb3I9XCJncmF5LjkwMFwiIHB4PXsxMn0gcHk9ezh9IGJvcmRlclJhZGl1cz1cIm1kXCI+XG4gICAgPEF2YXRhciBzaXplPVwieGxcIiBuYW1lPXtuYW1lfSBzcmM9e2ltYWdlfSAvPlxuICAgIDxTdGFjayBqdXN0aWZ5Q29udGVudD1cInN0YXJ0XCIgYWxpZ25JdGVtcz1cInN0YXJ0XCIgc3BhY2luZz17Mn0+XG4gICAgICA8SFN0YWNrIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIGZvbnRTaXplPVwibGdcIj5cbiAgICAgICAgICB7bmFtZX1cbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBjb2xvcj1cImdyYXkuNTAwXCI+e3RydW5jYXRlVGV4dChhZGRyZXNzKX08L1RleHQ+XG4gICAgICA8L0hTdGFjaz5cbiAgICAgIDxIU3RhY2s+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwieHNcIiBjb2xvcj1cImdyYXkuMzAwXCI+XG4gICAgICAgICAge21lbWJlcnMubGVuZ3RofSBNZW1iZXJzXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICAge21lbWJlcnMuc2xpY2UoMCwgOCkubWFwKCh7IG5hbWU6IG1lbWJlck5hbWUsIGltYWdlIH0pID0+IChcbiAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICBzaXplPVwiMnhzXCJcbiAgICAgICAgICAgIG5hbWU9e21lbWJlck5hbWV9XG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAga2V5PXttZW1iZXJOYW1lICsgaW1hZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIHttZW1iZXJzLmxlbmd0aCA+IDggPyAoXG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4c1wiPit7bWVtYmVycy5sZW5ndGggLSA4fTwvVGV4dD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0hTdGFjaz5cbiAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgPFRleHQ+JDIuNWsgZWFybmVkPC9UZXh0PlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPEhTdGFjaz5cbiAgICAgICAgICA8VGV4dD57bnVtTmZ0c30gTkZUczwvVGV4dD5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICAgIDxIU3RhY2s+XG4gICAgICAgICAgPFRleHQ+e251bUdhbWVzfSBHYW1lczwvVGV4dD5cbiAgICAgICAgPC9IU3RhY2s+XG4gICAgICA8L0hTdGFjaz5cbiAgICAgIDxUZXh0IGZvbnRTaXplPVwieHNcIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAgIEdhbWVzXG4gICAgICA8L1RleHQ+XG4gICAgICA8V3JhcD5cbiAgICAgICAge2dhbWVzLm1hcCgoZ2FtZSkgPT4gKFxuICAgICAgICAgIDxXcmFwSXRlbSBrZXk9e2dhbWV9PlxuICAgICAgICAgICAgPFRhZyBiZ0NvbG9yPVwiZ3JheS43MDBcIiBjb2xvcj1cImdyYXkuNTBcIj5cbiAgICAgICAgICAgICAge2dhbWV9XG4gICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvV3JhcD5cbiAgICA8L1N0YWNrPlxuICA8L0hTdGFjaz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEd1aWxkQ2FyZDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIlN0YWNrIiwiSGVhZGluZyIsIkhTdGFjayIsIlRhZyIsIlRleHQiLCJXcmFwIiwiV3JhcEl0ZW0iLCJ0cnVuY2F0ZVRleHQiLCJHdWlsZENhcmQiLCJuYW1lIiwiYWRkcmVzcyIsImltYWdlIiwibWVtYmVycyIsIm51bUdhbWVzIiwibnVtTmZ0cyIsImdhbWVzIiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJtZW1iZXJOYW1lIiwiZ2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/GuildCard/GuildCard.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_GuildCard_GuildCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/GuildCard/GuildCard */ \"./components/GuildCard/GuildCard.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/tanzeela.khan/Projects/Personal/dream-team/wagmi/frontend/pages/index.tsx\";\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {\n      alignItems: \"center\",\n      justifyContent: \"space-between\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.HStack, {\n        spacing: 4,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading, {\n          children: \"Your Guilds\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {\n          textDecoration: \"underline\",\n          color: \"gray.400\",\n          children: \"(2 pending)\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Button, {\n        colorScheme: \"blue\",\n        size: \"lg\",\n        leftIcon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlinePlus, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 56\n        }, undefined),\n        children: \"Create Guild\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.SimpleGrid, {\n      columns: 2,\n      spacing: 8,\n      mt: 8,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_GuildCard_GuildCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        name: \"Dragon Guild\",\n        address: \"0x66C692026043a4E2E3276dceB7Fa476167CA0C09\",\n        members: [{\n          name: \"Test\"\n        }, {\n          name: \"Test 2\"\n        }],\n        numNfts: 12,\n        numGames: 8,\n        games: [\"Axie Infinity\", \"Eve Online\", \"Ember Swords\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFTQTtBQUNBOzs7QUFFQSxNQUFNUSxJQUFjLEdBQUcsTUFBTTtBQUMzQixzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQVEsZ0JBQVUsRUFBQyxRQUFuQjtBQUE0QixvQkFBYyxFQUFDLGVBQTNDO0FBQUEsOEJBQ0UsOERBQUMsb0RBQUQ7QUFBUSxlQUFPLEVBQUUsQ0FBakI7QUFBQSxnQ0FDRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sd0JBQWMsRUFBQyxXQUFyQjtBQUFpQyxlQUFLLEVBQUMsVUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UsOERBQUMsb0RBQUQ7QUFBUSxtQkFBVyxFQUFDLE1BQXBCO0FBQTJCLFlBQUksRUFBQyxJQUFoQztBQUFxQyxnQkFBUSxlQUFFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFLDhEQUFDLHdEQUFEO0FBQVksYUFBTyxFQUFFLENBQXJCO0FBQXdCLGFBQU8sRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBQSw2QkFDRSw4REFBQyx1RUFBRDtBQUNFLFlBQUksRUFBQyxjQURQO0FBRUUsZUFBTyxFQUFDLDRDQUZWO0FBR0UsZUFBTyxFQUFFLENBQ1A7QUFDRUMsVUFBQUEsSUFBSSxFQUFFO0FBRFIsU0FETyxFQUlQO0FBQUVBLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBSk8sQ0FIWDtBQVNFLGVBQU8sRUFBRSxFQVRYO0FBVUUsZ0JBQVEsRUFBRSxDQVZaO0FBV0UsYUFBSyxFQUFFLENBQUMsZUFBRCxFQUFrQixZQUFsQixFQUFnQyxjQUFoQztBQVhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOEJELENBL0JEOztBQWlDQSxpRUFBZUQsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGV4dCxcbiAgQ29udGFpbmVyLFxuICBIZWFkaW5nLFxuICBIU3RhY2ssXG4gIFNpbXBsZUdyaWQsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IEFpT3V0bGluZVBsdXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCBHdWlsZENhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9HdWlsZENhcmQvR3VpbGRDYXJkXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SFN0YWNrIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgPEhTdGFjayBzcGFjaW5nPXs0fT5cbiAgICAgICAgICA8SGVhZGluZz5Zb3VyIEd1aWxkczwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCB0ZXh0RGVjb3JhdGlvbj1cInVuZGVybGluZVwiIGNvbG9yPVwiZ3JheS40MDBcIj5cbiAgICAgICAgICAgICgyIHBlbmRpbmcpXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0hTdGFjaz5cbiAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBzaXplPVwibGdcIiBsZWZ0SWNvbj17PEFpT3V0bGluZVBsdXMgLz59PlxuICAgICAgICAgIENyZWF0ZSBHdWlsZFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvSFN0YWNrPlxuICAgICAgPFNpbXBsZUdyaWQgY29sdW1ucz17Mn0gc3BhY2luZz17OH0gbXQ9ezh9PlxuICAgICAgICA8R3VpbGRDYXJkXG4gICAgICAgICAgbmFtZT1cIkRyYWdvbiBHdWlsZFwiXG4gICAgICAgICAgYWRkcmVzcz1cIjB4NjZDNjkyMDI2MDQzYTRFMkUzMjc2ZGNlQjdGYTQ3NjE2N0NBMEMwOVwiXG4gICAgICAgICAgbWVtYmVycz17W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIlRlc3RcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiVGVzdCAyXCIgfSxcbiAgICAgICAgICBdfVxuICAgICAgICAgIG51bU5mdHM9ezEyfVxuICAgICAgICAgIG51bUdhbWVzPXs4fVxuICAgICAgICAgIGdhbWVzPXtbXCJBeGllIEluZmluaXR5XCIsIFwiRXZlIE9ubGluZVwiLCBcIkVtYmVyIFN3b3Jkc1wiXX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiVGV4dCIsIkNvbnRhaW5lciIsIkhlYWRpbmciLCJIU3RhY2siLCJTaW1wbGVHcmlkIiwiQnV0dG9uIiwiQWlPdXRsaW5lUGx1cyIsIkd1aWxkQ2FyZCIsIkhvbWUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./utils/truncateText.ts":
/*!*******************************!*\
  !*** ./utils/truncateText.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst truncateText = text => text.length >= 6 ? `${text.substring(0, 4)}...${text.substring(text.length - 3)}` : text;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (truncateText);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90cnVuY2F0ZVRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFlBQVksR0FBSUMsSUFBRCxJQUNuQkEsSUFBSSxDQUFDQyxNQUFMLElBQWUsQ0FBZixHQUNLLEdBQUVELElBQUksQ0FBQ0UsU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBcUIsTUFBS0YsSUFBSSxDQUFDRSxTQUFMLENBQWVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLENBQTdCLENBQWdDLEVBRGpFLEdBRUlELElBSE47O0FBS0EsaUVBQWVELFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3V0aWxzL3RydW5jYXRlVGV4dC50cz84OWMxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRydW5jYXRlVGV4dCA9ICh0ZXh0OiBzdHJpbmcpID0+XG4gIHRleHQubGVuZ3RoID49IDZcbiAgICA/IGAke3RleHQuc3Vic3RyaW5nKDAsIDQpfS4uLiR7dGV4dC5zdWJzdHJpbmcodGV4dC5sZW5ndGggLSAzKX1gXG4gICAgOiB0ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCB0cnVuY2F0ZVRleHQ7XG4iXSwibmFtZXMiOlsidHJ1bmNhdGVUZXh0IiwidGV4dCIsImxlbmd0aCIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/truncateText.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();