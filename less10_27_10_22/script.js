//task 1
function double(x) {
res= x*53;
alert(res);
}

let num1=10;
double(num1);

//task 2
function expo (x,y) {
    res = x**y;
    alert(res);
}

let num2= 2;
expo(num1,num2);

//task 3
function add1() {
    let num1 = prompt("enter  number");
    let num2 = prompt("enter  number");
    let num3 = prompt("enter  number");
    let num4 = prompt("enter  number");
    let num5 = prompt("enter  number");
    let num6 = prompt("enter  number");
    let num7 = prompt("enter  number");
    let num8 = prompt("enter  number");
    let res = Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5)+Number(num6)+Number(num7)+Number(num8);
    alert(res);
};

add1();

//task 4
function person() {
    let fName= prompt("press your first name");
    let lName= prompt("press your last name");
    let age= prompt("press your age");
    let p1 = ("Your first name is: " +fName + "\nYour first name is: " + lName + "\nYou are: " +age+" years old");
    alert(p1);
}

person();