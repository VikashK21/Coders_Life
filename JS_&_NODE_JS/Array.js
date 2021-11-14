////////////////###### remove 'Basketball' ######////////////////
////////////////////////////////////////////////////////////////
// let myFavouriteGames = ["chess", "Ludo", "Badminton", "Basketball", "Carom", "Cricket"];
// let ro=myFavouriteGames.splice(2, 1);   //We can even add items and remove too from the array, (2 index) (3 items from 2 index).
// // we can even write like splice(2, 3, 'vikash', 'mahendra'); the string items will be added to the array.
// console.log(myFavouriteGames);


////////////////////////////////////////////////////////////////
////////////////###### finding the length ######////////////////
////////////////////////////////////////////////////////////////
// var num=[1,2,43,4,5,6,7,8,9];
// let s=0;
// num.forEach(ele => {
//     s+=1;
// })
// console.log(s);


////////////////////////////////////////////////////////////////
////////////////###### max function ######////////////////
////////////////////////////////////////////////////////////////
// var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
// let max=numbers[0];
// numbers.forEach(items =>{
//     if (max<items){
//         max=items;
//     }
// });
// console.log(max);

////////////////////////////////////////////////////////////////
////////////////###### second max ######////////////////
////////////////////////////////////////////////////////////////
n1=(require('readline-sync')).questionInt('Enter No. of Inputs: ')
a=[]
n=0
while (n<n1){
    m=(require('readline-sync')).questionInt("Enter the No. ");
    if (!a.includes(m)){
        a.push(m);
    }
    n++
}
for (let k=0; a.length>k; k++){
    let sto=0;
    for (let i=0; (a.length-k)>i; i++){
        if (a[sto]<a[i]){
            sto=i;
            var a1=true;
        }
    }
    if (a1){
        x=a.splice(sto, 1);
        a.push(x);
    }
}
console.log(a);



