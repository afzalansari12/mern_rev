setTimeout(function(){
    console.log("5 second are up");
},5000)

console.log("hello");

setTimeout(function(){
    console.log("4 second are up");
},4000);

function delaysec(){
    let t1 = new Date().getTime();
    while(new Date().getTime() - t1 < 1000){
        
    }
}

function delaysec(n){
    for(let i = 0;  i< n ; i++){
        delaysec();
    }
    console.log(n,"seconds are up now");
}
delaysec(3);