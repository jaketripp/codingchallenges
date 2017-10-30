// converts first 3 chars to lowercase
// if str < 3 chars long, convert all to uppercase
// i.e. 
	// 'to' => 'TO'
	// 'DISCO' => 'disCO'
function groovyCase(str){
	if (str.length < 3){
		return str.toUpperCase();
	} else {
		return str.substring(0,3).toLowerCase() + str.substring(3);
	}
}