// var C = 5/9 * (F - 32);
// var F = C * 9.0 / 5 + 32;
// console.log(C);

// function addition(a, b){
//     return a+b;
// }
// // exports.addition=addition;

// export{addition}


// import {uppercaseString, lowercaseString} from './JS_Intro.js'; 
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");

// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
//    string=string+name[i]
// }
// if (store===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }


// var a=[1,2,3]
// a.forEach(v => {
//    return v
// })
// const sum=(b => {
//    var tot=0
//    b.map((v,i,arr)=>{
//       tot+=v
//       return tot;
//    })
// })
// console.log(sum(a));

// var a=[1,2,3,4,5,6]
// const sum=(b=>{
//    tot=0;
//    a.filter((v,i,arr)=>{
//       console.log(v);
//    })
// })
// console.log(sum());


// var a=[1,2,3,4,5,6]
// a.forEach((v,i,arr)=>{
//    console.log(v,i,arr)
// })

// var a=[1,2,3,4,5,6]
// a.reduce((v,i)=>{
//    console.log(v, i)
// })

// var a=[1,2,3,4,5,6]
// x=a.splice(5,1)
// a.splice(1, 0, x);
// console.log(a);


/////////////////////////////Async and Sync:
// var x=0;
// do{
//     x++;
// function yayOrNay() {
//     return new Promise((resolve, reject) => {
//       const val = Math.round(Math.random() * 1); // 0 or 1, at random
  
//       val ? resolve('Lucky!!') : reject('Nope 😠');
//     });
//   }
  
//   async function msg() {
//     try {
//       const msg = await yayOrNay();
//       console.log(msg);
//     } catch(err) {
//       console.log(err);
//     }
//   }
// console.log(msg());
// }while (x<=10);


// let a=0;
// do{
//     a++;
//     console.log(a);
// }while(a<=9);


//////////////////////FILE SYSTEM:
// const fs=require('fs');
// // fs.writeFileSync('pawan_vik.txt', 'He is Mentor.')
// var a=fs.readFileSync('pawan_vik.txt');
// console.log(a);

// fs.renameSync('pawan_vik.txt', 'preaching.txt')
// fs.appendFileSync('preaching.txt', '\nHe is also a good buddy.');
// fs.unlinkSync('preaching.txt')
// fs.close();



////////////////////////////////////////////////////////////////
////////////////###### AXIOS ######////////////////
//////////////////////////////////////////////////////////////

// var axios=require('axios');
// var fs= require('fs')
// axios.get('http://saral.navgurukul.org/api/courses').then((res) => {
//     fs.writeFileSync('vikas.json',JSON.stringify(res.data,null,4))
//     var read=fs.readFileSync('vikas.json','utf-8')
//     let a=JSON.parse(read);
//     console.log(typeof(a));
// }).catch(err => {
//     console.log(err);

// })
