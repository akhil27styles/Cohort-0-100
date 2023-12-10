

const fs=require('fs');

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);   
        return;
    }
    let readData=data.split(' ').filter(Boolean).join(' ');
    fs.writeFile('file.txt',readData,'utf-8',(err)=>{
        if(err){
            console.log(err);
        }
    })
})

