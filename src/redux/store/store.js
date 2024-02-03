import { configureStore } from "@reduxjs/toolkit";
import StateSliceReducers from "../reducers/StateSliceReducers";

export const store = configureStore({
    reducer: {
        GenericData: StateSliceReducers,
    },
});
export default store;
