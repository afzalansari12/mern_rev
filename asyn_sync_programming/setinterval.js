// setInterval(function(){
//     console.log("hello");
// }, 1000);

// single line statement 

let id = setInterval(function(){
    console.log("hello");
},1000 ,setTimeout(function(){
    clearInterval(id);
},5000));




