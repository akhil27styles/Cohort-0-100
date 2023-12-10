const fs=require('fs');
fs.writeFile('open.txt','utf8',(err)=>{
    if(err){
        console.log(err);
        return;
    }
})