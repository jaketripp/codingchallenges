// Returns first half of string only if str is is even
// else just returns string
function isEven(str){
	return str.length % 2 === 0; 
}

function firstHalfOfString(str){
	if (isEven(str)){
		return str.substring(0, str.length / 2);	
	} else {
		return str;
	}
}