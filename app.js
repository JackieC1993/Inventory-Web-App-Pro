const form = document.querySelector("form")
const ul = document.querySelector("ul")
ul.classList.add("pokeball", "list")
let removeButton;

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    const inputName = form.querySelector("#name").value;
    const inputPrice= form.querySelector("#price").value;
    let item= `<h3>name:</h3><p>${inputName}</p> 
    <h3>price:</h3><p>  ${inputPrice} </p>`
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
    //define remove functionality
})





//form.reset()
