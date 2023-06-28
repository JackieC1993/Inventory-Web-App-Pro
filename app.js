const form = document.querySelector("form")
const ul = document.querySelector("ul")

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    let name = form.querySelector("#name").value
    let price= form.querySelector("#price").value
    let itemText= `<h3> name: </h3> <p> ${name} </p> 
    <h3> price: </h3> <p> ${price} </p>`
    let buttonText = '<button id ="new">remove</button>'
    let li = document.createElement("li")
    let button = document.createElement("button")
    button.innerHTML= buttonText
    li.innerHTML = itemText
    ul.append(li)
    li.append(button)
})

