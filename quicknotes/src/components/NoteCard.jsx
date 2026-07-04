function NoteCard({ note, deleteNote }) {
  const formattedDate = new Date(note.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="note-card">
      <p>{note.text}</p>

      <small>{formattedDate}</small>

      <button
        className="delete-btn"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;