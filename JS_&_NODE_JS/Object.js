////////////////###### adding the values ######////////////////
////////////////////////////////////////////////////////////////
// var d1 = {'a': 100, 'b': 200, 'c':300};
// var d2 = {'a': 300, 'b': 200, 'd':400};
// for (n in d2){
//     if (d1.hasOwnProperty(n)){
//         d2[n]=d2[n]+d1[n]
//     }else{
//         d2.c=d1.c
//     }
// }
// console.log(d2);


////////////////////////////////////////////////////////////////
////////////////###### square the value ######////////////////
////////////////////////////////////////////////////////////////
// var i=(require('readline-sync')).questionInt('Enter any No.: ');
// var obj={};
// for (let a=1; i>=a; a++){
//     obj[a]=a*a;
// }
// console.log(obj);


////////////////////////////////////////////////////////////////
////////////////###### count substr from mstr ######////////////////
////////////////////////////////////////////////////////////////
// var mainString="My name is kumar, and my friend’s name is Dhamu";
// var subString={}
// for (a of mainString.split(' ')){
//     // console.log(a);
//     if (subString.hasOwnProperty(a)){
//         let s=subString[a]
//         subString[a]=s+1
//     }else{
//         subString[a]=1
//     }
// }
// console.log(subString);

////////////////////////////////////////////////////////////////
////////###### conbining into one with updation ######//////////
////////////////////////////////////////////////////////////////
// var dic1={1:10, 2:20};
// var dic2={3:30,2:40};
// var dic3={5:50,6:60};
// for (item in dic1) {
//     if (dic2.hasOwnProperty(item)){
//         dic1[item]=dic1[item]+dic2[item];
//     }else if (dic3.hasOwnProperty(item)){
//         dic1.item=dic1.item+dic3.item;
//     }
// }
// console.log({...dic2, ...dic1, ...dic3});


////////////////////////////////////////////////////////////////
////////////////###### To check Property exist or not ######////////////////
////////////////////////////////////////////////////////////////
// var checking=(require('readline-sync')).question('Type any character: ');
// var dict={name:'Raju', marks:56}
// if (dict.hasOwnProperty(checking) || dict.includes(checking)){
//     console.log('Exist.');
// }else{
//     console.log('Not exist.');
// }


////////////////////////////////////////////////////////////////
////////////////###### Calculating all the values ######////////////////
////////////////////////////////////////////////////////////////
// my_dict = {

//     'data1':100,
    
//     'data2': -54,
    
//     'data3': 247
    
//     }
// s=0;
// for (tot in my_dict){
//     s+=my_dict[tot];
// }
// console.log(s);


////////////////////////////////////////////////////////////////
////////////////###### Romoving the nested first ke&va ######////////////////
////////////////////////////////////////////////////////////////
// myDict= { 1: 'NAVGURUKUL', 2: 'IN',
// 3:{'A' : 'WELCOME', 'B' : 'To', 'C' : 'DHARAMSALA' } };
// for (item in myDict){
//     if ((typeof myDict[item])==='object'){
//         delete myDict[3].A
//     }
// }
// console.log(myDict);

////////////////////////////////////////////////////////////////
////////////////###### taking v and k from list ######////////////////
////////////////////////////////////////////////////////////////
// var list1=['one', 'two', 'three', 'four','five'];
// var list2=[1,2,3,4,5,];
// var dicofObj={};
// for (let a=0; list1.length>=a; a++){
//     dicofObj[list1[a]]=list2[a];
// }
// console.log(dicofObj);


////////////////////////////////////////////////////////////////
////////////////###### puting the values in a list ######////////////////
////////////////////////////////////////////////////////////////
// const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// var list2=[];
// for (items in list[0]){
//     if (!list2.includes(list[0][items])){
//         list2.push(list[0][items])
//     }
// }
// console.log(list2);


////////////////////////////////////////////////////////////////
////////////////###### students detail ######////////////////
////////////////////////////////////////////////////////////////
// var detail={};
// const times=(require('readline-sync')).questionInt('No of Students: ')
// for (let a=0; times>a; a++){
//     let n=(require('readline-sync')).question('Student name: ');
//     let n2=(require('readline-sync')).questionInt('Marks: ')
//     detail[n]=n2;
// }
// console.log(detail);



////////////////////////////////////////////////////////////////
////////////////###### v according to the k ######////////////////
////////////////////////////////////////////////////////////////
// var sto='MISSISSIPPI';
// var obj={};
// for (a of sto){
//     if (obj.hasOwnProperty(a)){
//         let s=obj[a];
//         obj[a]=s+1;
//     }else{
//         obj[a]=1;
//     }
// }
// console.log(obj);


////////////////////////////////////////////////////////////////
////////////////###### count the values ######////////////////
////////////////////////////////////////////////////////////////
// var dict = {

//     'Alex': ['subj1', 'subj2', 'subj3'],
    
//     'David': ['subj1', 'subj2']
    
//     };
// var storing=0;
// for (ar in dict){
//     for (ele of dict[ar]){
//         console.log(ele);
//         storing+=1;
//     }
// }
// console.log(storing);


////////////////////////////////////////////////////////////////
////////////////###### third max ######////////////////
////////////////////////////////////////////////////////////////
var my_dict = { 'a':50, 'b':58, 'c':56, 'd':400, 'e':10, 'f':20 }
var list=[];
for (val in my_dict){
    // console.log(val);
    list.push(my_dict[val])
}
// for (let a=0; list.length>a; a++){
//     for (let a2=a+1; list.length>a2; a2++){

//     }
// }
console.log(list);
list.sort();
console.log(list);
console.log(list.slice(0, 3));