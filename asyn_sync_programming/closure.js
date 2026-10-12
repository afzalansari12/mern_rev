// function createfun(){
//     let a = 10;
//     function fun(){
//         console.log(a);
//     }
//     return fun
// }

// let f = createfun();

// nested closure
function outerfun(){
    let a = 1;
    function innerfun(){
        a++;
        function fun(){
            a++;
            console.log(a);
        }
        return fun;
    }
    return innerfun;
}

let genfun = outerfun();

let f1 = genfun();
let f2 = genfun();

f1();
f1();
f1();
f2();
f2();
f2();
f1();

