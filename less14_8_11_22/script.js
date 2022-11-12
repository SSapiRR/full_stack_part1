//EX23

let age = prompt("Enter your age");
if (age==50){
    alert ("GOLDEN");
} else if (age<18) {
    alert ("Not valid");
} else if (age<=30) {
    alert ("You are still young but good to go");
} else if (age<=60) {
    alert ("Aging like a fine wine aren't you?");
} else if (age<=95) {
    alert ("Please, call me sir");
} else {
    alert ("Most Valuable Grandpa!");
}

//EX24

//task 1
const day = new Date().getDay();

switch (day) {
    case 0: console.log("Sunday");
    break;
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday");
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
}

//task 2
for (let i=0; i<=100; i+=2 ) {
    console.log(i);
}

//EX25

//task 1
let str = "hello world";
console.log(str.length);

//task 2
let strF = "Fruits, Meat, Vegetables";
console.log(strF.slice(14,strF.length));

//task 3+4
let strLow = "abcd";
let strUp = "ABCD";
console.log(strLow.toUpperCase());
console.log(strUp.toLowerCase());

//task 5
console.log(strF.replace("Meat", "Tree"));