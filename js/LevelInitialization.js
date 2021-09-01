class ImgSample
{
    constructor(level)
    {
        this.level = level;
        LEVELS[level].forEach((figure) => {
            renderer.stage.addChild(containerSimple);
            containerSimple.addChild(creatStaticFigure(figure));
        })
    }
}