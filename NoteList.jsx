import React from "react";
import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className="lg:w-1/2 bg-gray-800 p-10 lg:border-l-2">
      <h1 className="text-4xl font-bold">Recent Notes</h1>

      <div className="flex gap-5 flex-wrap mt-6">
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            index={index}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );

        //  <div className=" lg:w-1/2 bg-gray-800 p-10 lg:border-l-2 ">
        // <h1 className="text-4xl font-bold">Recent notes</h1>
        // <div className="flex gap-5 flex-wrap mt-6 items-start justify-start h-full">
        //   {notes.map((note, index) => {
        //     return (
        //       <div
        //         key={index}
        //         className="h-60 w-48 rounded-2xl relative bg-gray-200 py-8 px-5 text-black bg-[url(https://tse3.mm.bing.net/th/id/OIP.BSUkxkLmL-2CNdX6PwNCfQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3)] bg-cover  font-blur-3xl"
        //       >
                {/* <button
                  className="absolute top-3 right-3 bg-red-600 active:bg-red-400 color-white"
                  onClick={() => {
                    deleteNote(index);
                  }}
                >
                  <X />
                </button>

                <h3 className="leading-tight font-bold">{note.submit}</h3>
                <p className="leading-tight mt-2  text-xs font-semibold flex-wrap text-blue-600">
                  {note.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}
    
  };
 


export default NotesList;
