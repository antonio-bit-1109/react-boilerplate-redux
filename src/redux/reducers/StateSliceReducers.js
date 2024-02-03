import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        dataFetch: null,
    },

    reducers: {
        setDataFetch: (state, action) => {
            state.dataFetch = action.payload;
        },
    },
});

export const { setDataFetch } = SliceMain.actions;
export default SliceMain.reducer;
