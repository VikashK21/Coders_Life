console.log('start')
function a(){
    fetch('https://google.com').then((data)=>{
        console.log(data);
    }).catch(data=>{
        console.log(data);
    })
    console.log('Inside');
}
a()
console.log('end')