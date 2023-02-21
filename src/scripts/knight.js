import makeGraph from "./graphModule";

const Knight = function (board) {
  const possibleMoves = makeGraph(board);
  const chessBoard = board;
  const movesArray = [];
  const queueArray = [];

  const getBoardGrid = (grid) => {
    if (!grid) return
    return chessBoard[grid[0]][grid[1]]
  }

  const getMoves = (startGrid, endGrid) => {

  }

  const moves = (start, end) => {
    const startGrid = getBoardGrid(start)
    const endGrid = getBoardGrid(end)
    
    movesArray.splice(0);
    queueArray.splice(0);
    
    getMoves(startGrid, endGrid)


    console.log(startGrid,endGrid)
  };

  // console.table(possibleMoves);
  return {moves}
};

export default Knight;
