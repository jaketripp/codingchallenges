var mergeArray = (a,b) => {
	var arr = a.concat(b);
	var result = [];
	arr.forEach((item) => {
		if (arr.indexOf(item) === arr.lastIndexOf(item)) {
			result.push(item);
		}
	});
	return result;
};

mergeArray([4,67,98,2], [5,12,2,100,56,98]);
mergeArray([0,17,35,59,80,200], [3,5,17,58,59,300,1]);