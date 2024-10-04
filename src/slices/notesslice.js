import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: [{}]
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers:{
        addToNotes: (state,action) => {state.notes.push(action.payload)}
    }
})

export const {addToNotes} = notesSlice.actions
export default notesSlice.reducer;