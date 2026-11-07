let numberlist = document.querySelector(".numberlist");
let btn = document.querySelector('.btn');
let inp = document.querySelector('.inp');

function addnumbers(n){
    //console.log(numberlist.innerHTML);
    //numberlist.innerHTMl = `<li class="numbers">1</li>`
    //numberlist.innerHTMl += `<li class="numbers">1</li>`

    numberlist.innerHTML="";
    for(let i = 1 ; i <= n; i++){
        numberlist.innerHTML+=`<li class="number">${i}</li>`
    }
}

btn.onclick = function(){
    addnumbers(inp.value);
}