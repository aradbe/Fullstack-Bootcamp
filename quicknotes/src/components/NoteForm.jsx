import { useState, useRef } from "react";

function NoteForm({ addNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addNote(title, text);

    setTitle("");
    setText("");
    textareaRef.current.style.height = "auto";
  }

  function resizeTextarea() {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  }

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Note title (optional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        ref={textareaRef}
        placeholder="Write a note..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          resizeTextarea();
        }}
      />

      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
