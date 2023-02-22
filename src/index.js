import board from "./scripts/board";
import Knight from "./scripts/knight";

const gameBoard = board(8);

const knight = Knight(gameBoard);

knight.moves([0, 0], [1, 2]);
knight.moves([0,0], [3,3]);
knight.moves([3,3], [0,0]);
knight.moves([0,0], [7,7]);