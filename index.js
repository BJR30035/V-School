const form = document.addItem

//Creating our Submit Button

form.addEventListener("submit", function(event) {
    event.preventDefault() //prevent page refresh
    let list = document.getElementById("list")

//  allows input to be submitted
    const input = form.title.value

//  Creates New DIV
    const newDiv = document.createElement("div")

//  Creates New LI Element
    const listItem = document.createElement("li")

//  Adds input
    listItem.textContent = input
    list.append(newDiv)
    newDiv.append(listItem)

//  Clears Field
    form.title.value = ""

//  create edit / delete (x) buttons
    const edit = document.createElement("button")
    edit.textContent = "EDIT"

    const remove = document.createElement("button")
    remove.textContent = "X"
//  allows edit/delete buttons to append items
    newDiv.append(edit, remove)
//  
    edit.setAttribute("class", "editButton")
    remove.setAttribute("class", "deleteButton")
    newDiv.className = "button"
//  adds "click" function to edit / X buttons
    edit.addEventListener("click", function () {
        newDiv.append(inputBox)
        inputBox.value = listItem.textContent
        newDiv.append(saveBtn)
    })

    remove.addEventListener("click", function () {
        newDiv.remove()
    })
// created input box / save button to edit items
    const saveBtn = document.createElement("button")
    const inputBox = document.createElement("input")

    saveBtn.textContent = "Save"
// adds functionality to save button - removes input box / save button
    saveBtn.addEventListener("click", function () {
        listItem.textContent = inputBox.value
        inputBox.remove()
        saveBtn.remove()
    })
})
