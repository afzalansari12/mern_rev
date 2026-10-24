let numberlist = document.querySelector(".numberlist");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");

let cnt = 1;

function addnumbers(){
    let li= document.createElement("li");
    li.innerHTML = cnt;
    cnt++;
    numberlist.appendChild(li);

}

btn.onclick = function(){
    addnumbers();
};