const fs=require('fs');

fs.readFile('open.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
     console.log(data);
    }
})

setTimeout(function(){
    console.dir('i am timed')
    },1000)
