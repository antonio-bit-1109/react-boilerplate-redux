import { createSlice } from "@reduxjs/toolkit";

const SliceMain = createSlice({
    name: "mainSlice",
    initialState: {
        dataFetchSearch: null,
    },

    reducers: {
        setDataFetch: (state, action) => {
            state.dataFetchSearch = action.payload;
        },
    },
});

export const { setDataFetch } = SliceMain.actions;
export default SliceMain.reducer;
