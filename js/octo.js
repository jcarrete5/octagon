let cnv = document.getElementById("canvas");
let g = cnv.getContext('2d');

const ROOT2ON2 = Math.sqrt(2) / 2;
let rotation = 0; // in degrees
let sidelen = 50;
let color = "#FF0000";
let xstep = sidelen * Math.sqrt(2 + Math.sqrt(2));
let ystep = sidelen * Math.sqrt(2 + Math.sqrt(2));

function drawOcto(x, y) {
	g.strokeStyle = color;
	g.beginPath();
	g.moveTo(x + ROOT2ON2 * sidelen, y);
	g.lineTo(x + ROOT2ON2 * sidelen + sidelen, y);
	g.lineTo(x + 2 * ROOT2ON2 * sidelen + sidelen, y + ROOT2ON2 * sidelen);
	g.lineTo(x + 2 * ROOT2ON2 * sidelen + sidelen, y + ROOT2ON2 * sidelen + sidelen);
	g.lineTo(x + ROOT2ON2 * sidelen + sidelen, y + 2 * ROOT2ON2 * sidelen + sidelen);
	g.lineTo(x + ROOT2ON2 * sidelen, y + 2 * ROOT2ON2 * sidelen + sidelen);
	g.lineTo(x, y + ROOT2ON2 * sidelen + sidelen);
	g.lineTo(x, y + ROOT2ON2 * sidelen);
	g.closePath();
	g.stroke();
}

function draw() {
	g.clearRect(0, 0, cnv.width, cnv.height);
	for (let xOff = -xstep; xOff < cnv.width; xOff += xstep) {
		for (let yOff = -ystep; yOff < cnv.height; yOff += ystep) {
			// Rotate xOff yOff by 22.5 degrees
			let newAngle = Math.PI / 180 * rotation;
			let x = (xOff - cnv.width / 2 - sidelen / 2) * Math.cos(newAngle) -
					(yOff - cnv.height / 2 - sidelen / 2) * Math.sin(newAngle) + cnv.width / 2 + sidelen / 2;
			let y = (xOff - cnv.width / 2 - sidelen / 2) * Math.sin(newAngle) +
					(yOff - cnv.height / 2 - sidelen / 2) * Math.cos(newAngle) + cnv.height / 2 + sidelen / 2;
			drawOcto(x, y);
		}
	}
}

function sidelenChange() {
	sidelen = parseInt(document.getElementById("sidelen").value);
	draw();
}

function rotationChange() {
	rotation = parseFloat(document.getElementById("rotation").value);
	draw();
}

function colorChange() {
	color = document.getElementById("color").value;
	draw();
}

function xstepChange() {
	xstep = parseFloat(document.getElementById("xstep").value);
	draw();
}

function ystepChange() {
	ystep = parseFloat(document.getElementById("ystep").value);
	draw();
}

function init() {
    cnv = document.getElementById("canvas");
    g = cnv.getContext("2d");
    draw();
}

draw();
