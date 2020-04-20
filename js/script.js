// CALCULATE AGE
function calculate_age(dob) { 

	var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms); 

	return Math.abs(age_dt.getUTCFullYear() - 1970);
}
if (!console) {
	console = {};
}
	var old = console.log;
	var logger = document.getElementById('myAge');
	console.log = function (message) {
		if (typeof message == 'object') {
			logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
		} else {
			logger.innerHTML += message + '<br />';
		}
	};
	console.log(calculate_age(new Date(1986, 05, 23)));

