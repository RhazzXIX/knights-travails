import board from "./scripts/board"
import Knight from "./scripts/knight";
import makeGraph from "./scripts/graphModule";

const gameBoard = board(8);

// const knight = Knight(gameBoard);


// knight.startPosition(1,5);

const testObj = {}

for (let i = 0; i < 3; i +=1 ) {
  testObj[`edge${i}`] = 'test' 
}


const testFactory = (...args) => {
  const edge = args
  console.log(edge);
}

console.table(gameBoard)

const adjacencyList = makeGraph(gameBoard)

console.log(adjacencyList)
