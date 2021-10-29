const button = document.querySelector("button")
const board = document.querySelector(".board")
let idNumber = 1

function createNewNote (event) {
  event.preventDefault()
  let notes = document.querySelectorAll("textarea")
  console.log(notes)
 const note =  document.createElement("textarea")
 note.classList.add("sticky")
 note.id = "note" + idNumber
 note.placeholder = "Write your note here"
 board.appendChild(note)
 idNumber++
}

button.addEventListener("click", createNewNote)