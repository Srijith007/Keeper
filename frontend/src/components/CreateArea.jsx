import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!note.title || !note.content) return;
    onAdd(note); // Pass the new note to the App component
    setNote({ title: "", content: "" });
    setExpanded(false);
  };
  

  return (
    <div className="create-area">
      <form className="note-form">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
            className="note-input"
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
          onClick={() => setExpanded(true)}
          className="note-textarea"
          rows={isExpanded ? 3 : 1}
        />
        {isExpanded && (
          <button onClick={handleSubmit} className="add-button"><AddIcon /></button>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
