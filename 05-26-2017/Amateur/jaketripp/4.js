// go from 1 to n and if the number has the digit 4 then count++

function hasFour(n) {
	var count = 0;

	// go through each number between 1 and n
	for (var i = 1; i <= n; i++) {
		var str = (i).toString();
		var arr = str.split('');

		// go through all of the digits in each number and check if any === 4
		for (var j = 0; j < arr.length; j++) {
			if (arr[j] === '4') {
				count++;
				// each number at most increases count by 1
				break;
			}
		}
	}

	return count;
}

