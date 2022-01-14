import React from "react";

import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h2>롤링페이퍼</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>현재 롤링 페이퍼가 없어요~ 왼쪽을 눌러서 글을 작성해주세요!</h3>
        )}
      </div>
    </div>
  );
}

export default NoteContainer;
