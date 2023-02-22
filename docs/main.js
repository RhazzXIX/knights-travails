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
  let totalGrid = board.length * board[0].length;
  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;
  const Vertex = function (data) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    const vertices = args;
    const vertex = {
      move: data,
      adjacent: []
    };
    vertices.forEach(edge => {
      if (!edge) return;
      vertex.adjacent.push(edge);
    });
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
    const Graph = {};
    const knightMoves = [];
    while (square !== totalGrid) {
      if (col > maxCol) {
        row += 1;
        col = 0;
      }
      Graph[`vertex${square}`] = Vertex(getBoardValue(board, row, col), getBoardValue(board, row - move2, col - move1), getBoardValue(board, row - move2, col + move1), getBoardValue(board, row - move1, col - move2), getBoardValue(board, row - move1, col + move2), getBoardValue(board, row + move1, col - move2), getBoardValue(board, row + move1, col + move2), getBoardValue(board, row + move2, col - move1), getBoardValue(board, row + move2, col + move1));
      col += 1;
      square += 1;
    }
    return Graph;
  };
  const graph = buildGraph(board);
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
/* harmony import */ var _graphModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphModule */ "./src/scripts/graphModule.js");

const Knight = function (board) {
  const possibleMoves = (0,_graphModule__WEBPACK_IMPORTED_MODULE_0__["default"])(board);
  const chessBoard = board;
  const movesArray = [];
  const queueArray = [];
  let endGrid;
  let startPosition;
  let endPosition;
  let traced = false;
  const getBoardGrid = grid => {
    if (!grid) return;
    return chessBoard[grid[0]][grid[1]];
  };
  const traceMoves = () => {
    if (!queueArray.length) {
      traced = false;
      return;
    }
    queueArray[0].adjacent.forEach(adjacent => {
      if (traced) return;
      Object.values(possibleMoves).forEach((vertex, i, arr) => {
        if (traced) return;
        if (vertex.distance !== undefined || vertex.source !== undefined) return;
        if (vertex.move === adjacent) {
          if (vertex.move === endPosition) {
            vertex.distance = queueArray[0].distance + 1;
            vertex.source = queueArray[0];
            endGrid = vertex;
            traced = true;
            queueArray.splice(0);
            return;
          }
          vertex.distance = queueArray[0].distance + 1;
          vertex.source = queueArray[0];
          queueArray.push(vertex);
          arr.splice(i);
        }
      });
    });
    queueArray.shift();
    traceMoves();
  };
  const getMoves = vertex => {
    if (vertex.source === null) {
      movesArray.push(vertex.move);
      return;
    }
    getMoves(vertex.source);
    movesArray.push(vertex.move);
  };
  const printMoves = () => {
    console.log(`You made it in ${endGrid.distance} moves! Here's your path:`);
    movesArray.forEach(move => {
      console.log(move);
    });
  };
  const clearVertexSrcDist = () => {
    const vertices = Object.values(possibleMoves);
    vertices.forEach(vertex => {
      delete vertex.distance;
      delete vertex.source;
    });
  };
  const moves = (start, end) => {
    startPosition = getBoardGrid(start);
    endPosition = getBoardGrid(end);
    if (startPosition === endPosition) {
      console.log(`Please enter a different starting and ending position`);
      return;
    }
    movesArray.splice(0);
    queueArray.splice(0);
    Object.values(possibleMoves).forEach((vertex, i, arr) => {
      if (vertex.move === startPosition) {
        vertex.distance = 0;
        vertex.source = null;
        queueArray.push(vertex);
        arr.splice(i);
      }
    });
    traceMoves();
    getMoves(endGrid);
    printMoves();
    clearVertexSrcDist();
  };
  return {
    moves
  };
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


const gameBoard = (0,_scripts_board__WEBPACK_IMPORTED_MODULE_0__["default"])(8);
const knight = (0,_scripts_knight__WEBPACK_IMPORTED_MODULE_1__["default"])(gameBoard);
knight.moves([0, 0], [1, 2]);
knight.moves([0, 0], [3, 3]);
knight.moves([3, 3], [0, 0]);
knight.moves([0, 0], [7, 7]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNFO0FBRXRDLE1BQU03QixTQUFTLEdBQUdGLDBEQUFLLENBQUMsQ0FBQyxDQUFDO0FBRTFCLE1BQU0yRCxNQUFNLEdBQUc1QiwyREFBTSxDQUFDN0IsU0FBUyxDQUFDO0FBRWhDeUQsTUFBTSxDQUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUJHLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCRyxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUMxQkcsTUFBTSxDQUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9ib2FyZC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvZ3JhcGhNb2R1bGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL2tuaWdodC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2FyZCA9IChudW0pID0+IHtcbiAgLy8gaWYgKCFudW0gfHwgbnVtIDwgOCkgcmV0dXJuO1xuICBjb25zdCBnYW1lQm9hcmQgPSBbXTtcblxuICBsZXQgaiA9IDA7XG4gIHdoaWxlIChqICE9PSBudW0pIHtcbiAgICBjb25zdCByb3cgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSArPSAxKSB7XG4gICAgICByb3cucHVzaChbaiwgaV0pO1xuICAgIH1cbiAgICBnYW1lQm9hcmQucHVzaChyb3cpO1xuICAgIGogKz0gMTtcbiAgfVxuXG4gIHJldHVybiBnYW1lQm9hcmQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBib2FyZDtcbiIsImNvbnN0IG1ha2VHcmFwaCA9IChib2FyZCkgPT4ge1xuICBsZXQgdG90YWxHcmlkID0gYm9hcmQubGVuZ3RoICogYm9hcmRbMF0ubGVuZ3RoO1xuICBsZXQgbWF4Um93ID0gYm9hcmQubGVuZ3RoIC0gMTtcbiAgbGV0IG1heENvbCA9IGJvYXJkWzBdLmxlbmd0aCAtIDE7XG5cbiAgY29uc3QgVmVydGV4ID0gKGRhdGEsIC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGFyZ3M7XG4gICAgY29uc3QgdmVydGV4ID0ge1xuICAgICAgbW92ZTogZGF0YSxcbiAgICAgIGFkamFjZW50OiBbXSxcbiAgICB9O1xuICAgIHZlcnRpY2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgIGlmICghZWRnZSkgcmV0dXJuO1xuICAgICAgdmVydGV4LmFkamFjZW50LnB1c2goZWRnZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9O1xuXG4gIGNvbnN0IGdldEJvYXJkVmFsdWUgPSAoYm9hcmQsIHJvdywgY29sKSA9PiB7XG4gICAgaWYgKHJvdyA+IG1heFJvdyB8fCByb3cgPCAwKSByZXR1cm47XG4gICAgaWYgKGNvbCA+IG1heENvbCB8fCBjb2wgPCAwKSByZXR1cm47XG4gICAgY29uc3QgdmFsdWUgPSBib2FyZFtyb3ddW2NvbF07XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkR3JhcGggPSAoYm9hcmQpID0+IHtcbiAgICBsZXQgcm93ID0gMDtcbiAgICBsZXQgY29sID0gMDtcbiAgICBsZXQgc3F1YXJlID0gMDtcbiAgICBjb25zdCBtb3ZlMiA9IDI7XG4gICAgY29uc3QgbW92ZTEgPSAxO1xuICAgIGNvbnN0IEdyYXBoID0ge307XG4gICAgY29uc3Qga25pZ2h0TW92ZXMgPSBbXTtcblxuICAgIHdoaWxlIChzcXVhcmUgIT09IHRvdGFsR3JpZCkge1xuICAgICAgaWYgKGNvbCA+IG1heENvbCkge1xuICAgICAgICByb3cgKz0gMTtcbiAgICAgICAgY29sID0gMDtcbiAgICAgIH1cblxuICAgICAgR3JhcGhbYHZlcnRleCR7c3F1YXJlfWBdID0gVmVydGV4KFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3csIGNvbCksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyAtIG1vdmUyLCBjb2wgLSBtb3ZlMSksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyAtIG1vdmUyLCBjb2wgKyBtb3ZlMSksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyAtIG1vdmUxLCBjb2wgLSBtb3ZlMiksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyAtIG1vdmUxLCBjb2wgKyBtb3ZlMiksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyArIG1vdmUxLCBjb2wgLSBtb3ZlMiksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyArIG1vdmUxLCBjb2wgKyBtb3ZlMiksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyArIG1vdmUyLCBjb2wgLSBtb3ZlMSksXG4gICAgICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyArIG1vdmUyLCBjb2wgKyBtb3ZlMSlcbiAgICAgICk7XG4gICAgICBjb2wgKz0gMTtcbiAgICAgIHNxdWFyZSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBHcmFwaDtcbiAgfTtcblxuICBjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoYm9hcmQpO1xuXG4gIHJldHVybiBncmFwaDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VHcmFwaDtcbiIsImltcG9ydCBtYWtlR3JhcGggZnJvbSBcIi4vZ3JhcGhNb2R1bGVcIjtcblxuY29uc3QgS25pZ2h0ID0gZnVuY3Rpb24gKGJvYXJkKSB7XG4gIGNvbnN0IHBvc3NpYmxlTW92ZXMgPSBtYWtlR3JhcGgoYm9hcmQpO1xuICBjb25zdCBjaGVzc0JvYXJkID0gYm9hcmQ7XG4gIGNvbnN0IG1vdmVzQXJyYXkgPSBbXTtcbiAgY29uc3QgcXVldWVBcnJheSA9IFtdO1xuICBsZXQgZW5kR3JpZDtcbiAgbGV0IHN0YXJ0UG9zaXRpb247XG4gIGxldCBlbmRQb3NpdGlvbjtcbiAgbGV0IHRyYWNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGdldEJvYXJkR3JpZCA9IChncmlkKSA9PiB7XG4gICAgaWYgKCFncmlkKSByZXR1cm47XG4gICAgcmV0dXJuIGNoZXNzQm9hcmRbZ3JpZFswXV1bZ3JpZFsxXV07XG4gIH07XG5cbiAgY29uc3QgdHJhY2VNb3ZlcyA9ICgpID0+IHtcbiAgICBpZiAoIXF1ZXVlQXJyYXkubGVuZ3RoKSB7XG4gICAgICB0cmFjZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcXVldWVBcnJheVswXS5hZGphY2VudC5mb3JFYWNoKChhZGphY2VudCkgPT4ge1xuICAgICAgaWYgKHRyYWNlZCkgcmV0dXJuO1xuICAgICAgT2JqZWN0LnZhbHVlcyhwb3NzaWJsZU1vdmVzKS5mb3JFYWNoKCh2ZXJ0ZXgsIGksIGFycikgPT4ge1xuICAgICAgICBpZiAodHJhY2VkKSByZXR1cm47XG4gICAgICAgIGlmICh2ZXJ0ZXguZGlzdGFuY2UgIT09IHVuZGVmaW5lZCB8fCB2ZXJ0ZXguc291cmNlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAodmVydGV4Lm1vdmUgPT09IGFkamFjZW50KSB7XG4gICAgICAgICAgaWYgKHZlcnRleC5tb3ZlID09PSBlbmRQb3NpdGlvbikge1xuICAgICAgICAgICAgdmVydGV4LmRpc3RhbmNlID0gcXVldWVBcnJheVswXS5kaXN0YW5jZSArIDE7XG4gICAgICAgICAgICB2ZXJ0ZXguc291cmNlID0gcXVldWVBcnJheVswXTtcbiAgICAgICAgICAgIGVuZEdyaWQgPSB2ZXJ0ZXg7XG4gICAgICAgICAgICB0cmFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgcXVldWVBcnJheS5zcGxpY2UoMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZlcnRleC5kaXN0YW5jZSA9IHF1ZXVlQXJyYXlbMF0uZGlzdGFuY2UgKyAxO1xuICAgICAgICAgIHZlcnRleC5zb3VyY2UgPSBxdWV1ZUFycmF5WzBdO1xuICAgICAgICAgIHF1ZXVlQXJyYXkucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICAgIGFyci5zcGxpY2UoaSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHF1ZXVlQXJyYXkuc2hpZnQoKTtcbiAgICB0cmFjZU1vdmVzKCk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TW92ZXMgPSAodmVydGV4KSA9PiB7XG4gICAgaWYgKHZlcnRleC5zb3VyY2UgPT09IG51bGwpIHtcbiAgICAgIG1vdmVzQXJyYXkucHVzaCh2ZXJ0ZXgubW92ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGdldE1vdmVzKHZlcnRleC5zb3VyY2UpO1xuICAgIG1vdmVzQXJyYXkucHVzaCh2ZXJ0ZXgubW92ZSk7XG4gIH07XG5cbiAgY29uc3QgcHJpbnRNb3ZlcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgWW91IG1hZGUgaXQgaW4gJHtlbmRHcmlkLmRpc3RhbmNlfSBtb3ZlcyEgSGVyZSdzIHlvdXIgcGF0aDpgKTtcbiAgICBtb3Zlc0FycmF5LmZvckVhY2goKG1vdmUpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1vdmUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGNsZWFyVmVydGV4U3JjRGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IE9iamVjdC52YWx1ZXMocG9zc2libGVNb3Zlcyk7XG4gICAgdmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICBkZWxldGUgdmVydGV4LmRpc3RhbmNlO1xuICAgICAgZGVsZXRlIHZlcnRleC5zb3VyY2U7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbW92ZXMgPSAoc3RhcnQsIGVuZCkgPT4ge1xuICAgIHN0YXJ0UG9zaXRpb24gPSBnZXRCb2FyZEdyaWQoc3RhcnQpO1xuICAgIGVuZFBvc2l0aW9uID0gZ2V0Qm9hcmRHcmlkKGVuZCk7XG4gICAgaWYgKHN0YXJ0UG9zaXRpb24gPT09IGVuZFBvc2l0aW9uKSB7XG4gICAgICBjb25zb2xlLmxvZyhgUGxlYXNlIGVudGVyIGEgZGlmZmVyZW50IHN0YXJ0aW5nIGFuZCBlbmRpbmcgcG9zaXRpb25gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb3Zlc0FycmF5LnNwbGljZSgwKTtcbiAgICBxdWV1ZUFycmF5LnNwbGljZSgwKTtcblxuICAgIE9iamVjdC52YWx1ZXMocG9zc2libGVNb3ZlcykuZm9yRWFjaCgodmVydGV4LCBpLCBhcnIpID0+IHtcbiAgICAgIGlmICh2ZXJ0ZXgubW92ZSA9PT0gc3RhcnRQb3NpdGlvbikge1xuICAgICAgICB2ZXJ0ZXguZGlzdGFuY2UgPSAwO1xuICAgICAgICB2ZXJ0ZXguc291cmNlID0gbnVsbDtcbiAgICAgICAgcXVldWVBcnJheS5wdXNoKHZlcnRleCk7XG4gICAgICAgIGFyci5zcGxpY2UoaSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdHJhY2VNb3ZlcygpO1xuICAgIGdldE1vdmVzKGVuZEdyaWQpO1xuICAgIHByaW50TW92ZXMoKTtcbiAgICBjbGVhclZlcnRleFNyY0Rpc3QoKTtcbiAgfTtcblxuICByZXR1cm4geyBtb3ZlcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS25pZ2h0O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgYm9hcmQgZnJvbSBcIi4vc2NyaXB0cy9ib2FyZFwiO1xuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9zY3JpcHRzL2tuaWdodFwiO1xuXG5jb25zdCBnYW1lQm9hcmQgPSBib2FyZCg4KTtcblxuY29uc3Qga25pZ2h0ID0gS25pZ2h0KGdhbWVCb2FyZCk7XG5cbmtuaWdodC5tb3ZlcyhbMCwgMF0sIFsxLCAyXSk7XG5rbmlnaHQubW92ZXMoWzAsMF0sIFszLDNdKTtcbmtuaWdodC5tb3ZlcyhbMywzXSwgWzAsMF0pO1xua25pZ2h0Lm1vdmVzKFswLDBdLCBbNyw3XSk7Il0sIm5hbWVzIjpbImJvYXJkIiwibnVtIiwiZ2FtZUJvYXJkIiwiaiIsInJvdyIsImkiLCJwdXNoIiwibWFrZUdyYXBoIiwidG90YWxHcmlkIiwibGVuZ3RoIiwibWF4Um93IiwibWF4Q29sIiwiVmVydGV4IiwiZGF0YSIsImFyZ3MiLCJ2ZXJ0aWNlcyIsInZlcnRleCIsIm1vdmUiLCJhZGphY2VudCIsImZvckVhY2giLCJlZGdlIiwiZ2V0Qm9hcmRWYWx1ZSIsImNvbCIsInZhbHVlIiwiYnVpbGRHcmFwaCIsInNxdWFyZSIsIm1vdmUyIiwibW92ZTEiLCJHcmFwaCIsImtuaWdodE1vdmVzIiwiZ3JhcGgiLCJLbmlnaHQiLCJwb3NzaWJsZU1vdmVzIiwiY2hlc3NCb2FyZCIsIm1vdmVzQXJyYXkiLCJxdWV1ZUFycmF5IiwiZW5kR3JpZCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInRyYWNlZCIsImdldEJvYXJkR3JpZCIsImdyaWQiLCJ0cmFjZU1vdmVzIiwiT2JqZWN0IiwidmFsdWVzIiwiYXJyIiwiZGlzdGFuY2UiLCJ1bmRlZmluZWQiLCJzb3VyY2UiLCJzcGxpY2UiLCJzaGlmdCIsImdldE1vdmVzIiwicHJpbnRNb3ZlcyIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclZlcnRleFNyY0Rpc3QiLCJtb3ZlcyIsInN0YXJ0IiwiZW5kIiwia25pZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==