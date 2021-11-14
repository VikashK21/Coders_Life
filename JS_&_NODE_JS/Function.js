////////////////###### with one argue ######////////////////
////////////////////////////////////////////////////////////////
// function sayBye(username){
//     return 'Bye '+username;
// }
// console.log(sayBye((require('readline-sync')).question('Type your name: ')));


////////////////////////////////////////////////////////////////
////////////////###### multiplication ######////////////////
////////////////////////////////////////////////////////////////
// var format=require('readline-sync');
// function displayMultiply(num1, num2, num3){
//     return num1*num2*num3;
// }
// console.log(displayMultiply(format.questionInt('Enter first No.: '), format.questionInt('Enter second No.: '), format.questionInt('Enter the third No.: ')));


////////////////////////////////////////////////////////////////
////////////////###### Anonymous function*** ######////////////////
////////////////////////////////////////////////////////////////
// var twoanony=function(firs1, second2){
//     console.log(firs1===second2);
// }
// twoanony((require('readline-sync')).question('Enter anything: '), (require('readline-sync').question('Enter anythig again: ')));


////////////////////////////////////////////////////////////////
////////////////###### Self invoking function*** ######////////////////
////////////////////////////////////////////////////////////////
// (function(firstname, lastname){
//     console.log(firstname, lastname);
// })('vikash', 'kumar');


////////////////////////////////////////////////////////////////
////////////////###### next line ######////////////////
////////////////////////////////////////////////////////////////
// function function_print_lines(strings, inputs){
//     console.log(`${strings} \n${inputs}`);
// }
// function_print_lines((require('readline-sync')).question('Enter anything: '), (require('readline-sync')).question('Enter anything: '))


////////////////////////////////////////////////////////////////
////////////////###### creating func for the marks chec ######////////////////
////////////////////////////////////////////////////////////////
// var stls=[]
// function students(){
//     let n=(require('readline-sync').question('No of students: '));
//     for (let k=0; n>k; k++){
//         let n2=(require('readline-sync')).questionInt('Marks of the students: ');
//         stls.push(n2);
//     }
//     isGreaterThen20()
// }
// function isGreaterThen20(){
//     stls.forEach(ele => {
//         if (ele>20){
//             console.log(ele);
//         }
//     })
// }

// students()


////////////////////////////////////////////////////////////////
////////////////###### adding the nums ######////////////////
////////////////////////////////////////////////////////////////
// function add_numbers(num1, num2){
//     return num1+num2;
// };
// console.log(add_numbers((require('readline-sync')).questionInt('Enter any No.: '), (require('readline-sync')).questionInt('Enter any other No.: ')))


////////////////////////////////////////////////////////////////
////////////////###### adding list of nums ######////////////////
////////////////////////////////////////////////////////////////
// function add_numbers_list(ls1, ls2){
//     ls1.forEach((ele, ind) => {
//         console.log(ele+(ls2[ind]));
        
//     });
// }
// add_numbers_list([10, 20, 13], [50, 60, 10])


////////////////////////////////////////////////////////////////
////////////////###### Perfect No. ######////////////////
////////////////////////////////////////////////////////////////
// function perfect(num){
//     sto=0
//     for (let a=1; num>a; a++){
//         if (num%a===0){
//             sto+=a;
//         }
//     }
//     if (sto===num){
//         return 'It is a Perfect No.'
//     }else{
//         return 'It is not a Perfect No.'
//     }
// }
// console.log(perfect((require('readline-sync')).questionInt('Enter any No.: ')));


////////////////////////////////////////////////////////////////
////////////////###### lcm in the range ######////////////////
////////////////////////////////////////////////////////////////
// function multiplesOfNumbers(ran){
//     n=(require('readline-sync')).questionInt('How many No.s want to check: ')
//     numls=[]
//     for (let a=0; n>a; a++){
//         n2=(require('readline-sync')).questionInt('Enter the No.: ');
//         numls.push(n2);
//     }
//     lcmsum=0
//     for (let mul=1; ran>mul; mul++){
//         numls.forEach(item => {
//             if (ran>=item*mul){
//                 lcmsum+=item*mul;          
//                 // console.log(item*mul);
//             }
            
//         });
//     }
//     return lcmsum;
// }
// console.log(multiplesOfNumbers((require('readline-sync')).questionInt('Checking limit: ')));


////////////////////////////////////////////////////////////////
////////////////######  ######////////////////
////////////////////////////////////////////////////////////////
