// ex19
// const arr = [1,2,3,4,5,6,7,8]
// console.log(arr[3]);
// console.log(arr.length , arr[7]);
// arr[2]='Sapir';
// arr.push (9);
// console.log(arr);


//ex20
const myBirthday = new Date(1997,02,18);

const person = {
    firstName: "Sapir", lastName:"Levi", age:25, carName:"Nissan", birthday:myBirthday,
    fullName:function() {return this.firstName + " " + this.lastName;}  
};

console.log(myBirthday);

const date1 = new Date(2022,10,35); // עבר לחודש הבא והוסיף את מספר הימים המיותרים שנותרו.
console.log(date1);