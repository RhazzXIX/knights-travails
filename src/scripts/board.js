
const board =  () => {
  const gameBoard = []

  let j = 0
  while (j !== 8) {
    for (let i = 0; i < 8; i += 1) {
      console.log(i);
      gameBoard.push([j,i])
    }
    console.log(j)
    j += 1;
  }
  

  return gameBoard
}

export default board