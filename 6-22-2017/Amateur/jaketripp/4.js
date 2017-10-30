function longestWord(str){
	// remove non abc's or spaces, split into words
	var arr = str.replace(/([^a-z ])/ig, '').split(' ');

	return arr.reduce((max,curr) => {
		if (curr.length > max.length) {
			max = curr;
		}
		return max;
	}, arr[0]);
}

longestWord('fun&!! time');
longestWord('I love dogs but not cats');