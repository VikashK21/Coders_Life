const request=require('axios');
const file=require('fs');
request.get('http://saral.navgurukul.org/api/courses').then(res => {
    var ax=file.writeFileSync('api_axios.json', JSON.stringify(res.data, null, 4)); //filename=axios.json
}).catch(er => {
    console.log('irriror');
});
let read=file.readFileSync('api_axios.json', 'utf-8');
let data=JSON.parse(read)
let n=1;
let key=data["availableCourses"]
for (k of key){
    console.log(n,k['name']);
    n++
};
var input=(require('readline-sync')).questionInt('\n>>> Choose an Option: ');
console.log('\n ',key[input-1]["name"],'\n\n  ',key[input-1]["short_description"], '\n    ');
let id=key[input-1]["id"];

request.get('http://saral.navgurukul.org/api/courses/'+id+'/exercises').then(res2 => {
    file.writeFileSync('api_axios2.json', JSON.stringify(res2.data, null, 4));
}).catch(error => {
    console.log('Intor Error!');
});
let read2=file.readFileSync('api_axios2.json', 'utf-8');
let data2=JSON.parse(read2);
var body=data2["data"];
for (i of body){
    console.log(`   > ${i["name"]} :-
        ${i["github_link"]}
        
        TO READ CLICK ON THE ABOVE LINKS |
        `)
}
