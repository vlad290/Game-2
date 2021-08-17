let app, graphics;

const cellSize = 10;

initBoard();
updateGridAlgorithm(false, true, 53);   //does work for values < 53

function initBoard() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    app = new PIXI.Application({
        width: width,
        height: 900,
        backgroundColor: 0xffffff,
        resolution: window.devicePixelRatio || 1,
        autoResize: true,
        antialias: true
    });

    document.body.appendChild(app.view);
    graphics = new PIXI.Graphics();

    app.stage.addChild(graphics);
}

function updateGridAlgorithm(randomStart, showGrid, iterations){
    graphics.clear();
    if(showGrid){
        drawNewGrid(iterations);
    }
}

function drawNewGrid(iterations){
    const width = window.innerWidth;
    const gridWidth = iterations * 2 + 1;
    const startX = width/2 - gridWidth/2 * cellSize;
    const startY = 20;

    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < gridWidth; j++) {
            graphics.lineStyle(0.5, 0x999999);
            graphics.drawRect(startX+j*cellSize, startY+i*cellSize, cellSize, cellSize);
        }
    }
}