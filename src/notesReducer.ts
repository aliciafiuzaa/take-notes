import { Action } from "./actions";

// functions that calculate a new value for the state
export interface NotesState {
  notes: string[],
};

const initialState = {
  notes: [],
};


export const notesReducer = (state: NotesState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_NOTE": {
      return { ...state, notes: [...state.notes, action.payload]};
    }
    default:
      return state;
  }
}