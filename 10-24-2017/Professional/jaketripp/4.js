// A ANF 33JJJFIIM WaasdWWcM

// sorted array of objects, ready for drawHistogram();
// var arr = [{key: "A", value: 2}, {key: "F", value: 2}, {key: "I", value: 2}, {key: "J", value: 3}, {key: "M", value: 2}, {key: "N", value: 1}, {key: "W", value: 3}]

function upperLetterCount(str) {
	// remove anything that is a non capital letter
	var arr = str.replace(/([^A-Z])/g, '').split('');

	// count instances as objs
	var obj = arr.reduce(function(lettersObj, letter) {
		if (letter in lettersObj) {
			lettersObj[letter]++;
		} else {
			lettersObj[letter] = 1;
		}
		return lettersObj;
	}, {});

	// convert obj to array of objs
	var sortableArray = [];
	var keys = Object.keys(obj);
	var values = Object.values(obj);

	for (var i = 0; i < keys.length; i++) {
		var tempObj = {};
		tempObj.key = keys[i];
		tempObj.value = values[i];
		sortableArray.push(tempObj);
	}

	// sort array of objs
	sortableArray = sortableArray.sort((a, b) => {
		if (a.key < b.key) {
			return -1;
		}
		if (a.key > b.key) {
			return 1;
		}
		return 0;
	});

	drawHistogram(sortableArray);
}

function drawHistogram(arr) {
	// get max value in arr
	var max = arr.map(x => x.value).reduce((acc, curr) => Math.max(acc, curr), arr[0].value);
	var symbolString;
	var letterString = '';

	// draw histogram stars
	for (var i = 0; i < max; i++) {
		symbolString = '';
		for (var k = 0; k < arr.length; k++) {
			// in example, row 3 is the top row, row 1 is the bottom row (bc 3 is the max value)
			// i starts at 0, 3 - 0 = 3, see which values are greater or equal to 3
			if (arr[k].value >= (max - i)) {
				symbolString += '* ';
			} else {
				symbolString += '  ';
			}
		}
		console.log(symbolString);
	}

	// draw histogram x axis (letters)
	arr.forEach((obj) => {
		letterString += (obj.key + ' ');
	});

	console.log(letterString);
}