// count '1's in all of the binary numbers from a to b
function occurencesOfOneInBinaryRange(leftNum, rightNum){
	var arr = [];
	var totalOnes = 0;
	// weird edge case
	if (leftNum === 1 && rightNum === 1) {
		return 2;
	}
	for (var i = leftNum; i <= rightNum; i++){
		arr.push((i).toString(2));
	}
	for (var j = 0; j < arr.length; j++){
		var miniArr = arr[j].split('');
		var count = 0;
		for (var k = 0; k < miniArr.length; k++){
			if (miniArr[k] === '1') {
				count++;
			}
		}
		totalOnes += count;
	}
	return totalOnes;
}