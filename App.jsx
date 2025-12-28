import React, { useState } from "react";
import NoteForm from "./ComponentFile/NoteFrom";
import NotesList from "./ComponentFile/NoteList";

const App = () => {
  const [notes, setNotes] = useState([])

  const addNote = (submit, detail) => {
    setNotes([...notes, { submit, detail }]);
  };

  const deleteNote = (index) => {
    const copy = [...notes];
    copy.splice(index, 1);
    setNotes(copy);
  };

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <NoteForm addNote={addNote} />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
