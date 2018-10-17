export function isBoolean(value){
	if(value === true|| value === false) return true;
	if(typeof value === true) {
		return true
	} else {
		return false;
	}
} 