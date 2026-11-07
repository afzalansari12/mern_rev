let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let imagelist = document.querySelector(".imagelist");

btn.addEventListener("click", () => {
    let count = Number(inp.value) || 1;
    count = count >= 1 && count <= 10 ? count : 1;
    let url = `https://dog.ceo/api/breeds/image/random/${count}`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            imagelist.innerHTML = "";

            res.message.forEach(url => {
                let img = document.createElement("img");
                img.src = url;
                img.width = 200;
                img.style.margin = "10px";
                imagelist.appendChild(img);
            });
        })
        .catch(err => console.log(err));
});