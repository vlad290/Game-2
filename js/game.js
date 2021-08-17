var width = 1200; //получаем ширину экрана
var height = 800; // получаем высоту экрана
var circleMass = [];
var verticalLineMass = [];
var horizontallLineMass = []
var coord_arr = [];
var dimension = Math.floor(Math.random() * (21 - 6)) + 6;
//var dimension = 2;
console.log(dimension);
var size = 25;
const renderer = new PIXI.Application({ width, height, backgroundColor: 0xD5D5D5, resolution: window.devicePixelRatio || 1,autoResize: true,antialias: true});
document.body.appendChild(renderer.view);
var stage = new PIXI.Graphics();

const basicText = new PIXI.Text('Составь Рисунок по образцу',{ fontName: 'Desyrel', align: 'eenter' });
basicText.x = 420;
basicText.y = 25;
renderer.stage.addChild(basicText);

const leftText = new PIXI.Text('Образец',{ fontName: 'Desyrel', align: 'eenter' });
leftText.x = 820;
leftText.y = 100;
renderer.stage.addChild(leftText);

const rigthText = new PIXI.Text('Оригинал',{ fontName: 'Desyrel', align: 'eenter' });
rigthText.x = 220;
rigthText.y = 100;
renderer.stage.addChild(rigthText);

var divisionLine = new PIXI.Graphics();
divisionLine.lineStyle(2 , 0x000000);
divisionLine.moveTo(600,100);
divisionLine.lineTo(600,700);
renderer.stage.addChild(divisionLine);

divisionLine.lineStyle(2 , 0x000000);
divisionLine.moveTo(0,100);
divisionLine.lineTo(width,100);
renderer.stage.addChild(divisionLine);

divisionLine.lineStyle(2 , 0x000000);
divisionLine.moveTo(0,700);
divisionLine.lineTo(width,700);
renderer.stage.addChild(divisionLine);

