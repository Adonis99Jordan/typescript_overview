function getNotes() {
    // Get the notes array from localStorage
    return JSON.parse(localStorage.getItem('notes') || '[]');
}

export default getNotes;