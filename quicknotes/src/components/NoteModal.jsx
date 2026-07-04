import Modal from "react-modal";
import NoteForm from "./NoteForm";

Modal.setAppElement("#root");

function NoteModal({ note, isOpen, closeModal, updateNote }) {
  if (!note) return null;

  const createdDate = new Date(note.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const updatedDate = note.updatedAt
    ? new Date(note.updatedAt).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Edit Note"
      style={{
        content: {
          maxWidth: "600px",
          margin: "auto",
          height: "fit-content",
        },
      }}
    >
      <h2>Edit Note</h2>

      <NoteForm
        addNote={(title, text) => updateNote(note.id, title, text)}
        initialTitle={note.title}
        initialText={note.text}
        buttonText="Save Changes"
      />

      <hr />

      <p>
        <strong>Created:</strong> {createdDate}
      </p>

      {updatedDate && (
        <p>
          <strong>Updated:</strong> {updatedDate}
        </p>
      )}

      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default NoteModal;
