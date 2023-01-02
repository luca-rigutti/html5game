const game2048 = require('./game2048');

test.skip('up', () => {
    const matrixSetup =
        [
            [2,4,2,0],
            [2,2,2,0],
            [0,0,2,4],
            [0,0,2,0]
        ];
    
    const matrixResult =
    [
        [4,4,4,4],
        [0,2,4,0],
        [0,0,0,0],
        [0,0,0,0]
    ];


  expect(game2048.up(matrixSetup)).toBe(matrixResult);
});

test('left matrix', () => {
    const matrixSetup =
        [
            [2,4,0,2],
            [2,2,2,0],
            [0,0,2,4],
            [2,2,2,2]
        ];
    
    const matrixResult =
    [
        [2,4,2,0],
        [4,2,0,0],
        [2,4,0,0],
        [4,4,0,0]
    ];


  expect(game2048.left(matrixSetup)).toEqual(matrixResult);
});

test('right matrix', () => {
    const matrixSetup =
        [
            [2,4,0,2],
            [2,2,2,0],
            [0,0,2,4],
            [2,2,2,2]
        ];
    
    const matrixResult =
    [
        [0,2,4,2],
        [0,0,2,4],
        [0,0,2,4],
        [0,0,4,4]
    ];


  expect(game2048.right(matrixSetup)).toEqual(matrixResult);
});
