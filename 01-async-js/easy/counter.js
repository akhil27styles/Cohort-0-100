//with using setInterval
let sec=1;
setInterval(function(){
  console.log(sec++);
},1000)

//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. 
//There is a hint at the bottom of the file if you get stuck.
function counter(start,end,delay){
    if(end>=start){
    console.log(start);
    setTimeout(() => {
       counter(start+1,end,delay);
    }, delay);
}}

counter(1,10,1000);