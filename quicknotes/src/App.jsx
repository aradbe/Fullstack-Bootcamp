import { useState } from "react";
import "./App.css";
import NoteForm from "./components/NoteForm";
import NotesGrid from "./components/NotesGrid";
import NoteModal from "./components/NoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addNote(title, text) {
    const newNote = {
      id: Date.now(),
      title,
      text,
      createdAt: new Date(),
    };

    setNotes([newNote, ...notes]);
  }

  function deleteNote(id) {
    const confirmed = confirm("Are you sure you want to delete your note?");

    if (!confirmed) return;

    setNotes(notes.filter((note) => note.id !== id));
  }

  function updateNote(id, title, text) {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title,
          text,
          updatedAt: new Date(),
        };
      }

      return note;
    });

    setNotes(updatedNotes);
    closeModal();
  }

  function openModal(note) {
    setSelectedNote(note);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedNote(null);
  }

  return (
    <div className="app">
      <h1>QuickNotes</h1>

      <NoteForm addNote={addNote} />

      <NotesGrid notes={notes} deleteNote={deleteNote} openModal={openModal} />

      <NoteModal
        note={selectedNote}
        isOpen={isModalOpen}
        closeModal={closeModal}
        updateNote={updateNote}
      />
    </div>
  );
}

export default App;
