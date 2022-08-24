import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import NewNote from './newNoteComponent';
import {NotesState} from "./notesReducer";
import {addNoteAction} from "./actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes);

  const dispatch = useDispatch();

  const addNote = (note: string) => {
    dispatch(addNoteAction(note));
  }
  return (
    <>
      <div className="container">
        <div className="new-note-container">
          <NewNote onAddNote={addNote} />
        </div>
        <hr/>
        <div className="list-container">
          <ul className="list">
            {notes.map((note) => {
              return (
                <div>
                  <li>{note}</li>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
