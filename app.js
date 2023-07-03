const form = document.querySelector("form")
const ul = document.querySelector("ul")
ul.classList.add("pokeball", "list")
let removeButton;

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const inputName = form.querySelector("#name").value;
    const inputPrice= form.querySelector("#price").value;
    const inputImage = form.querySelector("input#img").value;
    //const inputImg= form.createElement("img");
   
    let item= `<h3>name:</h3><p>${inputName}</p> 
    <h3>price:</h3><p>  ${inputPrice} </p>
    <img src=${inputImage.src}/> </p>`
    let li = document.createElement("li");
    li.innerHTML = item;
    li.classList.add("pokeball");
    removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.textContent= "remove";
    removeButton.addEventListener("click" , (e) =>{
        e.stopPropagation();
        
        li.remove();
        return;
    })
    li.appendChild(removeButton);
    ul.appendChild(li);
    inputImg.appendChild(li)
    //define remove functionality
})
