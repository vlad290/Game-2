function creteFigure(figure) {
    let obj;
    switch (figure.type) {
        case 0:
            obj = new Circle(figure.x,figure.y,0xFFFFFF,25);
            break;
        case 1:
            obj = new VerticalLine(figure.x,figure.y,0xFFFFFF);
            break;
        case 2:
            obj = new HorizontallLine(figure.x,figure.y,0xFFFFFF);
            break;
        default:
            obj = new Circle(figure.x,figure.y,0xFFFFFF,25);
    }
    return obj;
}

function creatStaticFigure(figure)
{
    const grapics = new PIXI.Graphics();
    switch (figure.type) {
        case 0:
            grapics.lineStyle(1,0x000000);
            grapics.drawCircle(0, 0, 25);
            grapics.position.x = figure.x * size;
            grapics.position.y = figure.y * size;
            break;
        case 1:
            grapics.lineStyle(1,0x000000);
            grapics.drawRect(0,0,1,70);
            grapics.position.x = figure.x * size;
            grapics.position.y = figure.y * size;
            break;
        case 2:
            grapics.lineStyle(1,0x000000);
            grapics.drawRect(0,0,70,1);
            grapics.position.x = figure.x * size;
            grapics.position.y = figure.y * size;
            break;
        default:
            grapics.lineStyle(1,0x000000);
            grapics.drawCircle(0, 0, 25);
            grapics.position.x = figure.x * size;
            grapics.position.y = figure.y * size;
    }
    return grapics;
}