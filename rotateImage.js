/**
 * 48. Rotate Image
 * 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var size = matrix.length;
    console.log(`Size=${size}`);
    //transpose
    for (var rPtr=0; rPtr<size; rPtr++){
        for (var cPtr=rPtr+1; cPtr < size; cPtr++){
            console.log(`rPtr=${rPtr}, cPtr=${cPtr}`);
            var tmp = matrix[cPtr][rPtr];
            matrix[cPtr][rPtr] = matrix[rPtr][cPtr];
            matrix[rPtr][cPtr] = tmp;
        }
    }
    console.log(JSON.stringify(matrix));
    //horizonal flip
    var middle = Math.floor(size/2);
    for (var rowPtr=0; rowPtr<size; rowPtr++){
        for (var lPtr=0; lPtr < middle; lPtr++){
            var rPtr = size-lPtr-1;
            console.log(`rowPtr=${rowPtr}, lPtr=${lPtr}, pPtr=${rPtr}`);
            var tmp = matrix[rowPtr][lPtr];
            matrix[rowPtr][lPtr] = matrix[rowPtr][rPtr];
            matrix[rowPtr][rPtr] = tmp;
        }
    }
    console.log(JSON.stringify(matrix));
};

var matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(matrix);