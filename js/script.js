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

// +++++++++++++++++=========================+++++++++++++++++++++
// MODAL POPUP
// modal
var modal = document.getElementById("myModal");
// button opens modal
var btn = document.getElementById("myBtn");
// <span> element closes modal
var span = document.getElementsByClassName("close")[0];
// clicks button = open modal 
btn.onclick = function() {
	modal.style.display = "block";
}
// clicks <span> (x) = close modal
span.onclick = function() {
	modal.style.display = "none";
}
// clicks outside modal = close modal
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
  	}
}
	
// +++++++++++++++++=========================+++++++++++++++++++++
// CURSOR
"use strict";
	var cursor = document.querySelector("#cursor");
	var cursorListener = function cursorListener(event){
		cursor.style.top = event.y + "px";
		cursor.style.left = event.x + "px";
	};

	window.addEventListener("mousemove", cursorListener);