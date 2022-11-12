//ex1

let x = 10;
let y = 15;
let rand = Math.floor(Math.random()*(y-x+1))+x;
console.log(rand);

//ex2

const str = "somePrhase";
let str2 = "";
for ( let i = 0 ; i< str.length; i++ ){
    str2 += str[i];
    console.log(str2);
}
