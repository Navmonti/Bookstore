import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../slices/ModalSlice";
import BookSlice from "../slices/BookSlice";


export const store = configureStore({
    reducer: {
        book : BookSlice,
        modal : ModalSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch