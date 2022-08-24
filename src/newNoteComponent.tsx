import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import "./styles.css";

interface NewNoteProps {
  onAddNote(note: string): void;

}
const NewNote: React.FC<NewNoteProps>= ({ onAddNote }) => {
  const [note, setNote] = useState("");
  
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    onAddNote(note);
    setNote("");
  };

  return (
    <div>
        <input className="search-bar" onChange={updateNote} value={note} type="text" name="note" placeholder="Write here..." ></input>
        <button onClick={onAddNoteClick}>ADD NOTE</button>
      </div>
  )
}

export default NewNote;