// Check for stored people in localStorage
let people = JSON.parse(localStorage.getItem("people")) || []

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const peopleListEl = document.getElementById("people-list")
const giftGIFEl = document.getElementById("gift-gif") // Assuming a GIF element

window.addEventListener("load", function() {
    renderList(people)
})

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    if (inputValue) {
        people.push(inputValue)

        clearInputFieldEl()

        renderList(people)

        // Save the updated people list to localStorage
        localStorage.setItem("people", JSON.stringify(people))
    }
})

function renderList(array) {
    clearPeopleListEl()
    
    for (let i = 0; i < array.length; i++) {
        let currentPerson = array[i]
        
        appendPersonToPeopleListEl(currentPerson)
    }
}

function clearPeopleListEl() {
    peopleListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendPersonToPeopleListEl(person) {
    
    let newEl = document.createElement("li")
    
    newEl.textContent = person
    
    newEl.addEventListener("dblclick", function() {
        
        let index = people.indexOf(person)

        people.splice(index, 1)
            
        renderList(people)
        
        localStorage.setItem("people", JSON.stringify(people))
    })
    
    peopleListEl.append(newEl)
}
