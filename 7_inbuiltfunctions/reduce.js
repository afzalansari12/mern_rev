let arr = [1,2,3,4,5];

let sum = arr.reduce(function(acc,val,index,a){
    return acc+val;
})

console.log(sum)


let brr = [1,2,3,4,5];

let sum1 = brr.reduce(function(acc,val,index,a){
    return acc*val;
},1)

console.log(sum1)