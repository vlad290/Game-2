new GameStart(0x3D85C6,size);

function OnDragStart(event)
{
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.dragObjStart = new PIXI.Point();
    this.dragObjStart.copyFrom(this.position);
}
