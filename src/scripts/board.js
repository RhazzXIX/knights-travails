const board = (num) => {
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

export default board;
