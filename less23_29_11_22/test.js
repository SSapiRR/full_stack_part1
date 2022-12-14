let myMin = (arr) => {
    let m=arr[0];
    for (let i=0; i<arr.length; i++)
    if (m>arr[i]) {
        m=arr[i];
    }
    return m;
};

let mySort = (arr) => {
    let ar =[];
    for (let i=0; i<arr.length; i++) {
        ar.push(myMin(arr));
        arr.slice()
    };
    return ar;
};


           
let arr = [5,8,9,2,,6];
console.log(mySort(arr)); 


// let mySort = (arr) => {

// }

// let mySort = (arr) => {
//     function num2 {
//     let ar =[];
//     for (let i=0; arr.length===0; i++) {
//         let f = arr[i];
//         let l = arr[i+1];
//         if (f<l) {
//             ar.push(f);
//             arr.splice(f)
//         }
//     }
        
//     };
//     return ar;
// };