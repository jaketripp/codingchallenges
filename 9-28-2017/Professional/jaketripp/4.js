// http://facebook.com/login => facebook
// https://greenlight.md => greenlight

// kind of hacky but appears to work
function urlParser(url){
	return url.match(/([/])\w+/ig)[0].substring(1);
}
