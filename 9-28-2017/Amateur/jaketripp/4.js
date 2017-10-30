// replace every character with the character following it in the alphabet
// funky => gvolz
// hip => ijq

// easy implementation
// function addOneToCharCode(str){
	// var arr = str.split('');
	// var newArr = [];
	// var result = arr.forEach(function(letter){
	// 	newArr.push(String.fromCharCode((letter).charCodeAt() + 1));
	// });
	// return newArr.join('');
// }

// more advanced
function addOneToCharCode(str){
	return str.split('').map((letter) => String.fromCharCode((letter).charCodeAt() + 1)).join('');
}