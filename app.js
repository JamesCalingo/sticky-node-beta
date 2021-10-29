const addBtn = document.querySelector("#add-note")
const saveBtn = document.querySelector("#save-note")
const board = document.querySelector(".board")
let idNumber = 1

const storedNotes = JSON.parse(localStorage.getItem("notes"))

function createNewNote (event) {
  event.preventDefault()
  
  const note =  document.createElement("textarea")
  note.classList.add("sticky")
  note.id = "note" + idNumber
  note.placeholder = "Write your note here"
  board.appendChild(note)
  idNumber++
}

function saveNotes (event) {
  event.preventDefault()
  let notes = document.querySelectorAll("textarea")
  let noteVals = []
  notes.forEach(note => {
    noteVals.push(note.value)
  })
  console.log(noteVals)
  localStorage.setItem("notes", JSON.stringify(noteVals))
  alert("Your notes have been saved to localStorage. In the future, you'll be able to use this browser to regain your notes.")
}

addBtn.addEventListener("click", createNewNote)
saveBtn.addEventListener("click", saveNotes)