let arr = [1,2,3,4,5];
let newarr = arr.filter(function(val,index,arr){
 if(val%2==0){
    return true;
 }
 return false;
})

console.log(newarr);
console.log(arr);