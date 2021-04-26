let ourForm = document.getElementById('ourForm')
let toDo = document.getElementById('toDo')
let list = document.getElementById('list')

ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(toDo.value)
})

function createItem(x){
    //this refers to the object where it's located. In this case, it's this particular button
    let HTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`
    list.insertAdjacentHTML("beforeend", HTML)
    toDo.value = ""
    toDo.focus()
}

function deleteItem(itemToDelete){
    itemToDelete.parentElement.remove()
}