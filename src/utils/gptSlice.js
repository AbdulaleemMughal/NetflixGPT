import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearchVeiw: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const {toggleGptSearchVeiw} = gptSlice.actions;

export default gptSlice.reducer;