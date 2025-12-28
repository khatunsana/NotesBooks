import React, { useState } from "react";

const NoteForm = ({ addNote }) => {
  const [submit, setSubmit] = useState("");
  const [detail, setDetail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addNote(submit, detail);
    setSubmit("");
    setDetail("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex items-start gap-3 flex-col p-10 lg:w-1/2"
    >
      <h1 className="text-xl font-bold">Add Notes</h1>

      <input
        type="text"
        placeholder="Enter Notes Heading"
        className="px-2 py-2 border-2 rounded w-full outline-none text-white"
        value={submit}
        onChange={(e) => setSubmit(e.target.value)}
      />

      <textarea
        placeholder="Enter Notes Details"
        className="px-5 py-2 border-2  rounded h-30 w-full outline-none text-white"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />

      <button className="bg-blue-400 px-10 py-3 text-lg rounded w-full font-medium active:bg-blue-900">
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
