// [3,2,4,2,-1,0], 2 => 3,1
// [1,0,4,28,6], 18 => None

// starting with first item in array, find first pair that sums to provided sum
function firstTwoValuesThatEqualSum(arr, sum){
	var tempArr = arr.slice(0);
	for (var i = 0; i < arr.length; i++) {
		var a = arr[i];
		
		// remove num from tempArr so you don't count b as a
		tempArr.splice(i, 1);
		for (var j = 0; j < tempArr.length; j++){
			var b = tempArr[j];
			if (a + b === sum){
				return `${a}, ${b}`;
			}
		}
		// reinitialize tempArr
		tempArr = arr.slice(0);
	}
	return 'None';
}