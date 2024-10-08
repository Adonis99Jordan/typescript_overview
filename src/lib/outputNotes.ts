import getNotes from "./getNotes";

function outputNotes() {
    // Get the notes array from localStorage
    const notesArray = getNotes();
    const noteOutput = document.querySelector<HTMLElement>('#note-output');

    if (!notesArray.length && noteOutput) {
        noteOutput.innerHTML = '<P>No notes have been added...</p>'
    } else if (notesArray.length && noteOutput) {
        noteOutput.innerHTML = '';
    }

    // Loop over the array of note objects and output an article element into the section output for each object in the array

    for (let index = 0; index < notesArray.length; index++) {
        const noteObj = notesArray[index];

        noteOutput?.insertAdjacentHTML('beforeend', `
         <article class="mb-4">
          <h3>${noteObj.text}</h3>
          <p>${noteObj.date}</p>
          <button data-index="${index}" class="btn btn-danger">Delete</button>
          <hr>
        </article>    
            `);
    }

}

export default outputNotes;