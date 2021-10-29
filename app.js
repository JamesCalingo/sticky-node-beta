const addBtn = document.querySelector("#add-note");
const saveBtn = document.querySelector("#save-note");

const board = document.querySelector(".board");
let idNumber = 1;

const storedNotes = JSON.parse(localStorage.getItem("notes"));

function createNewNote(event) {
  event.preventDefault();

  const note = document.createElement("textarea");
  const button = document.createElement("button");
  note.classList.add("sticky", "note" + idNumber);
  note.placeholder = "Write your note here";
  button.classList.add("delete-btn", "note" + idNumber);
  button.addEventListener("click", deleteNote);
  button.innerHTML = "Delete this note";
  board.appendChild(note);
  board.appendChild(button);
  idNumber++;
}

function saveNotes(event) {
  event.preventDefault();
  let notes = document.querySelectorAll("textarea");
  let noteVals = [];
  notes.forEach((note) => {
    noteVals.push(note.value);
  });
  console.log(noteVals);
  localStorage.setItem("notes", JSON.stringify(noteVals));
  alert(
    "Your notes have been saved to localStorage. In the future, you'll be able to use this browser to regain your notes."
  );
}

function deleteNote(event) {
  event.preventDefault();
  const idToDelete = this.classList[1];
  const noteToDelete = document.getElementsByClassName(idToDelete);
  while (noteToDelete.length > 0) {
    noteToDelete[0].parentNode.removeChild(noteToDelete[0]);
  }
}

addBtn.addEventListener("click", createNewNote);
saveBtn.addEventListener("click", saveNotes);

// This is for the note that appears when the app is loaded
const deleteBtn = document.querySelector(".delete-btn-0");
deleteBtn.addEventListener("click", deleteNote);
