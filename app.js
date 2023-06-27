const form = document.querySelector("form")
const ul = document.querySelector("ul")

form.addEventListener("submit" , (e) =>{
    e.preventDefault()
    let name = form.querySelector("#name").value
    let price= form.querySelector("#price").value
    let itemText= `name:${name} price:${price}`
    let li = document.createElement("li")
    
})