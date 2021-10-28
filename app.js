const button = document.querySelector("button")
const board = document.querySelector(".board")

function createNewNote (event) {
  event.preventDefault()
 const note =  document.createElement("textarea")
 note.classList.add("sticky")
 board.appendChild(note)
}

button.addEventListener("click", createNewNote)