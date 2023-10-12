import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IBookState } from "../../interfaces/IBook";
import BookStore from './../../data/booklist'


const initialState: IBookState = {
    books: [],
    selectedBook : {
        id: 0,
        category:'',
        description : '',
        price : 0,
        title:'',
        createdDate : new Date().toDateString()
    }
};


const BookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            state.books.push(action.payload); 
        },
        updateBook: (state, actions: PayloadAction<IBook>) => {
            
        },
        deleteBook: (state, actions: PayloadAction<number>) => {

        },
        getBookById: (state, actions: PayloadAction<number>) => {

        },
        gerAllBook: (state) => {
            state.books = BookStore
        }
    },
});

export const { addBook, updateBook, deleteBook, getBookById, gerAllBook } = BookSlice.actions;
export default BookSlice.reducer;
