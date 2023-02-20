const makeGraph = (board) => {

  let grid = board.length * board[0].length;
  let maxRow = board.length - 1;
  let maxCol = board[0].length - 1;

  console.log(maxCol)
  console.log(maxRow);


  const Vertex = (data, ...args) => {
    const vertices = args;
    const vertex = [data];
    const degree = []
    vertices.forEach((incidence) => {
      if (!incidence) return;
      degree.push(incidence);
    });
    vertex.push(degree)
    return vertex;
  };

  const getBoardValue = (board, row, col) => {
    if (row > maxRow || row < 0) return;
    if (col > maxCol || col < 0) return
    const value = board[row][col]
    return value
  }

  const buildGraph = (board) => {
    let row = 0;
    let col = 0;
    let square = 0
    const move2 = 2;
    const move1 = 1;
    const Graph = [];
    const knightMoves = [];

    while (square !== grid ) {
      if (col > maxCol ) {
        row += 1
        col = 0
      }

      Graph.push(
        Vertex(
          getBoardValue(board, row, col),
          getBoardValue(board, (row + move2), (col + move1)),
          getBoardValue(board, (row + move2), (col - move1)),
          getBoardValue(board, (row - move2), (col - move1)),
          getBoardValue(board, (row - move2), (col + move1)),
          getBoardValue(board, (row + move1), (col + move2)),
          getBoardValue(board, (row - move1), (col + move2)),
          getBoardValue(board, (row - move1), (col - move2)),
          getBoardValue(board, (row + move1), (col - move2))
        )
      )
      col += 1
      square += 1
    }

     
    return Graph;
  };

  const graph = buildGraph(board);
  console.table(graph);

  return graph;
};

export default makeGraph;
