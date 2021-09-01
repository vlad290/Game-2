class GameStart {
  constructor(colors, size) {

    var levels = 0;

    this.colors = colors;
    this.size = size;
    contenerOriginal.x = 50;
    contenerOriginal.y = 150;
    var fieldOriginal = new PIXI.Graphics();
    new Сoord_arr(0,0,size);
    for (var i = 0; i < dimension; i++)
    {
      for (var j = 0; j < dimension; j++)
      {
        fieldOriginal.lineStyle(2, colors);
        fieldOriginal.drawRect(j*size, i*size, size, size);
      }
    }
    renderer.stage.addChild(contenerOriginal);
    contenerOriginal.addChild(fieldOriginal);

    this.colors = colors;
    this.size = size;
    containerSimple.x = 650;
    containerSimple.y = 150;
    var fieldSample = new PIXI.Graphics();
    for (var i = 0; i < dimension; i++)
    {
      for (var j = 0; j < dimension; j++)
      {
        fieldSample.lineStyle(2, colors);
        fieldSample.drawRect(j*size, i*size, size, size);
      }
    }
    renderer.stage.addChild(containerSimple);
    containerSimple.addChild(fieldSample);

    objImg.Onemass.forEach((figure) => {
      creteFigure(figure);
    })
    new ImgSample(levels);
  };
}