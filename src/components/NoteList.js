import React, { useEffect, useState } from "react";
import axios from "axios";

function NoteList({ onEdit }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await axios.get("https://79f4c344-8657-4884-a593-44edd11602d9-00-3uwymczdy8vtf.pike.replit.dev/api/notes/");
    setNotes(res.data);
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`);
    fetchNotes();
  };

  return (
    <div>
      <h2>Notes</h2>
      {notes.length === 0 && <p>No notes available.</p>}
      {notes.map((note) => (
        <div key={note.id} style={{ border: "1px solid #ccc", padding: 10, margin: 5 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => onEdit(note)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;