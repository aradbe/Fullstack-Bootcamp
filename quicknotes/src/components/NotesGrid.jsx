import NoteCard from "./NoteCard";

function NotesGrid({ notes, deleteNote }) {
  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}

export default NotesGrid;