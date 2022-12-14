function matrixB(size, type = 0) {
    let matrix = [];
    for (let row = 0; row < size; row++) {
        let inner_arr = [];
        for (let col = 0; col < size; col++) {
            inner_arr.push(type);
        }
        matrix.push(inner_arr);
    }
    return matrix;
};

let m = matrixB(4, "HI")

function setIndex(indexRow, indexCol, val, arr) {
    arr[indexRow][indexCol] = val;
};

function diagonalT(val, arr) {
    for (let i = 0; i < m.length; i++) {
        setIndex(i, m.length - 1 - i, val, arr)
    };
    return arr;
};

function printMat(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(...arr[i])
    };
};

function box(val, arr) {
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m.length; j++) {
            if (i == 0 || i == arr.length - 1 || j == 0 || j == arr.length - 1) {
                setIndex(i, j, val, arr)
            }
        }
    };
    return arr;
};

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function matrixToArr(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(...arr[i]);
    };
    return arr1;
};


// //not a good option 
// function arrToMatrix(arr) {
//     let arr1 = [];
//     let num = Math.sqrt(arr.length);
//     for (let i = 0; i < arr.length; i++) {
//         arr1.push(arr.slice(0, num));
//         arr.splice(0, num);
//     }
//     return arr1;
// }

//not working
function arrToMatrix(arr,num) {
    let matrix, i, k;
    for ( i=0, k=-1; i<arr.length; i++) {
        if (i%num ===0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(arr[i]);
    }
    return matrix;
}

let arr7 =[1,2,3,4,5,6,7,8,9,10,11,12,13];

//let arr3 = [[1,2,3],[4,5,6],[7,8,9]];
/**
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 */
/**
 * 4 in (1,0) in 3th.  1*3+0;
 * i*size+j
 */

let arr4 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]




// function indexArr(arr,i,j,size) {
//     return arr[i*size][j];
// }

console.log(box(2, arr4));