import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook, IBookState } from "../../interfaces/IBook";
import BookStore from './../../data/booklist'


const initialState: IBookState = {
    books: [],
    selectedBook: {
        id: 0,
        category: '',
        description: '',
        price: 0,
        title: '',
        createdDate: new Date().toDateString()
    }
};


const BookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
            var list = state.books;
            list.push(action.payload);

        },
        updateBook: (state, action: PayloadAction<IBook>) => {
            const { title, price, category, description } = action.payload;
            const item = state.books.find(x => x.id == action.payload.id)
            if (item) {
                item.category = category;
                item.title = title;
                item.price = price;
                item.description = description
            } 
        },
        deleteBook: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.books = state.books.filter(x => x.id !== id)
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
