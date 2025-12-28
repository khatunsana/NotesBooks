import React from "react";
import { X } from "lucide-react";

 const NoteCard = ({ note, index, deleteNote }) => {
  return (
    <div className="h-60 w-48 rounded-2xl relative bg-gray-200 py-8 px-5 text-black bg-[url(https://tse3.mm.bing.net/th/id/OIP.BSUkxkLmL-2CNdX6PwNCfQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3)] bg-cover">
      <button
        className="absolute top-3 right-3 bg-red-600 active:bg-red-400"
        onClick={() => deleteNote(index)}
      >
        <X />
      </button>

      <h3 className="font-bold">{note.submit}</h3>
      <p className="text-xs mt-2 text-blue-600 font-semibold">
        {note.detail}
      </p>
    </div>
  );
       

 };
export default NoteCard;
