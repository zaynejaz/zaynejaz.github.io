// CALCULATE AGE
/* function calculate_age(dob) { 

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
 	console.log(calculate_age(new Date(1986, 05, 23)));*/

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
// RAINBOW LINES BACKGROUND
// **** credit to Matei Copot from https://codepen.io/towc/pen/YXGYJY
var w = bgLineAnime.width = window.innerWidth,
h = bgLineAnime.height = window.innerHeight,
ctx = bgLineAnime.getContext( '2d' ),

minDist = 10,
maxDist = 30,
initialWidth = 10,
maxLines = 100,
initialLines = 4,
speed = 5,

lines = [],
frame = 0,
timeSinceLast = 0,

dirs = [
// straight x, y velocity
  [ 0, 1 ],
  [ 1, 0 ],
  [ 0, -1 ],
	[ -1, 0 ],
// diagonals, 0.7 = sin(PI/4) = cos(PI/4)
  [ .7, .7 ],
  [ .7, -.7 ],
  [ -.7, .7 ],
  [ -.7, -.7]
],
starter = { // starting parent line
  
  x: w / 2,
  y: h / 2,
  vx: 0,
  vy: 0,
  width: initialWidth
};

function init() {

lines.length = 0;

for( var i = 0; i < initialLines; ++i )
lines.push( new Line( starter ) );

ctx.fillStyle = '#222';
ctx.fillRect( 0, 0, w, h );

// make ends round
// ctx.lineCap = 'round';
}
function getColor( x ) {

return 'hsl( hue, 80%, 50% )'.replace(
  'hue', x / w * 360 + frame
);
}
function anim() {

window.requestAnimationFrame( anim );

++frame;

ctx.shadowBlur = 0;
ctx.fillStyle = 'rgba(0,0,0,.02)';
ctx.fillRect( 0, 0, w, h );
ctx.shadowBlur = .5;

for( var i = 0; i < lines.length; ++i ) 

if( lines[ i ].step() ) { // if true = dead
  
  lines.splice( i, 1 );
  --i;
  
}

// spawn new

++timeSinceLast

if( lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5 ) {

timeSinceLast = 0;

lines.push( new Line( starter ) );

// cover middle;
ctx.fillStyle = ctx.shadowColor = getColor( starter.x );
ctx.beginPath();
ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );
ctx.fill();
}
}

function Line( parent ) {

this.x = parent.x | 0;
this.y = parent.y | 0;
this.width = parent.width / 1.25;

do {

var dir = dirs[ ( Math.random() * dirs.length ) |0 ];
this.vx = dir[ 0 ];
this.vy = dir[ 1 ];

} while ( 
( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );

this.vx *= speed;
this.vy *= speed;

this.dist = ( Math.random() * ( maxDist - minDist ) + minDist );

}
Line.prototype.step = function() {

var dead = false;

var prevX = this.x,
  prevY = this.y;

this.x += this.vx;
this.y += this.vy;

--this.dist;

// kill if out of screen
if( this.x < 0 || this.x > w || this.y < 0 || this.y > h )
dead = true;

// children
if( this.dist <= 0 && this.width > 1 ) {

this.dist = Math.random() * ( maxDist - minDist ) + minDist;

// add 2 children
if( lines.length < maxLines ) lines.push( new Line( this ) );
if( lines.length < maxLines && Math.random() < .5 ) lines.push( new Line( this ) );

// end
if( Math.random() < .2 ) dead = true;
}

ctx.strokeStyle = ctx.shadowColor = getColor( this.x );
ctx.beginPath();
ctx.lineWidth = this.width;
ctx.moveTo( this.x, this.y );
ctx.lineTo( prevX, prevY );
ctx.stroke();

if( dead ) return true
}

init();
anim();

window.addEventListener( 'resize', function() {

w = bgLineAnime.width = window.innerWidth;
h = bgLineAnime.height = window.innerHeight;
starter.x = w / 2;
starter.y = h / 2;

init();
} )
	

// +++++++++++++++++=========================+++++++++++++++++++++
// CURSOR
"use strict";
	var cursor = document.querySelector("#cursor");
	var cursorListener = function cursorListener(event){
		cursor.style.top = event.y + "px";
		cursor.style.left = event.x + "px";
	};

	window.addEventListener("mousemove", cursorListener);




