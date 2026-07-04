function NoteCard({ note, deleteNote, openModal }) {
  const formattedDate = new Date(note.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div
      className="note-card"
      onClick={() => openModal(note)}
    >
      {note.title && <h3>{note.title}</h3>}

      <p>{note.text}</p>

      <small>{formattedDate}</small>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          deleteNote(note.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteCard;