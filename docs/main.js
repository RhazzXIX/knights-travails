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

      // Graph.push(
      //   Vertex(
      //     getBoardValue(board, row, col),
      //     getBoardValue(board, row - move2, col - move1),
      //     getBoardValue(board, row - move2, col + move1),
      //     getBoardValue(board, row - move1, col - move2),
      //     getBoardValue(board, row - move1, col + move2),
      //     getBoardValue(board, row + move1, col - move2),
      //     getBoardValue(board, row + move1, col + move2),
      //     getBoardValue(board, row + move2, col - move1),
      //     getBoardValue(board, row + move2, col + move1)
      //   )
      // );
      col += 1;
      square += 1;
    }
    return Graph;
  };
  const graph = buildGraph(board);
  console.log(graph);
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
  const getBoardGrid = grid => {
    if (!grid) return;
    return chessBoard[grid[0]][grid[1]];
  };
  const getMoves = (startGrid, endGrid) => {};
  const moves = (start, end) => {
    const startGrid = getBoardGrid(start);
    const endGrid = getBoardGrid(end);
    movesArray.splice(0);
    queueArray.splice(0);
    getMoves(startGrid, endGrid);
    console.log(startGrid, endGrid);
  };

  // console.table(possibleMoves);
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

// knight.moves([2,7], null)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU1BLEtBQUssR0FBSUMsR0FBRyxJQUFLO0VBQ3JCO0VBQ0EsTUFBTUMsU0FBUyxHQUFHLEVBQUU7RUFFcEIsSUFBSUMsQ0FBQyxHQUFHLENBQUM7RUFDVCxPQUFPQSxDQUFDLEtBQUtGLEdBQUcsRUFBRTtJQUNoQixNQUFNRyxHQUFHLEdBQUcsRUFBRTtJQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixHQUFHLEVBQUVJLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDL0JELEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUNILENBQUMsRUFBRUUsQ0FBQyxDQUFDLENBQUM7SUFDbEI7SUFDQUgsU0FBUyxDQUFDSSxJQUFJLENBQUNGLEdBQUcsQ0FBQztJQUNuQkQsQ0FBQyxJQUFJLENBQUM7RUFDUjtFQUVBLE9BQU9ELFNBQVM7QUFDbEIsQ0FBQztBQUVELGlFQUFlRixLQUFLOzs7Ozs7Ozs7Ozs7OztBQ2pCcEIsTUFBTU8sU0FBUyxHQUFJUCxLQUFLLElBQUs7RUFDM0IsSUFBSVEsU0FBUyxHQUFHUixLQUFLLENBQUNTLE1BQU0sR0FBR1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDUyxNQUFNO0VBQzlDLElBQUlDLE1BQU0sR0FBR1YsS0FBSyxDQUFDUyxNQUFNLEdBQUcsQ0FBQztFQUM3QixJQUFJRSxNQUFNLEdBQUdYLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ1MsTUFBTSxHQUFHLENBQUM7RUFFaEMsTUFBTUcsTUFBTSxHQUFHLFVBQUNDLElBQUksRUFBYztJQUFBLGtDQUFUQyxJQUFJO01BQUpBLElBQUk7SUFBQTtJQUMzQixNQUFNQyxRQUFRLEdBQUdELElBQUk7SUFDckIsTUFBTUUsTUFBTSxHQUFHO01BQ2JDLElBQUksRUFBRUosSUFBSTtNQUNWSyxRQUFRLEVBQUU7SUFDWixDQUFDO0lBQ0RILFFBQVEsQ0FBQ0ksT0FBTyxDQUFDQyxJQUFJLElBQUk7TUFDdkIsSUFBRyxDQUFDQSxJQUFJLEVBQUU7TUFDVkosTUFBTSxDQUFDRSxRQUFRLENBQUNaLElBQUksQ0FBQ2MsSUFBSSxDQUFDO0lBQzVCLENBQUMsQ0FBQztJQUdGLE9BQU9KLE1BQU07RUFDZixDQUFDO0VBRUQsTUFBTUssYUFBYSxHQUFHLENBQUNyQixLQUFLLEVBQUVJLEdBQUcsRUFBRWtCLEdBQUcsS0FBSztJQUN6QyxJQUFJbEIsR0FBRyxHQUFHTSxNQUFNLElBQUlOLEdBQUcsR0FBRyxDQUFDLEVBQUU7SUFDN0IsSUFBSWtCLEdBQUcsR0FBR1gsTUFBTSxJQUFJVyxHQUFHLEdBQUcsQ0FBQyxFQUFFO0lBQzdCLE1BQU1DLEtBQUssR0FBR3ZCLEtBQUssQ0FBQ0ksR0FBRyxDQUFDLENBQUNrQixHQUFHLENBQUM7SUFDN0IsT0FBT0MsS0FBSztFQUNkLENBQUM7RUFFRCxNQUFNQyxVQUFVLEdBQUl4QixLQUFLLElBQUs7SUFDNUIsSUFBSUksR0FBRyxHQUFHLENBQUM7SUFDWCxJQUFJa0IsR0FBRyxHQUFHLENBQUM7SUFDWCxJQUFJRyxNQUFNLEdBQUcsQ0FBQztJQUNkLE1BQU1DLEtBQUssR0FBRyxDQUFDO0lBQ2YsTUFBTUMsS0FBSyxHQUFHLENBQUM7SUFDZixNQUFNQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE1BQU1DLFdBQVcsR0FBRyxFQUFFO0lBRXRCLE9BQU9KLE1BQU0sS0FBS2pCLFNBQVMsRUFBRTtNQUMzQixJQUFJYyxHQUFHLEdBQUdYLE1BQU0sRUFBRTtRQUNoQlAsR0FBRyxJQUFJLENBQUM7UUFDUmtCLEdBQUcsR0FBRyxDQUFDO01BQ1Q7TUFFQU0sS0FBSyxDQUFFLFNBQVFILE1BQU8sRUFBQyxDQUFDLEdBQUdiLE1BQU0sQ0FDL0JTLGFBQWEsQ0FBQ3JCLEtBQUssRUFBRUksR0FBRyxFQUFFa0IsR0FBRyxDQUFDLEVBQzlCRCxhQUFhLENBQUNyQixLQUFLLEVBQUVJLEdBQUcsR0FBR3NCLEtBQUssRUFBRUosR0FBRyxHQUFHSyxLQUFLLENBQUMsRUFDOUNOLGFBQWEsQ0FBQ3JCLEtBQUssRUFBRUksR0FBRyxHQUFHc0IsS0FBSyxFQUFFSixHQUFHLEdBQUdLLEtBQUssQ0FBQyxFQUM5Q04sYUFBYSxDQUFDckIsS0FBSyxFQUFFSSxHQUFHLEdBQUd1QixLQUFLLEVBQUVMLEdBQUcsR0FBR0ksS0FBSyxDQUFDLEVBQzlDTCxhQUFhLENBQUNyQixLQUFLLEVBQUVJLEdBQUcsR0FBR3VCLEtBQUssRUFBRUwsR0FBRyxHQUFHSSxLQUFLLENBQUMsRUFDOUNMLGFBQWEsQ0FBQ3JCLEtBQUssRUFBRUksR0FBRyxHQUFHdUIsS0FBSyxFQUFFTCxHQUFHLEdBQUdJLEtBQUssQ0FBQyxFQUM5Q0wsYUFBYSxDQUFDckIsS0FBSyxFQUFFSSxHQUFHLEdBQUd1QixLQUFLLEVBQUVMLEdBQUcsR0FBR0ksS0FBSyxDQUFDLEVBQzlDTCxhQUFhLENBQUNyQixLQUFLLEVBQUVJLEdBQUcsR0FBR3NCLEtBQUssRUFBRUosR0FBRyxHQUFHSyxLQUFLLENBQUMsRUFDOUNOLGFBQWEsQ0FBQ3JCLEtBQUssRUFBRUksR0FBRyxHQUFHc0IsS0FBSyxFQUFFSixHQUFHLEdBQUdLLEtBQUssQ0FBQyxDQUMvQzs7TUFFRDtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBTCxHQUFHLElBQUksQ0FBQztNQUNSRyxNQUFNLElBQUksQ0FBQztJQUNiO0lBRUEsT0FBT0csS0FBSztFQUNkLENBQUM7RUFFRCxNQUFNRSxLQUFLLEdBQUdOLFVBQVUsQ0FBQ3hCLEtBQUssQ0FBQztFQUMvQitCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFFbEIsT0FBT0EsS0FBSztBQUNkLENBQUM7QUFFRCxpRUFBZXZCLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ2hGYztBQUV0QyxNQUFNMEIsTUFBTSxHQUFHLFVBQVVqQyxLQUFLLEVBQUU7RUFDOUIsTUFBTWtDLGFBQWEsR0FBRzNCLHdEQUFTLENBQUNQLEtBQUssQ0FBQztFQUN0QyxNQUFNbUMsVUFBVSxHQUFHbkMsS0FBSztFQUN4QixNQUFNb0MsVUFBVSxHQUFHLEVBQUU7RUFDckIsTUFBTUMsVUFBVSxHQUFHLEVBQUU7RUFFckIsTUFBTUMsWUFBWSxHQUFJQyxJQUFJLElBQUs7SUFDN0IsSUFBSSxDQUFDQSxJQUFJLEVBQUU7SUFDWCxPQUFPSixVQUFVLENBQUNJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckMsQ0FBQztFQUVELE1BQU1DLFFBQVEsR0FBRyxDQUFDQyxTQUFTLEVBQUVDLE9BQU8sS0FBSyxDQUV6QyxDQUFDO0VBRUQsTUFBTUMsS0FBSyxHQUFHLENBQUNDLEtBQUssRUFBRUMsR0FBRyxLQUFLO0lBQzVCLE1BQU1KLFNBQVMsR0FBR0gsWUFBWSxDQUFDTSxLQUFLLENBQUM7SUFDckMsTUFBTUYsT0FBTyxHQUFHSixZQUFZLENBQUNPLEdBQUcsQ0FBQztJQUVqQ1QsVUFBVSxDQUFDVSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BCVCxVQUFVLENBQUNTLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFcEJOLFFBQVEsQ0FBQ0MsU0FBUyxFQUFFQyxPQUFPLENBQUM7SUFHNUJYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxTQUFTLEVBQUNDLE9BQU8sQ0FBQztFQUNoQyxDQUFDOztFQUVEO0VBQ0EsT0FBTztJQUFDQztFQUFLLENBQUM7QUFDaEIsQ0FBQztBQUVELGlFQUFlVixNQUFNOzs7Ozs7VUNsQ3JCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTm1DO0FBQ0c7QUFFdEMsTUFBTS9CLFNBQVMsR0FBR0YsMERBQUssQ0FBQyxDQUFDLENBQUM7QUFFMUIsTUFBTStDLE1BQU0sR0FBR2QsMkRBQU0sQ0FBQy9CLFNBQVMsQ0FBQzs7QUFFaEMsNEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzLy4vc3JjL3NjcmlwdHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy8uL3NyYy9zY3JpcHRzL2dyYXBoTW9kdWxlLmpzIiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvc2NyaXB0cy9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRzLXRyYXZhaWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0cy10cmF2YWlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tuaWdodHMtdHJhdmFpbHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9hcmQgPSAobnVtKSA9PiB7XG4gIC8vIGlmICghbnVtIHx8IG51bSA8IDgpIHJldHVybjtcbiAgY29uc3QgZ2FtZUJvYXJkID0gW107XG5cbiAgbGV0IGogPSAwO1xuICB3aGlsZSAoaiAhPT0gbnVtKSB7XG4gICAgY29uc3Qgcm93ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkgKz0gMSkge1xuICAgICAgcm93LnB1c2goW2osIGldKTtcbiAgICB9XG4gICAgZ2FtZUJvYXJkLnB1c2gocm93KTtcbiAgICBqICs9IDE7XG4gIH1cblxuICByZXR1cm4gZ2FtZUJvYXJkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYm9hcmQ7XG4iLCJjb25zdCBtYWtlR3JhcGggPSAoYm9hcmQpID0+IHtcbiAgbGV0IHRvdGFsR3JpZCA9IGJvYXJkLmxlbmd0aCAqIGJvYXJkWzBdLmxlbmd0aDtcbiAgbGV0IG1heFJvdyA9IGJvYXJkLmxlbmd0aCAtIDE7XG4gIGxldCBtYXhDb2wgPSBib2FyZFswXS5sZW5ndGggLSAxO1xuXG4gIGNvbnN0IFZlcnRleCA9IChkYXRhLCAuLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgdmVydGljZXMgPSBhcmdzO1xuICAgIGNvbnN0IHZlcnRleCA9IHtcbiAgICAgIG1vdmU6IGRhdGEsXG4gICAgICBhZGphY2VudDogW11cbiAgICB9O1xuICAgIHZlcnRpY2VzLmZvckVhY2goZWRnZSA9PiB7XG4gICAgICBpZighZWRnZSkgcmV0dXJuO1xuICAgICAgdmVydGV4LmFkamFjZW50LnB1c2goZWRnZSlcbiAgICB9KVxuICAgIFxuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfTtcblxuICBjb25zdCBnZXRCb2FyZFZhbHVlID0gKGJvYXJkLCByb3csIGNvbCkgPT4ge1xuICAgIGlmIChyb3cgPiBtYXhSb3cgfHwgcm93IDwgMCkgcmV0dXJuO1xuICAgIGlmIChjb2wgPiBtYXhDb2wgfHwgY29sIDwgMCkgcmV0dXJuO1xuICAgIGNvbnN0IHZhbHVlID0gYm9hcmRbcm93XVtjb2xdO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBjb25zdCBidWlsZEdyYXBoID0gKGJvYXJkKSA9PiB7XG4gICAgbGV0IHJvdyA9IDA7XG4gICAgbGV0IGNvbCA9IDA7XG4gICAgbGV0IHNxdWFyZSA9IDA7XG4gICAgY29uc3QgbW92ZTIgPSAyO1xuICAgIGNvbnN0IG1vdmUxID0gMTtcbiAgICBjb25zdCBHcmFwaCA9IHt9O1xuICAgIGNvbnN0IGtuaWdodE1vdmVzID0gW107XG5cbiAgICB3aGlsZSAoc3F1YXJlICE9PSB0b3RhbEdyaWQpIHtcbiAgICAgIGlmIChjb2wgPiBtYXhDb2wpIHtcbiAgICAgICAgcm93ICs9IDE7XG4gICAgICAgIGNvbCA9IDA7XG4gICAgICB9XG5cbiAgICAgIEdyYXBoW2B2ZXJ0ZXgke3NxdWFyZX1gXSA9IFZlcnRleChcbiAgICAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgcm93LCBjb2wpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgLSBtb3ZlMiwgY29sIC0gbW92ZTEpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgLSBtb3ZlMiwgY29sICsgbW92ZTEpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgLSBtb3ZlMSwgY29sIC0gbW92ZTIpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgLSBtb3ZlMSwgY29sICsgbW92ZTIpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgKyBtb3ZlMSwgY29sIC0gbW92ZTIpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgKyBtb3ZlMSwgY29sICsgbW92ZTIpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgKyBtb3ZlMiwgY29sIC0gbW92ZTEpLFxuICAgICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgKyBtb3ZlMiwgY29sICsgbW92ZTEpXG4gICAgICApXG5cbiAgICAgIC8vIEdyYXBoLnB1c2goXG4gICAgICAvLyAgIFZlcnRleChcbiAgICAgIC8vICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3csIGNvbCksXG4gICAgICAvLyAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgcm93IC0gbW92ZTIsIGNvbCAtIG1vdmUxKSxcbiAgICAgIC8vICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgLSBtb3ZlMiwgY29sICsgbW92ZTEpLFxuICAgICAgLy8gICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyAtIG1vdmUxLCBjb2wgLSBtb3ZlMiksXG4gICAgICAvLyAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgcm93IC0gbW92ZTEsIGNvbCArIG1vdmUyKSxcbiAgICAgIC8vICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgKyBtb3ZlMSwgY29sIC0gbW92ZTIpLFxuICAgICAgLy8gICAgIGdldEJvYXJkVmFsdWUoYm9hcmQsIHJvdyArIG1vdmUxLCBjb2wgKyBtb3ZlMiksXG4gICAgICAvLyAgICAgZ2V0Qm9hcmRWYWx1ZShib2FyZCwgcm93ICsgbW92ZTIsIGNvbCAtIG1vdmUxKSxcbiAgICAgIC8vICAgICBnZXRCb2FyZFZhbHVlKGJvYXJkLCByb3cgKyBtb3ZlMiwgY29sICsgbW92ZTEpXG4gICAgICAvLyAgIClcbiAgICAgIC8vICk7XG4gICAgICBjb2wgKz0gMTtcbiAgICAgIHNxdWFyZSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBHcmFwaDtcbiAgfTtcblxuICBjb25zdCBncmFwaCA9IGJ1aWxkR3JhcGgoYm9hcmQpO1xuICBjb25zb2xlLmxvZyhncmFwaClcblxuICByZXR1cm4gZ3JhcGg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlR3JhcGg7XG4iLCJpbXBvcnQgbWFrZUdyYXBoIGZyb20gXCIuL2dyYXBoTW9kdWxlXCI7XG5cbmNvbnN0IEtuaWdodCA9IGZ1bmN0aW9uIChib2FyZCkge1xuICBjb25zdCBwb3NzaWJsZU1vdmVzID0gbWFrZUdyYXBoKGJvYXJkKTtcbiAgY29uc3QgY2hlc3NCb2FyZCA9IGJvYXJkO1xuICBjb25zdCBtb3Zlc0FycmF5ID0gW107XG4gIGNvbnN0IHF1ZXVlQXJyYXkgPSBbXTtcblxuICBjb25zdCBnZXRCb2FyZEdyaWQgPSAoZ3JpZCkgPT4ge1xuICAgIGlmICghZ3JpZCkgcmV0dXJuXG4gICAgcmV0dXJuIGNoZXNzQm9hcmRbZ3JpZFswXV1bZ3JpZFsxXV1cbiAgfVxuXG4gIGNvbnN0IGdldE1vdmVzID0gKHN0YXJ0R3JpZCwgZW5kR3JpZCkgPT4ge1xuXG4gIH1cblxuICBjb25zdCBtb3ZlcyA9IChzdGFydCwgZW5kKSA9PiB7XG4gICAgY29uc3Qgc3RhcnRHcmlkID0gZ2V0Qm9hcmRHcmlkKHN0YXJ0KVxuICAgIGNvbnN0IGVuZEdyaWQgPSBnZXRCb2FyZEdyaWQoZW5kKVxuICAgIFxuICAgIG1vdmVzQXJyYXkuc3BsaWNlKDApO1xuICAgIHF1ZXVlQXJyYXkuc3BsaWNlKDApO1xuICAgIFxuICAgIGdldE1vdmVzKHN0YXJ0R3JpZCwgZW5kR3JpZClcblxuXG4gICAgY29uc29sZS5sb2coc3RhcnRHcmlkLGVuZEdyaWQpXG4gIH07XG5cbiAgLy8gY29uc29sZS50YWJsZShwb3NzaWJsZU1vdmVzKTtcbiAgcmV0dXJuIHttb3Zlc31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtuaWdodDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIlxuaW1wb3J0IEtuaWdodCBmcm9tIFwiLi9zY3JpcHRzL2tuaWdodFwiO1xuXG5jb25zdCBnYW1lQm9hcmQgPSBib2FyZCg4KTtcblxuY29uc3Qga25pZ2h0ID0gS25pZ2h0KGdhbWVCb2FyZCk7XG5cbi8vIGtuaWdodC5tb3ZlcyhbMiw3XSwgbnVsbCkiXSwibmFtZXMiOlsiYm9hcmQiLCJudW0iLCJnYW1lQm9hcmQiLCJqIiwicm93IiwiaSIsInB1c2giLCJtYWtlR3JhcGgiLCJ0b3RhbEdyaWQiLCJsZW5ndGgiLCJtYXhSb3ciLCJtYXhDb2wiLCJWZXJ0ZXgiLCJkYXRhIiwiYXJncyIsInZlcnRpY2VzIiwidmVydGV4IiwibW92ZSIsImFkamFjZW50IiwiZm9yRWFjaCIsImVkZ2UiLCJnZXRCb2FyZFZhbHVlIiwiY29sIiwidmFsdWUiLCJidWlsZEdyYXBoIiwic3F1YXJlIiwibW92ZTIiLCJtb3ZlMSIsIkdyYXBoIiwia25pZ2h0TW92ZXMiLCJncmFwaCIsImNvbnNvbGUiLCJsb2ciLCJLbmlnaHQiLCJwb3NzaWJsZU1vdmVzIiwiY2hlc3NCb2FyZCIsIm1vdmVzQXJyYXkiLCJxdWV1ZUFycmF5IiwiZ2V0Qm9hcmRHcmlkIiwiZ3JpZCIsImdldE1vdmVzIiwic3RhcnRHcmlkIiwiZW5kR3JpZCIsIm1vdmVzIiwic3RhcnQiLCJlbmQiLCJzcGxpY2UiLCJrbmlnaHQiXSwic291cmNlUm9vdCI6IiJ9