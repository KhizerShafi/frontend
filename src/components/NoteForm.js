import React, { useState, useEffect } from "react";
import axios from "axios";

function NoteForm({ currentNote, refreshNotes, clearEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [currentNote]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentNote) {
      await axios.put(`http://127.0.0.1:8000/api/notes/${currentNote.id}/`, {
        title,
        content,
      });
    } else {
      await axios.post("https://79f4c344-8657-4884-a593-44edd11602d9-00-3uwymczdy8vtf.pike.replit.dev/api/notes/", { title, content });
    }
    refreshNotes();
    clearEdit();
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentNote ? "Edit Note" : "Add Note"}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <button type="submit">{currentNote ? "Update" : "Add"}</button>
      {currentNote && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
}

export default NoteForm;