import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      state.notes.push(action.payload);
    },
    addSubNote: (state, action) => {
      const { id, subNote } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.subNotes.push(subNote);
      }
    },
  },
});

export const { addToNotes, addSubNote } = notesSlice.actions;
export default notesSlice.reducer;
