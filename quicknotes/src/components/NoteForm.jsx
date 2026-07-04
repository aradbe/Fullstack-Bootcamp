import { useState } from "react";

function NoteForm({ addNote }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addNote(text);

    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;