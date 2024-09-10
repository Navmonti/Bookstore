/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { IBook } from '../interfaces/IBook';


const addIBook = async (bookData: IBook): Promise<IBook> => {
    const response = await axios.post('/api/books', bookData);
    return response.data;
};

const updateIBook = async (bookId: number, bookData: IBook): Promise<IBook> => {
    const response = await axios.put(`/api/books/${bookId}`, bookData);
    return response.data;
};

const deleteIBook = async (bookId: number): Promise<void> => {
    await axios.delete(`/api/books/${bookId}`);
};

const getByIdIBook = async (bookId: number): Promise<IBook> => {
    const response = await axios.get(`/api/books/${bookId}`);
    return response.data;
};

const getAllIBooks = async (): Promise<IBook[]> => {
    const response = await axios.get('/api/books');
    return response.data;
}; 

const getAllIBooksByPagination = async (page: number, size: number): Promise<IBook[]> => {
    const response = await axios.get('/api/books', {
        params: { page, size },
    });
    return response.data;
};

export default {
    addIBook,
    updateIBook,
    deleteIBook,
    getByIdIBook,
    getAllIBooks,
    getAllIBooksByPagination,
};

