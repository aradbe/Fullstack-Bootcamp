import Contact from "./Contact";

function List({ contacts, displayConvo }) {
  return (
    <div>
      {contacts.map((contact) => (
        <Contact key={contact} name={contact} displayConvo={displayConvo} />
      ))}
    </div>
  );
}

export default List;
