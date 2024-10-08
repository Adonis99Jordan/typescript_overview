import getNotes from "./getNotes"
import outputNotes from "./outputNotes";

function deleteNote(index: string) {
    // Get the notes array from the localstorage
    const notesArray = getNotes();
    const confirmDelete = confirm('Are you sure you want to delete this note?');

    if (confirmDelete) {
        // Use the index number to splice the corresponding note object from the array
        notesArray.splice(Number(index), 1);

        // Update/Overwrite the array in localstorage
        localStorage.setItem('notes', JSON.stringify(notesArray));

        //call outputnotes
        outputNotes()
    }
}

export default deleteNote