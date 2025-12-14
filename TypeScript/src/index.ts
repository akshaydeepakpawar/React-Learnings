// // Strings 
// let myName:string ="akshay";
// console.log(myName);
// //number
// let fevNumber:number=27;
// console.log(fevNumber);
// //boolean
// let tsHard:boolean=false;
// console.log(tsHard);

// Type inference is a core feature in TypeScript that allows the compiler to automatically determine the type of a variable, function return value, or expression based on its assigned value or context, reducing the need for explicit type annotations. This makes the code more concise and readable while maintaining type safety

let myName="akshay";
console.log(myName);
let fevNumber=27;
console.log(fevNumber);
let tsHard=false;
console.log(tsHard);

//ANY TYPE IN TS
let color:any="crimson"
console.log(color);
color=10;
console.log(color);
color=true;
console.log(color);

//functions in TS
//regular
function addOne(num:number){
    return num+1;
}
console.log(addOne(10));
//arrow function
const addTwo=(x:number,y:number)=>{
    return x+y;
}
console.log(addTwo(1,2));


function greet(person="anonoymous"){
    return `hello ${person}`
}
console.log(greet());

//Array in TS (array should be of same datatype)
const nums:number[]=[1,2,3,4,5]
console.log(nums);
const strs:string[]=['a','b',"c","d"]
console.log(strs);

