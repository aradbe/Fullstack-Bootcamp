import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    const newNote = {
      id: Date.now(),
      text,
      createdAt: new Date(),
    };

    setNotes([newNote, ...notes]);
  }

  function deleteNote(id) {
    const confirmed = confirm(
      "Are you sure you want to delete your note?"
    );

    if (!confirmed) return;

    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="app">
      <h1>QuickNotes</h1>

      <NoteForm addNote={addNote} />

      <NotesGrid
        notes={notes}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;