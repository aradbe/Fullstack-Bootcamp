import Modal from "react-modal";

Modal.setAppElement("#root");

function NoteModal({ note, isOpen, closeModal }) {
  if (!note) return null;

  const formattedDate = new Date(note.createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Note Details"
      style={{
        content: {
          maxWidth: "600px",
          margin: "auto",
          height: "fit-content",
        },
      }}
    >
      {note.title && <h2>{note.title}</h2>}

      <p>{note.text}</p>

      <small>Created: {formattedDate}</small>

      <br />
      <br />

      <button onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default NoteModal;