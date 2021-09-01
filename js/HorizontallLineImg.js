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
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
        horizontallLineMass.push(horizontallLine); //обратиться на прямую к объекту horizontallLine мы не можем, поэтому отправляем его в массив
        renderer.stage.addChild(horizontallLine);
        horizontallLine.position.x = x;
        horizontallLine.position.y = y;
    }
    onDragEnd()
    {
        for (var i = 0; i < coord_arr_lineHoriz.length; i++)
        {
            if ((this.position.x - 50 > coord_arr_lineHoriz[i].x - 35 && this.position.x - 50 < coord_arr_lineHoriz[i].x + 35) &&
                (this.position.y - 150 > coord_arr_lineHoriz[i].y - 35 && this.position.y - 150 < coord_arr_lineHoriz[i].y + 35))
            {
                var horizontallLines = new PIXI.Graphics();
                horizontallLines.lineStyle(1,0x000000);
                horizontallLines.drawRect(0,0,70,1);
                horizontallLines.position.x = coord_arr_lineHoriz[i].x;
                horizontallLines.position.y = coord_arr_lineHoriz[i].y;
                renderer.stage.addChild(contenerOriginal);
                contenerOriginal.addChild(horizontallLines);
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
        horizontallLinesFon.clear();
        if (this.dragging)
        {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
            for (var i = 0; i < coord_arr_lineHoriz.length; i++)
            {
                if ((this.position.x - 50 > coord_arr_lineHoriz[i].x - 35 && this.position.x - 50 < coord_arr_lineHoriz[i].x + 35) &&
                    (this.position.y - 150 > coord_arr_lineHoriz[i].y - 35 && this.position.y - 150 < coord_arr_lineHoriz[i].y + 35))
                {
                    horizontallLinesFon.lineStyle(1, 0x000000);
                    horizontallLinesFon.drawRect(0, 0, 70, 1);
                    horizontallLinesFon.position.x = coord_arr_lineHoriz[i].x;
                    horizontallLinesFon.position.y = coord_arr_lineHoriz[i].y;
                    renderer.stage.addChild(contenerOriginal);
                    contenerOriginal.addChild(horizontallLinesFon);
                }
            }
        }
    }
}