import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import fetcher from "./fetcher";


export const fetch = createAsyncThunk(
    'Data/fetchData',
    async() => {
        const characterData = await fetcher.get("characters")
            .then((res) => (res.data))
            // console.log(characterData);
        const quoteData = await fetcher.get("quotes")
            .then((res) => (res.data))
            // console.log(quoteData);
        return {
            characterData,
            quoteData
        };
    }
)


const dataSlice = createSlice({
    name: "data",
    initialState: {
        characters: [],
        quotes: [],
        status: "Pending",
        query: "",
    },
    reducers: {
        setState: (state, action) => {}
    },
    extraReducers: {
        [fetch.pending]: (state) => {
            state.status = 'Pending'
        },
        [fetch.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.characters = action.payload.characterData;
            state.quotes = action.payload.quoteData;
        },
        [fetch.rejected]: (state) => {
            state.status = 'Rejected'
        }
    }

})
export const {
    setState
} = dataSlice.actions;
export default dataSlice.reducer;