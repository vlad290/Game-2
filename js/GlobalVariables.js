var width = 1200; //получаем ширину экрана
var height = 850; // получаем высоту экрана
var circleMass = [];
var verticalLineMass = [];
var horizontallLineMass = []
var coord_arr = [];
var coord_arr_lineHoriz = [];
var coord_arr_lineVert = [];
let objImg = {
    Onemass:[
        {x: 200, y: 750, type: 0},
        {x: 597, y: 715, type: 1},
        {x: 865, y: 747, type: 2}
    ]
};
const LEVELS = [
    [
        {x: 2,y: 1, type: 0},
        {x: 3,y: 1, type: 0},
        {x: 4,y: 1, type: 0},
        {x: 5,y: 1, type: 0},
        {x: 1,y: 2, type: 0},
        {x: 3,y: 2, type: 0},
        {x: 4,y: 2, type: 0},
        {x: 6,y: 2, type: 0},
        {x: 3,y: 3, type: 0},
        {x: 4,y: 3, type: 0},
        {x: 2,y: 3, type: 1},
        {x: 2,y: 4, type: 1},
        {x: 5,y: 3, type: 1},
        {x: 5,y: 4, type: 1},
        {x: 2,y: 3, type: 2},
        {x: 3,y: 3, type: 2},
        {x: 4,y: 3, type: 2},
        {x: 2,y: 5, type: 2},
        {x: 3,y: 5, type: 2},
        {x: 4,y: 5, type: 2}
    ],
    [
        {x: 0, y: 0, type: 0},
        {x: 1, y: 1, type: 0},
        {x: 2, y: 2, type: 0},
        {x: 3, y: 3, type: 0},
        {x: 4, y: 4, type: 0},
        {x: 5, y: 5, type: 0},
        {x: 6, y: 6, type: 0},
        {x: 0, y: 0, type: 1},
        {x: 0, y: 1, type: 1},
        {x: 0, y: 2, type: 1},
        {x: 0, y: 3, type: 1},
        {x: 0, y: 4, type: 1},
        {x: 0, y: 5, type: 1},
        {x: 6, y: 0, type: 1},
        {x: 6, y: 1, type: 1},
        {x: 6, y: 2, type: 1},
        {x: 6, y: 3, type: 1},
        {x: 6, y: 4, type: 1},
        {x: 6, y: 5, type: 1},
        {x: 0, y: 0, type: 2},
        {x: 1, y: 0, type: 2},
        {x: 2, y: 0, type: 2},
        {x: 3, y: 0, type: 2},
        {x: 4, y: 0, type: 2},
        {x: 5, y: 0, type: 2},
        {x: 0, y: 6, type: 2},
        {x: 1, y: 6, type: 2},
        {x: 2, y: 6, type: 2},
        {x: 3, y: 6, type: 2},
        {x: 4, y: 6, type: 2},
        {x: 5, y: 6, type: 2}
    ]
];
//Константы для фона
const verticalLinesFon = new PIXI.Graphics();
const horizontallLinesFon = new PIXI.Graphics();
const circlesFon = new PIXI.Graphics();
let contenerOriginal = new PIXI.Container();
let containerSimple = new PIXI.Container();
//var dimension = Math.floor(Math.random() * (21 - 6)) + 6;
var dimension = 6;
var p = 0;
const size = 70;