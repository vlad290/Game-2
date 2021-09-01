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
            .on('pointerup', this.onDragEnd.bind(this))
            .on('pointerupoutside', this.onDragEnd.bind(this))
            .on('pointermove', this.onDragMove.bind(this));
        verticalLineMass.push(verticalLine); //обратиться на прямую к объекту verticalLine мы не можем, поэтому отправляем его в массив
        renderer.stage.addChild(verticalLine);
        verticalLine.position.x = x;
        verticalLine.position.y = y;
    }
    onDragEnd()
    {
        for (var i = 0; i < coord_arr_lineVert.length; i++)
        {
            if ((this.position.x - 50 > coord_arr_lineVert[i].x - 35 && this.position.x - 50 < coord_arr_lineVert[i].x + 35) &&
                (this.position.y - 150 > coord_arr_lineVert[i].y - 35 && this.position.y - 150 < coord_arr_lineVert[i].y + 35))
            {
                var verticalLines = new PIXI.Graphics();
                verticalLines.lineStyle(1,0x000000);
                verticalLines.drawRect(0,0,1,70);
                verticalLines.position.x = coord_arr_lineVert[i].x;
                verticalLines.position.y = coord_arr_lineVert[i].y;
                renderer.stage.addChild(contenerOriginal);
                contenerOriginal.addChild(verticalLines);
            }
        }
        this.alpha = 1;
        this.dragging = false;
        this.data = null;
        this.position.x = this.dragObjStart.x;
        this.position.y = this.dragObjStart.y;
    }
    onDragMove()
    {
        verticalLinesFon.clear();
        if (this.dragging)
        {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
            for (var i = 0; i < coord_arr_lineVert.length; i++)
            {
                if ((this.position.x - 50 > coord_arr_lineVert[i].x - 35 && this.position.x - 50 < coord_arr_lineVert[i].x + 35) &&
                    (this.position.y - 150 > coord_arr_lineVert[i].y - 35 && this.position.y - 150 < coord_arr_lineVert[i].y + 35))
                {
                    verticalLinesFon.lineStyle(1, 0x000000);
                    verticalLinesFon.drawRect(0, 0, 1, 70);
                    verticalLinesFon.position.x = coord_arr_lineVert[i].x;
                    verticalLinesFon.position.y = coord_arr_lineVert[i].y;
                    renderer.stage.addChild(contenerOriginal);
                    contenerOriginal.addChild(verticalLinesFon);
                }
            }
        }
    }
}