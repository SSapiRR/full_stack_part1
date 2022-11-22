
function matrixB (size, type=0) {
    let matrix = [];
    for ( let row = 0; row<size; row ++ ) {
        let inner_arr = [];
        for ( let col = 0; col < size; col ++ ) {
            inner_arr.push(type);
        }
        matrix.push(inner_arr);
    }
    return matrix;
};

let m = matrixB(3,"HI")

function printMat (arr) {
    for (let i=0; i<arr.length; i++ ) {
        console.log(...m[i]);
    }
};

// console.log(printMat(m));

function setIndex (indexRow, indexCol, val, arr) {
    arr[indexRow][indexCol]=val;
};

// setIndex(1,1,"YES", m);
// console.log(m);

//אופציה 1
function diagonalLine ( val, arr) {
    for (let i=0; i< arr.length; i++){
    arr[i][i]=val;
    }
};

//אופציה 2
// function diagonalLine ( val, arr) {
//     for (let i=0; i< arr.length; i++){
//          setIndex(i,i,val, m)
//     }
// };

// console.log(diagonalLine("YES", m));
// console.log(printMat(m));

console.log(printMat(m));


//אופציה נוספת לשינוי ערך בתוך המערך- הפעם בתוך הפונקציה הראשית עצמה
// function matrixB (size, type=0, indexRow, indexCol, pushlet) {
//     let matrix = [];
//     for ( let row = 0; row<size; row ++ ) {
//         let inner_arr = [];
//         for ( let col = 0; col < size; col ++ ) {
//             inner_arr.push(type);
//         }
//         matrix.push(inner_arr);
        
//     }
//     matrix[indexRow][indexCol]=pushlet;
//     return matrix;
// }

// let m = matrixB(3,"HI",2,2,"NOT")
// console.log(m);
