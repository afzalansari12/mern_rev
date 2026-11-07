let arr = [1,2,3,4,5]

let newarr = arr.map(function(val,index,arr){
    return val*val;
})

console.log(newarr);
console.log(arr);