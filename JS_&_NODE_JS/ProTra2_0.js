//////////////////////////////////////////////////////as on 31th Oct
// var a={student: [{firstname:'vikash', lastname:'kumar'}, {firstname:'rajesh', lastname:'anuragi'}, {firstname:'akshit', lastname:'bhatt'}, {firstname:'prathamesh', lastname:'mathapati'}, {firstname:'amol', lastname:'deshmuk'}]}
// for (let i=0; ((a.student).length)>i; i++){
//     console.log(a.student[i].firstname);
//     console.log(a.student[i].lastname);
//     console.log();
// }
// console.log(a.student);


var a=[1,6,2,3,2,1,5,6,3];
var n=0
for (var n=0;a.length>n;n++){
    for (let x=0; ((a.length)-n-1)>x; x++){
        if (n>x){
            var k=a[x]
            a[x]=a[x+1]
            a[x+1]=k
        }
    }
}
console.log(a);