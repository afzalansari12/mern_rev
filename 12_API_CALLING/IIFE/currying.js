
function sum(a) {
    return function (b) {
        return b === undefined ? a : sum(a + b);
    };
}

console.log(sum(10)(20)(30)(40)());      
console.log(sum(10)(20)(30)(40)(50)());  
console.log(sum(10)(20)());              
