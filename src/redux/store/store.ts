import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../slices/ModalSlice";
import BookSlice from "../slices/BookSlice";


export const store = configureStore({
    reducer: {
        modal : ModalSlice,
        book : BookSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch