//higher order function ek concept hai where i can pass function as arguments and even return function from another function jo language yeh krti hai that is said to support higher oreder funtion // 

function createfun(){
    function hello(){
        console.log("hello");
    }
    return hello;
}

let x = createfun();
console.log(x);

x();