/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const board = num => {
  // if (!num || num < 8) return;
  const gameBoard = [];
  let j = 0;
  while (j !== num) {
    const row = [];
    for (let i = 0; i < num; i += 1) {
      row.push([j, i]);
    }
    gameBoard.push(row);
    j += 1;
  }
  return gameBoard;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (board);

/***/ }),

/***/ "./src/scripts/graphModule.js":
/*!************************************!*\
  !*** ./src/scripts/graphModule.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeGraph = board => {
  let grid = board.length * board[0].length;
  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;
  console.log(maxCol);
  console.log(maxRow);
  const Vertex = function (data) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    const vertices = args;
    const vertex = [data];
    const degree = [];
    vertices.forEach(incidence => {
      if (!incidence) return;
      degree.push(incidence);
    });
    vertex.push(degree);
    return vertex;
  };
  const getBoardValue = (board, row, col) => {
    if (row > maxRow || row < 0) return;
    if (col > maxCol || col < 0) return;
    const value = board[row][col];
    return value;
  };
  const buildGraph = board => {
    let row = 0;
    let col = 0;
    let square = 0;
    const move2 = 2;
    const move1 = 1;
    const Graph = [];
    const knightMoves = [];
    while (square !== grid) {
      if (col > maxCol) {
        row += 1;
        col = 0;
      }
      Graph.push(Vertex(getBoardValue(board, row, col), getBoardValue(board, row + move2, col + move1), getBoardValue(board, row + move2, col - move1), getBoardValue(board, row - move2, col - move1), getBoardValue(board, row - move2, col + move1), getBoardValue(board, row + move1, col + move2), getBoardValue(board, row - move1, col + move2), getBoardValue(board, row - move1, col - move2), getBoardValue(board, row + move1, col - move2)));
      col += 1;
      square += 1;
    }
    return Graph;
  };
  const graph = buildGraph(board);
  console.table(graph);
  return graph;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeGraph);

/***/ }),

/***/ "./src/scripts/knight.js":
/*!*******************************!*\
  !*** ./src/scripts/knight.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Knight = function (board) {
  const chessBoard = board;

  // const makeGraph = (board) => {

  // }

  // const startPosition = (row, col) => {
  //   // clearChessBoard();
  //   // for (let i = 0; i <= row; i += 1){
  //   //   chessBoard[i]
  //   // }
  //   chessBoard[row][col] = 1;
  //   // console.table(chessBoard);
  // }

  // return {startPosition}
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Knight);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ "./src/scripts/board.js");
/* harmony import */ var _scripts_knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/knight */ "./src/scripts/knight.js");
/* harmony import */ var _scripts_graphModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/graphModule */ "./src/scripts/graphModule.js");



const gameBoard = (0,_scripts_board__WEBPACK_IMPORTED_MODULE_0__["default"])(8);

// const knight = Knight(gameBoard);

// knight.startPosition(1,5);

