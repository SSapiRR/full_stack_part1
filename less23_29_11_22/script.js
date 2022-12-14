// we are not allowed to use the built-in sort method, sum, max, min, average, median, mode, range, variance methods

//5Q
let mySum = (arr) => {
    let s=0;
    for (let i = 0; i<arr.length ; i++ ) {
        s+=arr[i];
    }
    return s;
};

// example mySum function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(mySum(arr)); -> 55

let myMax = (arr) => {
    let m=arr[0];
    for (let i=0; i<arr.length; i++)
    if (m>arr[i]) {
        m=arr[i];
    }
    return m;
};

// example myMax function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMax(arr)); -> 10

let myMin = (arr) => {
    let m=arr[0];
    for (let i=0; i<arr.length; i++)
    if (m<arr[i]) {
        m=arr[i];
    }
    return m;
};


// example myMin function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMin(arr)); -> 1


let myAverage = (arr) => {
    let s=0;
    for (let i = 0; i<arr.length ; i++ ) {
        s+=arr[i];
    }
    s=s/arr.length+1;
    return s;
};
// example myAverage function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myAverage(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myAverage(arr2)); -> 4.25



let myMedian = (arr) => {
    let g = arr.length;
    let up;
    if (g%2===0){
        up =(arr.length/2)+1;}
    else 
        {up = Math.round(arr.length/2)};
    let floor=Math.floor(arr.length/2);
    let f= (arr[up-1]+arr[floor-1])/2;
    
    return f;
};
 // median is the middle value of an array
// example myMedian function:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myMedian(arr)); -> 5.5
// let arr2 = [ 1,2,2,3,4,7,7,9]
// console.log(myMedian(arr2)); -> 3.5


//4Q
let myMode = (arr) => {}; // mode is the most common value of an array

let myRange = (arr) => {
let k = myMax(arr)-myMin(arr);
return Math.abs(k);
}; 
// range is the difference between the largest and smallest values of an array

let myVariance = (arr) => {}; // variance is the average of the squared differences from the Mean

let mySort = (arr) => {
    let ar =[];
    for (let i=0; i<arr.length; i++) {
        let f = arr[i];
        let l = arr[i+1];
        if (f>l) {
            arr.push(l);
        }
    }

}; // sort an array from smallest to largest 