function wait(n){
 return new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve(`Promise resolved after ${n} seconds`);
    },n)
 })
}
wait(4000).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
})
