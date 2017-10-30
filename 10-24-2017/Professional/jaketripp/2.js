// remove numbers
// then combine first from bigger str, first from smaller str, second from bigger str, etc
// 'c1dn4', 'o5ig' => 'coding'
// 'bk2dbas4', 'ae en' => 'baked beans'
function decodeString(str1, str2){
	str1 = str1.replace(/([0-9])/g, '');
	str2 = str2.replace(/([0-9])/g, '');
	var result = '';

	for (var i = 0; i < str1.length; i++){
		if (str1[i]) {
			result += str1[i];
		}
		if (str2[i]){
			result += str2[i];
		}
	}
	return result;
}
