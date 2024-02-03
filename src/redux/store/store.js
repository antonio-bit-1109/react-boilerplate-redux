import { configureStore } from "@reduxjs/toolkit";
import StateSliceReducers from "../reducers/StateSliceReducers";
import { combineReducers } from "@reduxjs/toolkit";
// import mainReducer from "../reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

/* export const store = configureStore({
    reducer: {
        GenericData: StateSliceReducers,
    },
});
export default store;
 */

const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
            secretKey: "ChiaveSempliceAlMomento", // process.env.REACT_APP_PERSIST_KEY, // crea il tuo file .env.local in cui creare la chiave REACT_APP_PERSIST_KEY col valore di una stringa complessa che
            // verrà usata come chiave di cripatzione dello store salvato nel localStorage del browser
        }),
    ],
};

const rootReducer = combineReducers({
    GenericData: StateSliceReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    // reducer
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
