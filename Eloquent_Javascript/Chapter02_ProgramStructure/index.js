/*
	Write a loop that makes seven calls to console.log to ouput the specific triangle
	General with n argument
*/

function triangle(n) {
	for (let string = '#'; string.length <= n; string += '#')
		console.log(string);
}
triangle(7);


/*
	Write a program that uses console.log to print all the numbers from 1 to n:
	- For numbers divisible by 3, print 'Fizz'
	- For numbers divisible by 5, print 'Buzz'
	- Print 'FizzBuzz' for the numbers that are divisible by both 3 and 5
*/
function FizzBuzz(n) {
	for (let count = 1; count <= n; count++) {
		let str = '';
		if (count % 3 == 0)
			str += 'Fizz';
		if (count % 5 == 0)
			str += 'Buzz';
		console.log(str);
	}
}
FizzBuzz(100);

/*
	Write a program that creates a string that represents an 8x8 grid.
	At each position of the grid there is either a space or a '#' character.
	The characters should form a chessboard.
*/
function ChessBoard(n) {
	let str = '';
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if ((i + j) % 2 == 0)
				str += ' ';
			else
				str += '#';
		}
		str += '\n';
	}
	console.log(str);
}
ChessBoard(8);
