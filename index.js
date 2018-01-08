const program = require('commander');

program.command('game');

let listFunction = (directory, options) => {
	
}

program.action(listFunction);
const board = {
	1: '',
	2: '',
	3: '',
	4: '',
	5: '',
	6: '',
	7: '',
	8: '',
	9: ''
}

let player1;
let player2; 
const possibleWins = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

//build board
//player 1 to go first
	//player 1 marks board
//player 2 to go next
  //player 2 marks board
//check if there are any winners
//repeat to player 1 to go
//player 2 to go


