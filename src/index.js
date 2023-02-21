import board from "./scripts/board"
import Knight from "./scripts/knight";

const gameBoard = board(8);

const knight = Knight(gameBoard);

// knight.moves([2,7], null)