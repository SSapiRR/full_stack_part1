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



function arrToMatrix(arr) {
    let arr1 = [];
    let num = Math.sqrt(arr.length);
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr.slice(0, num));
        arr.splice(0, num);
    }
    return arr1;
}

function indexC(i, j) {
    return i + j + 2;
}

console.log(indexC(1, 2));