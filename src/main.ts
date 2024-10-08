import addNote from './lib/addNote';
import outputNotes from './lib/outputNotes';
import deleteNote from './lib/deleteNote';

const noteForm = document.querySelector<HTMLFormElement>('#note-form');
const noteOutput = document.querySelector<HTMLElement>('#note-output');


outputNotes()
noteForm?.addEventListener('submit', addNote);
noteOutput?.addEventListener('click', (event: Event) => {
  const el = event?.target as HTMLElement;

  if (el.tagName === 'BUTTON') {
    const index = el.dataset.index || '';

    deleteNote(index);
  }
});


