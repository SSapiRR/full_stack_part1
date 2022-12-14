let x= 10;
let y=25;
let sum = Number(x)+Number(y);
//1try
try {
if (sum>100)
    throw "bigger than 100";
if (sum <100)
    throw "smaller than 100";
if (sum===35)
    throw "sum is 35"
}
catch(error) {
    console.log(`MY FIRST CATCH ${error}`);
}


let st = "Hello World";
//2try
try {
    Number(st);
    throw "the string is number now"
}
catch(er) {
    console.log(`MY SEC CATCH ${er}`);
}

//3try
try {
    x.toString();
    throw "now x is string";
}
catch (erro) {
    console.log(`MY Third CATCH ${erro}`);
}

