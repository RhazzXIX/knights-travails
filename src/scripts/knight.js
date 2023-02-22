import makeGraph from "./graphModule";

const Knight = function (board) {
  const possibleMoves = makeGraph(board);
  const chessBoard = board;
  const movesArray = [];
  const queueArray = [];
  let endGrid;
  let startPosition;
  let endPosition;
  let traced = false;

  const getBoardGrid = (grid) => {
    if (!grid) return;
    return chessBoard[grid[0]][grid[1]];
  };

  const traceMoves = () => {
    if (!queueArray.length) {
      traced = false;
      return;
    }
    queueArray[0].adjacent.forEach((adjacent) => {
      if (traced) return;
      Object.values(possibleMoves).forEach((vertex, i, arr) => {
        if (traced) return;
        if (vertex.distance !== undefined || vertex.source !== undefined)
          return;
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

  const getMoves = (vertex) => {
    if (vertex.source === null) {
      movesArray.push(vertex.move);
      return;
    }
    getMoves(vertex.source);
    movesArray.push(vertex.move);
  };

  const printMoves = () => {
    console.log(`You made it in ${endGrid.distance} moves! Here's your path:`);
    movesArray.forEach((move) => {
      console.log(move);
    });
  };

  const clearVertexSrcDist = () => {
    const vertices = Object.values(possibleMoves);
    vertices.forEach((vertex) => {
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

  return { moves };
};

export default Knight;
