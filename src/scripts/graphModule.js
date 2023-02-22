const makeGraph = (board) => {
  let totalGrid = board.length * board[0].length;
  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;

  const Vertex = (data, ...args) => {
    const vertices = args;
    const vertex = {
      move: data,
      adjacent: [],
    };
    vertices.forEach((edge) => {
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

  const buildGraph = (board) => {
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

      Graph[`vertex${square}`] = Vertex(
        getBoardValue(board, row, col),
        getBoardValue(board, row - move2, col - move1),
        getBoardValue(board, row - move2, col + move1),
        getBoardValue(board, row - move1, col - move2),
        getBoardValue(board, row - move1, col + move2),
        getBoardValue(board, row + move1, col - move2),
        getBoardValue(board, row + move1, col + move2),
        getBoardValue(board, row + move2, col - move1),
        getBoardValue(board, row + move2, col + move1)
      );
      col += 1;
      square += 1;
    }

    return Graph;
  };

  const graph = buildGraph(board);

  return graph;
};

export default makeGraph;
