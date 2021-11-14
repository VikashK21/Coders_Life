// const name="vikash"
// const ss='sd';
// function a(b,c){
//     const 
//     if (b>c){
//         if (b==4){
//             console.log(ss);
//         }
        
//         console.log(ss);

//     }console.log(ss,name);
// }
// a()
// a(4,2);
// var ss='kkkkf';
// console.log(ss);

/* var is a keyword used with variable to define a variable and that variable can be used anywhere if it is defined out of the function, just like the global v.
let is also a keyword used to define a variable and that varible can only be used in the block or in the nested block.
cont is also a keyword used to define a variable and that varible can only be used once that means it will be constant.
*/
////////////////////////////////////////////////////////////
// myArray=[3,45,34,23,12,0]
// myArray.pop()
// console.log(myArray);

// function myLocalScope() {

//     // Only change code below this line
//     var myVar = "locc";
  
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
  
//   // Run and check the console
//   // myVar is not defined outside of myLocalScope
//   console.log('outside myLocalScope', myVar);
// var a=22


// console.log(`vikash kumar ki age ${a}`);
// for (let i=1;i<=10;i++)
// {
//     console.log (i);
// }

// let i=10;
// while (i>=0)
// {
//     console.log (i);
//     i--;
// }

// do{
//     var i=1;
//     console.log (i);
//     i++;
// } while (i<=10);


// var arr=[1,3,6,2,5];
// arr.forEach(function (val12345, d){
//     console.log (val12345, d);
// });


// function demo() {
//     let a='vikash'
//     console.log(a);
// } 
// demo()
// var a=27 
// console.log(a);
// a+='vishal'
// console.log(a);

// let readlineSync = require("readline-sync");
// var yourName=kit= readlineSync.question("What is your name: ")
// console.log(yourName, kit);
// const a=QuestionInt('enter a num')
// const a=question('enter')


// function sum(a,b){
//     return a+b
// }
// console.log(sum(2,3));


// const ae=function(a,b){
//     return a+b
// }
// console.log(ae(3,2));


///////////////// const aa=(a,b)=> a+b;
////////////////// console.log(aa(2,3));

// function student(name,age,gen)
// {
//     this.name=name;
//     this.age=age;
//     this.gender=gen;
// }
 
// var simran=new student('Simran',22,'F');
// var shikhar=new student('Shikhar',21,'M');
// // console.log(`Name:${simran.name}, Age:${simran.age} and Gender:${simran.gender}`);
// // console.log(`Name:${shikhar.name}, Age:${shikhar.age} and Gender:${shikhar.gender}`);
// console.log(simran);
// console.log(shikhar);
// console.log('satyam \nkushwah');
// console.log(Object.entries(simran));


// var info={
//   fname:'Surya',
//   mname:'Pratap',
//   lname:'Shetty',
//   name:function(){
//     return `My name is ${this.fname} ${this.mname} ${this.lname}.`
//   }
// };
// console.log(info.name());     

// var prop=require("prompt-sync")()
// var a=prop("enter the value")

// console.log(a);

// var a=0
// var b=false
// console.log(a==b,a===b);

// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
//   console.log(typeof foo());
//   typeof a; // => ???
//   typeof b

// const clothes = ['jacket', 't-shirt'];
// clothes.length = 1;

