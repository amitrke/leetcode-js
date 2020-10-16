/**
 * 200. Number of Islands
 * 
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid == null || grid == undefined || grid.length < 1 ){
        return 0;
    }

    var numOfIslands = 0;

    for (var rowPtr=0; rowPtr<grid.length; rowPtr++){
        for (var colPtr=0; colPtr<grid[rowPtr].length; colPtr++){
            if (grid[rowPtr][colPtr] == "1"){
                numOfIslands += recursive(grid, rowPtr, colPtr);
            }
        }
    }

    return numOfIslands;
};

function recursive(grid, rowPtr, colPtr){
    if (rowPtr < 0 || rowPtr > grid.length-1 || colPtr < 0 
        || colPtr > grid[rowPtr].length-1 || grid[rowPtr][colPtr] == "0"
        ){
        return 0;
    }
    grid[rowPtr][colPtr] = "0";

    recursive(grid, rowPtr, colPtr+1);
    recursive(grid, rowPtr, colPtr-1);
    recursive(grid, rowPtr-1, colPtr);
    recursive(grid, rowPtr+1, colPtr);

    return 1;
}

var grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];

// var resp = numIslands(grid);
// console.log(resp);

grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ];
// resp = numIslands(grid);
// console.log(resp);

// grid = [["1","0","1","1","0","1","1"]];
grid = [
    ["1"],
    ["0"],
    ["1"],
    ["1"],
    ["0"],
    ["1"],
    ["1"]
];

grid = [
    ["0"]
];
resp = numIslands(grid);
console.log(resp);