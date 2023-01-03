//Q1
// const chars = {'a':'','e':'','i':'','o':'','u':''};
// $("#bu1").click(function() {
//     $("#p1").text($("#in1").val().replace(/[aeiou]/g, m => chars[m]));
// });

//Q2
// let arr = [1,2,3,4,5,6,7,8,9];
// function evenNum (arr) {
//     let arr1=[];
//     for (let i=0; i<=arr.length;i++) {
//         if (arr[i]%2==0) {
//             arr1.push(arr[i]);
//         }
//     }
//     return arr1;
// }
// console.log(evenNum(arr));

//Q3
let arrS = ["apple", "banana", "grape", "pear"];
function howMany(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j >= 5)
                arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(howMany(arrS));