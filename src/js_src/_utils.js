function log(msg, clear) {
	if (debug === true) {
		if (typeof console == "undefined" || typeof console == undefined || typeof console == null || typeof console == false) {
			return false;
		}
		if (clear === true) {
			console.clear();
		}
		console.log(msg);
	}
}

function line() {
	log('-----------------------')
}