const testObj = {};
for (let i = 0; i < 3; i += 1) {
  testObj[`edge${i}`] = 'test';
}
const testFactory = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  const edge = args;
  console.log(edge);
};
console.table(gameBoard);
const adjacencyList = (0,_scripts_graphModule__WEBPACK_IMPORTED_MODULE_2__["default"])(gameBoard);
console.log(adjacencyList);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L3NjcmlwdHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL2dyYXBoTW9kdWxlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9hcmQgPSAobnVtKSA9PiB7XG4gIC8vIGlmICghbnVtIHx8IG51bSA8IDgpIHJldHVybjtcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG5cbiAgbGV0IGogPSAwO1xuICB3aGlsZSAoaiAhPT0gbnVtKSB7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkgKz0gMSkge1xuICAgICAgcm93LnB1c2goW2osIGldKTtcbiAgICB9XG4gICAgZ2FtZUJvYXJkLnB1c2gocm93KTtcbiAgICBqICs9IDE7XG4gIH1cblxuICByZXR1cm4gZ2FtZUJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYm9hcmQ7XG4iLCJjb25zdCBtYWtlR3JhcGggPSAoYm9hcmQpID0+IHtcblxuICBsZXQgZ3JpZCA9IGJvYXJkLmxlbmd0aCAqIGJvYXJkWzBdLmxlbmd0aDtcbiAgbGV0IG1heFJvdyA9IGJvYXJkLmxlbmd0aCAtIDE7XG4gIGxldCBtYXhDb2wgPSBib2FyZFswXS5sZW5ndGggLSAxO1xuXG4gIGNvbnNvbGUubG9nKG1heENvbClcbiAgY29uc29sZS5sb2cobWF4Um93KTtcblxuXG4gIGNvbnN0IFZlcnRleCA9IChkYXRhLCAuLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgdmVydGljZXMgPSBhcmdzO1xuICAgIGNvbnN0IHZlcnRleCA9IFtkYXRhXTtcbiAgICBjb25zdCBkZWdyZWUgPSBbXVxuICAgIHZlcnRpY2VzLmZvckVhY2goKGluY2lkZW5jZSkgPT4ge1xuICAgICAgaWYgKCFpbmNpZGVuY2UpIHJldHVybjtcbiAgICAgIGRlZ3JlZS5wdXNoKGluY2lkZW5jZSk7XG4gICAgfSk7XG4gICAgdmVydGV4LnB1c2goZGVncmVlKVxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH07XG5cbiAgY29uc3QgZ2V0Qm9hcmRWYWx1ZSA9IChib2FyZCwgcm93LCBjb2wpID0+IHtcbiAgICBpZiAocm93ID4gbWF4Um93IHx8IHJvdyA8IDApIHJldHVybjtcbiAgICBpZiAoY29sID4gbWF4Q29sIHx8IGNvbCA8IDApIHJldHVyblxuICAgIGNvbnN0IHZhbHVlID0gYm9hcmRbcm93XVtjb2xdXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBjb25zdCBidWlsZEdyYXBoID0gKGJvYXJkKSA9PiB7XG4gICAgbGV0IHJvdyA9IDA7XG4gICAgbGV0IGNvbCA9IDA7XG4gICAgbGV0IHNxdWFyZSA9IDBcbiAgICBjb25zdCBtb3ZlMiA9IDI7XG4gICAgY29uc3QgbW92ZTEgPSAxO1xuICAgIGNvbnN0IEdyYXBoID0gW107XG4gICAgY29uc3Qga25pZ2h0TW92ZXMgPSBbXTtcblxuICAgIHdoaWxlIChzcXVhcmUgIT09IGdyaWQgKSB7XG4gICAgICBpZiAoY29sID4gbWF4Q29sICkge1xuICAgICAgICByb3cgKz0gMVxuICAgICAgICBjb2wgPSAwXG4gICAgICB9XG5cbiAgICAgIEdyYXBoLnB1c2goXG4gICAgICAgIFZlcnRleChcbiAgICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3csIGNvbCksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyArIG1vdmUyKSwgKGNvbCArIG1vdmUxKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyArIG1vdmUyKSwgKGNvbCAtIG1vdmUxKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyAtIG1vdmUyKSwgKGNvbCAtIG1vdmUxKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyAtIG1vdmUyKSwgKGNvbCArIG1vdmUxKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyArIG1vdmUxKSwgKGNvbCArIG1vdmUyKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyAtIG1vdmUxKSwgKGNvbCArIG1vdmUyKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyAtIG1vdmUxKSwgKGNvbCAtIG1vdmUyKSksXG4gICAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgKHJvdyArIG1vdmUxKSwgKGNvbCAtIG1vdmUyKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgY29sICs9IDFcbiAgICAgIHNxdWFyZSArPSAxXG4gICAgfVxuXG4gICAgIFxuICAgIHJldHVybiBHcmFwaDtcbiAgfTtcblxuICBjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoYm9hcmQpO1xuICBjb25zb2xlLnRhYmxlKGdyYXBoKTtcblxuICByZXR1cm4gZ3JhcGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlR3JhcGg7XG4iLCJjb25zdCBLbmlnaHQgPSBmdW5jdGlvbiAoYm9hcmQpIHtcbiAgY29uc3QgY2hlc3NCb2FyZCA9IGJvYXJkO1xuXG4gIC8vIGNvbnN0IG1ha2VHcmFwaCA9IChib2FyZCkgPT4ge1xuXG4gIC8vIH1cblxuICAvLyBjb25zdCBzdGFydFBvc2l0aW9uID0gKHJvdywgY29sKSA9PiB7XG4gIC8vICAgLy8gY2xlYXJDaGVzc0JvYXJkKCk7XG4gIC8vICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPD0gcm93OyBpICs9IDEpe1xuICAvLyAgIC8vICAgY2hlc3NCb2FyZFtpXVxuICAvLyAgIC8vIH1cbiAgLy8gICBjaGVzc0JvYXJkW3Jvd11bY29sXSA9IDE7XG4gIC8vICAgLy8gY29uc29sZS50YWJsZShjaGVzc0JvYXJkKTtcbiAgLy8gfVxuXG4gIC8vIHJldHVybiB7c3RhcnRQb3NpdGlvbn1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIlxuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9zY3JpcHRzL2tuaWdodFwiO1xuaW1wb3J0IG1ha2VHcmFwaCBmcm9tIFwiLi9zY3JpcHRzL2dyYXBoTW9kdWxlXCI7XG5cbmNvbnN0IGdhbWVCb2FyZCA9IGJvYXJkKDgpO1xuXG4vLyBjb25zdCBrbmlnaHQgPSBLbmlnaHQoZ2FtZUJvYXJkKTtcblxuXG4vLyBrbmlnaHQuc3RhcnRQb3NpdGlvbigxLDUpO1xuXG5jb25zdCB0ZXN0T2JqID0ge31cblxuZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9MSApIHtcbiAgdGVzdE9ialtgZWRnZSR7aX1gXSA9ICd0ZXN0JyBcbn1cblxuXG5jb25zdCB0ZXN0RmFjdG9yeSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IGVkZ2UgPSBhcmdzXG4gIGNvbnNvbGUubG9nKGVkZ2UpO1xufVxuXG5jb25zb2xlLnRhYmxlKGdhbWVCb2FyZClcblxuY29uc3QgYWRqYWNlbmN5TGlzdCA9IG1ha2VHcmFwaChnYW1lQm9hcmQpXG5cbmNvbnNvbGUubG9nKGFkamFjZW5jeUxpc3QpXG4iXSwibmFtZXMiOlsiYm9hcmQiLCJudW0iLCJnYW1lQm9hcmQiLCJqIiwicm93IiwiaSIsInB1c2giLCJtYWtlR3JhcGgiLCJncmlkIiwibGVuZ3RoIiwibWF4Um93IiwibWF4Q29sIiwiY29uc29sZSIsImxvZyIsIlZlcnRleCIsImRhdGEiLCJhcmdzIiwidmVydGljZXMiLCJ2ZXJ0ZXgiLCJkZWdyZWUiLCJmb3JFYWNoIiwiaW5jaWRlbmNlIiwiZ2V0Qm9hcmRWYWx1ZSIsImNvbCIsInZhbHVlIiwiYnVpbGRHcmFwaCIsInNxdWFyZSIsIm1vdmUyIiwibW92ZTEiLCJHcmFwaCIsImtuaWdodE1vdmVzIiwiZ3JhcGgiLCJ0YWJsZSIsIktuaWdodCIsImNoZXNzQm9hcmQiLCJ0ZXN0T2JqIiwidGVzdEZhY3RvcnkiLCJlZGdlIiwiYWRqYWNlbmN5TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=