// console.log(clothes);

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);{
//   numbers.push(i + 1);
// }
// console.log(numbers);

// function arrayFromValue(item) {
//     return 
//     [item];
//   }
// console.log(arrayFromValue(10));



// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// console.log(0.1 + 0.2 == 0.3 );

// myVar;   // => ???
// myConst; // => ???
// var myVar = 'value';
// var myConst = 3.14;
// console.log(typeof myConst);

// var a;
// function demo() {
//     if (true) {
//         var a ='sk'
//     }
//     return a
// }
// console.log(a)
// console.log(demo()); 

/////////////////Questions.............INPUT

// var input=(require("prompt-sync")())("enter the value")
// console.log(typeof input);
// console.log(person);

/////////////////left side right angled triangle
// const inputm = require("readline-sync");
// var kit=k= inputm.questionInt("Enter a Num: ")
// // console.log(kit);
// for (let n=1; n<=k; n++) {
//     console.log(' '.repeat(kit), '*'.repeat(n));
//     kit--
// }

/////////////////right side angle triangle
// var a=inputm.questionInt('Enter a No.: ')
// for (let n=1; n<=a; n++) {
//     console.log('*'.repeat(n));
// }

//////////////Pyramid
// var kit=k= inputm.questionInt("Enter a Num: ")
// console.log(kit);
// for (let n=1; n<=k; n++) {
//     console.log(' '.repeat(kit), '* '.repeat(n));
//     kit--
// }

// var a=i=inputm.questionInt('Enter a No.: ')
// var b=1;
// for (b; b<=a; b++) {
//     var s=" "
//     for (let c=1; c<=b; c++) {
//         s+='*'
//     }

//     i--
//     console.log(s);
//     s=" "
// }




/////////////////////////////////////////////////////////
////////////////////////////////////////////    ES6     /
////////////////////////////////////////////////////////

// var max = 10;    
// var min = 2;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// function countdown(n) {
//     if (n<1){
//       return [];
//     }else {
//       const a=countdown(n-1);
//       a.unshift(n);
//       return a;
//     }
//   }
// console.log(countdown(5));
// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

// let camper = "James";
// let camper = "David";   

// var camper = "James";
// var camper = "David";
// console.log(camper);
// console.log('vikash');



// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       let i = 'block scope';
//       console.log(`Block scope i is: ${i}`);
//     }
//     console.log('Function scope i is:', i);
//     return i;
//   }
// console.log(checkScope());    

// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//   // Using s = [2, 5, 7] would be invalid
//   let a=s.pop()
//   s.unshift(a);
//   return s
//   // Only change code above this line
// }
// console.log(editInPlace());


// var myConcat = (arr1, arr2) => {
//     return arr1.concat(arr2);
//   };
  
//   console.log(myConcat([1, 2], [3, 4, 5]));

// const myConcat1 = (arr1, arr2) => {
// return arr1.concat(arr2);
// };

// console.log(myConcat1([1, 2], [3, 4, 5]));

// function howMany(...args) {
//     return "You have passed " + args.length + " arguments.";
//   }
//   console.log(howMany(0, 1, 2));
//   console.log(howMany("string", null, [1, 2, 3], { }));

// const sum = (...args) => {
//     console.log(args);
//     console.log(args.reduce((a, b) => a + b, 0));
//   }
// console.log(sum(1,2,3,4,3,4))







// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];  // it will make the copy of arr1....

// console.log(arr2);

// const user = { name: {n:'John Doe', age: 34 }};

// const name = user.name;
// const age = user.age;

// const { n, age } = user.name;
// console.log(n, age);






// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Only change code below this line
  
// const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES
// /////////////////////////// the 'highToday' and 'highTomorrow' are the variables assigned....
// // Only change code above this line
// console.log(highToday, highTomorrow);



// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // Only change code below this line
  
// const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST
// console.log(lowToday, highToday); /// See how it works the same way as variables....

// // Only change code above this line


///////////to swap the values in the array

// let a = 8, b = 6;
// [a, b]=[b, a]
// console.log(a, b);


/////////////finding the avarage from the following data:
// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = ({max, min}) => (max + min) / 2.0; 

// console.log(half(stats));
// // Only change code above this line


///////////the following is same as the string formating like a='vikash' and print(f'{a} is a student at NavGurukul.')
// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting);

///////////////////the speciality of BACKTICK is that :
// const demo=`hello!
// i am at home.`
// const demo2='hello! \ni am at home'
// console.log(demo);///////// without '\n' it works 
// console.log(demo2);/////////////// on the other hand here there should be '\n' to go in the next line.

// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["no-extra-semi", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     // Only change code below this line
//     const failureItems = [];
//     arr.forEach(ele => {
//         failureItems.push(`<li class="text-warning">${ele}</li>`);
//     });
//     // Only change code above this line
  
//     return failureItems;
//   }
  
//   const failuresList = makeList(result.failure);

// const createPerson = (name, age, gender) => {
//     // Only change code below this line
//     return {
//       name,
//       age,
//       gender
//     };
//     // Only change code above this line
//   };
// console.log(createPerson("Zodiac Hasbro", 56, "male"));



// Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.setGear);



// const person = {
//     name: "Taylor",
//     sayHello: function() {
//       return `Hello! My name is ${this.name}.`;
//     }
//   };

// console.log(person.sayHello());


// class SpaceShuttle {
//     constructor(targetPlanet) {
//       this.targetPlanet = targetPlanet;
//     }
//   }
// const zeus = new SpaceShuttle('Jupiter');
// console.log(zeus.targetPlanet);


// //////////////////////Using the 'class' keyword:
// class Vegetable {
//     constructor(name){
//       this.name=name;
//     }
//   }
  
//   // Only change code above this line
  
//   const carrot = new Vegetable('carrot');
//   console.log(carrot.name); // Should display 'carrot'



//////////////////////INPUTS;;;;;
// const inputm = require("readline-sync");

// const prop=(require("readline-sync")).question('enter another num: ');
// console.log(prop);
// // const ip=(require('readline-sync').questionNewPassword('enter the trial pasword: '))
// const strial=(require('readline-sync').questionPath('enter some path'))


////////////////////////////
// class Book {
//     constructor(author) {
//       this._author = author;
//     }
//     // getter
//     get writer() {
//       return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//       this._author = updatedAuthor;
//     }
//   }
//   const novel = new Book('anonymous');
//   console.log(novel.writer);
//   novel.writer = 'newAuthor';
//   console.log(novel.writer);


// Only change code below this line
// class Thermostat{
//     constructor(fahrenheit){
//       this.fahrenheit=fahrenheit;
//     }
//     get temperature(){
//       return (5/9)*(this.fahrenheit-32);
//     }
//     set temperature(celsius){
//       this.fahrenheit=(celsius*9.0)/5+32;
//     }
//   }
//   // Only change code above this line
  
  
  
// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius


// class SpaceShuttle{
//     constructor(t){
//         this.name=t
//     }
// }
// var zeus = new SpaceShuttle('satyam');
// console.log(zeus.name);

// class Vegetable{
//     constructor (name){
//       this.name=name
//     }
//   }
//   // Only change code above this line
  
// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'





// class Thermostat{
//     constructor(fahrenheit){
//       this.fahrenheit=fahrenheit;
//     }
//     get temperature(){
//       return (5/9)*(this.fahrenheit-32);
//     }
//     set temperature(celsius){
//       this.fahrenheit=(celsius*9.0)/5+32;
//     }
//   }
//   // Only change code above this line
  
  
//   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
//   console.log(thermos.temperature);
// //   let temp = thermos.temperature; // 24.44 in Celsius
// //   console.log(temp);
// //   thermos.temperature = 296;

// //   temp = thermos.temperature; // 26 in Celsius
// //   console.log(temp);

// const add = (x, y) => {
//     return x + y;
//   }
  
//   export { add };

// const uppercaseString = (string) => {
//     return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }
// //   console.log(uppercaseString);
// //   console.log(lowercaseString);
// export{uppercaseString, lowercaseString}

// const x=require('./demo.js') 
// const a=x.addition(23,45)
// console.log(a);

// import { addition } from "./demo.js";


////////////////////////////////////////////TO IMPORT ALL THE CODE OF THE FILE INTO ANOTHER FILE:
// import * as stringFunctions from './string_functions.js'
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// const a=[]
// const b = []
// console.log(a==b);

///////////////////////////There is another export syntax you need to know, known as export default.
//// Usually you will use this syntax if only one value is being exported from a file. 
///It is also used to create a fallback value for a file or module.

// export default function subtract(x, y) {
//     return x - y;
//   }

/////// THE IMPORT METHOD FOR THE ABOVE CODE:
// import subtract from './math_functions.js'  
// // Only change code above this line

// subtract(7,4);


////////////////////////PROMISE;
// const makeServerRequest= new Promise((resolve, reject) =>{

// });

/////////////part of the above one:
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer represents a response from a server
//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve('We got the data')
//       // Change this line
//     } else {  
//       reject('Data not received')
//       // Change this line
//     }
//   });



///////////////////////////Use of THEN condition used to print resolve body data:

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {      ///////////////***without this condition we cannot print the result of upper one..
//     console.log(result);
//   });


// /////////////////////////////// The CATCH statement is used to print reject body data + ***..

// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     console.log(result);
//   });
//   makeServerRequest.catch(error => {        /////////////Here you go..
//       console.log(error);
//     });


/**********************************
 * Here *
 * we   *
 * end  * *************************
 **********************************/


/////////////DEBUGGING:
// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) => previous + current);
// console.log(`Sum of array values is: ${arraySum}`);


// async function fun() {
//     if (true){
//         return "Async keyword";
//     }else {
//         return 'what is your name?'
//     }
    
//   }
 
// fun().then((d) => {
//   console.log(d);
// });
// fun().catch((data) => {
//     console.log(data);
// })
// fun().then((data) => {
//     console.log(data);
// })

// console.log(Data);


// let fun = async function(){
//     return "Async Function Expression";
//   }
   
//  var x=fun();
//  console.log(x);

// let fun = async()=>{
//     return "Async Arrow Function";
//   }
   
//  let a=fun();
//  console.log(a);

// await function fun() {
//     let promise = Promise.resolve('Hello, World!!!');
//     let result = await promise; 
//     // SyntaxError: await is only valid in async functions.
//   }
   
//   var s=fun();
//   console.log(s);





