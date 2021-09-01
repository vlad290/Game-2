const renderer = new PIXI.Application({ width, height, backgroundColor: 0xD5D5D5, resolution: window.devicePixelRatio || 1,autoResize: true,antialias: true});
document.body.appendChild(renderer.view);
var stage = new PIXI.Graphics();

const basicText = new PIXI.Text('Составь Рисунок по образцу',{ fontName: 'Desyrel', align: 'eenter' });
basicText.x = 420;
basicText.y = 25;
renderer.stage.addChild(basicText);

const leftText = new PIXI.Text('Оригинал',{ fontName: 'Desyrel', align: 'center' });
leftText.x = 820;
leftText.y = 100;
renderer.stage.addChild(leftText);

const rigthText = new PIXI.Text('Образец',{ fontName: 'Desyrel', align: 'center' });
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

const clearText = new PIXI.Text('Очистить Поле',{ fontName: 'Desyrel', align: 'center' });
clearText.x = 500;
clearText.y = 800;
clearText.interactive = true;
clearText.buttonMode = true;
clearText.on('pointerdown', onClick);
renderer.stage.addChild(clearText);
function onClick() {
    location.reload(); // перезагружаем страницу
}