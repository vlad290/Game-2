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
        circle.lineStyle(1,0x000000);
        circle.beginFill(0x000000,0.0000001);
        circle.drawCircle(0, 0, size);
        circle
            .on('pointerdown', OnDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
        circle.position.x = x;
        circle.position.y = y;
        renderer.stage.addChild(circle);
    }
    onDragEnd()
    {
        for (var i = 0; i < coord_arr.length; i++)
        {
            if ((this.position.x - 50 > coord_arr[i].x - 35 && this.position.x - 50 < coord_arr[i].x + 35) &&
                (this.position.y - 150 > coord_arr[i].y - 35 && this.position.y - 150 < coord_arr[i].y + 35))
            {
                var circles = new PIXI.Graphics();
                circles.lineStyle(1,0x000000);
                circles.drawCircle(0, 0, 25);
                circleMass.push(circles); //обратиться на прямую к объекту Circle мы не можем, поэтому отправляем его в массив
                circles.position.x = coord_arr[i].x;
                circles.position.y = coord_arr[i].y;
                renderer.stage.addChild(contenerOriginal);
                contenerOriginal.addChild(circles);
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
        circlesFon.clear();
        if (this.dragging)
        {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
            for (var i = 0; i < coord_arr.length; i++)
            {
                if ((this.position.x - 50 > coord_arr[i].x - 35 && this.position.x - 50 < coord_arr[i].x + 35) &&
                    (this.position.y - 150 > coord_arr[i].y - 35 && this.position.y - 150 < coord_arr[i].y + 35))
                {
                    circlesFon.lineStyle(1,0x000000);
                    circlesFon.drawCircle(0, 0, 25);
                    circlesFon.position.x = coord_arr[i].x;
                    circlesFon.position.y = coord_arr[i].y;
                    renderer.stage.addChild(contenerOriginal);
                    contenerOriginal.addChild(circlesFon);
                }
            }
        }
    }
}