class FieldOriginal
{
	constructor(colors, size)
	{
		this.colors = colors;
		this.size = size;
		const startX = 50;
		const startY = 150;
		new Сoord_arr(startX,startY,size);
		var fieldOriginal = new PIXI.Graphics();
		for (var i = 0; i < dimension; i++)
		{
			for (var j = 0; j < dimension; j++)
			{
				fieldOriginal.lineStyle(1, colors);
				fieldOriginal.drawRect(startX+j*size, startY+i*size, size, size);
			}
		}
		renderer.stage.addChild(fieldOriginal);
	}
}
class FieldSample
{
	constructor(colors, size)
	{
		this.colors = colors;
		this.size = size;
		const startX = 650;
		const startY = 150;
		var fieldSample = new PIXI.Graphics();
		for (var i = 0; i < dimension; i++)
		{
			for (var j = 0; j < dimension; j++)
			{
				fieldSample.lineStyle(1, colors);
				fieldSample.drawRect(startX+j*size, startY+i*size, size, size);
			}
		}
		renderer.stage.addChild(fieldSample);
	}
}
class Circle
{
	constructor(x, y, colors, size)
	{
		this.x = x;
		this.y = y;
		this.colors = colors;
		this.size = size;	
		var circle = new PIXI.Graphics();
		circle.interactive = true;
		circle.buttonMode = true;
		circle.lineStyle(1,colors);
		circle.beginFill();
		circle.drawCircle(0, 0, size);
		circle
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		circleMass.push(circle); //обратиться на прямую к объекту Circle мы не можем, поэтому отправляем его в массив
		circle.position.x = x;
		circle.position.y = y;
		renderer.stage.addChild(circle);
		function OnDragEnd()
		{
			for (var i = 0; i < coord_arr.length; i++)
			{
				if ((this.position.x > coord_arr[i].x - 12.5 && this.position.x < coord_arr[i].x + 12.5) && (this.position.y > coord_arr[i].y - 12.5 && this.position.y < coord_arr[i].y + 12.5))
				{
					var circles = new PIXI.Graphics();
					circles.lineStyle(1,0x000000);
					circles.drawCircle(0, 0, 10);
					circles.position.x = coord_arr[i].x;
					circles.position.y = coord_arr[i].y;
					console.log(coord_arr[i].x);
					renderer.stage.addChild(circles);
					console.log("Попал");
				}
			}
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			this.position.x = this.dragObjStart.x;
			this.position.y = this.dragObjStart.y;
		}
	}
}
class VerticalLine
{
	constructor(x,y,colors)
	{
		this.x = x;
		this.y = y;
		this.colors = colors;
		var verticalLine = new PIXI.Graphics();
		verticalLine.interactive = true;
		verticalLine.buttonMode = true;
		verticalLine.lineStyle(1,colors);
		verticalLine.beginFill();
		verticalLine.drawRect(0,0,6,70);
		verticalLine
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		verticalLineMass.push(verticalLine); //обратиться на прямую к объекту verticalLine мы не можем, поэтому отправляем его в массив
		renderer.stage.addChild(verticalLine);
		verticalLine.position.x = x;
		verticalLine.position.y = y;
		function OnDragEnd()
		{
			for (var i = 0; i < coord_arr.length; i++)
			{
				if ((this.position.x > coord_arr[i].x - 12 && this.position.x < coord_arr[i].x + 12) && (this.position.y > coord_arr[i].y - 12 && this.position.y < coord_arr[i].y + 12))
				{
					var verticalLines = new PIXI.Graphics();
					verticalLines.lineStyle(1,0x000000);
					verticalLines.drawRect(0,0,1,25);
					verticalLines.position.x = coord_arr[i].x;
					verticalLines.position.y = coord_arr[i].y;
					console.log(coord_arr[i].x);
					renderer.stage.addChild(verticalLines);
					console.log("Попал Линия Вертикальная");
				}
			}
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			this.position.x = this.dragObjStart.x;
			this.position.y = this.dragObjStart.y;
		}
	}
}
class HorizontallLine
{
	constructor(x,y,colors)
	{
		this.x = x;
		this.y = y;
		this.colors = colors;
		var horizontallLine = new PIXI.Graphics();
		horizontallLine.interactive = true;
		horizontallLine.buttonMode = true;
		horizontallLine.lineStyle(1, colors);
		horizontallLine.beginFill();
		horizontallLine.drawRect(0,0,70,6);
		horizontallLine
			.on('pointerdown', OnDragStart)
			.on('pointerup', OnDragEnd)
			.on('pointerupoutside', OnDragEnd)
			.on('pointermove', OnDragMove);
		horizontallLineMass.push(horizontallLine); //обратиться на прямую к объекту horizontallLine мы не можем, поэтому отправляем его в массив
		renderer.stage.addChild(horizontallLine);
		horizontallLine.position.x = x;
		horizontallLine.position.y = y;
		function OnDragEnd()
		{
			for (var i = 0; i < coord_arr.length; i++)
			{
				if ((this.position.x > coord_arr[i].x - 12 && this.position.x < coord_arr[i].x + 12) && (this.position.y > coord_arr[i].y - 12 && this.position.y < coord_arr[i].y + 12))
				{
					var horizontallLines = new PIXI.Graphics();
					horizontallLines.lineStyle(1,0x000000);
					horizontallLines.drawRect(0,0,25,1);
					horizontallLines.position.x = coord_arr[i].x;
					horizontallLines.position.y = coord_arr[i].y;
					console.log(coord_arr[i].x);
					renderer.stage.addChild(horizontallLines);
					console.log("Попал линия горизонтальная");
				}
			}
			this.alpha = 1;
			this.dragging = false;
			this.data = null;
			this.position.x = this.dragObjStart.x;
			this.position.y = this.dragObjStart.y;
		}
	}
}
class Сoord_arr
{
	constructor(startX,startY,size)
	{
		for (var i = 0; i < dimension + 1; i++)
		{
			for (var j = 0; j < dimension + 1; j++)
			{
				coord_arr.splice(i, 0, {
					x: startX+j*size,
					y: startY+i*size
				});
			}
		}
		console.log(coord_arr);
	}
}
new FieldOriginal(0x3D85C6,size);
new FieldSample(0x3D85C6,size);
new Circle(200,750,0xFFFFFF,12.5);
new VerticalLine(597,715,0xFFFFFF);
new HorizontallLine(865,747,0xFFFFFF);


function OnDragStart(event)
{
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.dragObjStart = new PIXI.Point();
    this.dragObjStart.copyFrom(this.position);
}
function OnDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
    }
}
