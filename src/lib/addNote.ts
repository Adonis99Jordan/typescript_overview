import dayjs from 'dayjs';

import outputNotes from './outputNotes';
import getNotes from './getNotes';

function addNote(event: Event) {
    event.preventDefault();
  
   // Select the note text input element
  const textInput = document.querySelector<HTMLInputElement>('#text-input');
  
    // Get the value from the input
    const noteText = textInput?.value;
  
    // Get the notes array from localStorage
    const notesArray = getNotes();

    if (!noteText) {
        alert('You must enter the note text')
        return;
    }
  
    // Create a new note object with the properties 'text' and 'date - text is the input's value and date is a generated date like '10/8/2024'
    const newNote ={
      text: noteText,
      date: dayjs().format('MM/DD/YYYY hh:mm aa')
    }
  
    // Push the object to the notes array
    notesArray.push(newNote);
  
    // Overwrite the notes array in localStorage with our array from above
    localStorage.setItem('notes', JSON.stringify(notesArray));
  
    // Clear the input
    if (textInput) {
      textInput.value = '';
    }
    
    // Output all notes
    outputNotes();
  }

  export default addNote;