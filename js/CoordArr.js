class Сoord_arr
{
    constructor(startX,startY,size)
    {
        for (var i = 0; i < dimension + 1; i++)
        {
            for (var j = 0; j < dimension + 1; j++)
            {
                coord_arr.splice(i, 0, {
                    x: j*size,
                    y: i*size
                });
            }
        }
        for (var i = 0; i < dimension + 1; i++)
        {
            for (var j = 0; j < dimension; j++)
            {
                coord_arr_lineHoriz.splice(i, 0, {
                    x: j*size,
                    y: i*size
                });
            }
        }
        for (var i = 0; i < dimension; i++)
        {
            for (var j = 0; j < dimension + 1; j++)
            {
                coord_arr_lineVert.splice(i, 0, {
                    x: j*size,
                    y: i*size
                });
            }
        }
    }
}