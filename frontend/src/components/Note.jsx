import React from "react";
import { FaTrash } from "react-icons/fa";

function Note({ id, title, content, onDelete }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)} className="delete-button">
        <FaTrash />
      </button>
    </div>
  );
}

export default Note;
