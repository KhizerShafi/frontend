// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import axios from "axios";

function App() {
  const [currentNote, setCurrentNote] = useState(null);

  const refreshNotes = async () => {
    await axios.get("http://127.0.0.1:8000/api/notes/");
  };

  return (
    <div style={{ margin: "2rem" }}>
      <h1>📝 Notes App (Django + React)</h1>
      <NoteForm
        currentNote={currentNote}
        refreshNotes={refreshNotes}
        clearEdit={() => setCurrentNote(null)}
      />
      <NoteList onEdit={(note) => setCurrentNote(note)} />
    </div>
  );
}

export default App;
