var Plot = [];
var Dis;
function PlotGenerator(min, max) {
	for (i=0; i<4; i++) {
		Plot.push(Math.floor(Math.random() * max) + min);
	}
}

PlotGenerator(1, 10);

//x1, y1, x2, y2
//0,   1,  2,  3
function PythaGorTheroem() {
	var ChangeX = Math.pow(Plot[2] - Plot[0], 2);
	var ChangeY = Math.pow(Plot[3] - Plot[1], 2);
	Dis = Math.round(Math.sqrt(ChangeX + ChangeY));
	console.log("nonrounded : " + Math.sqrt(ChangeX + ChangeY));
}

PythaGorTheroem();

console.log(Plot + " --> distance between two plots is : " + Dis);

