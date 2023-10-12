import React, { useState } from 'react';
import { IBook } from '../../interfaces/IBook';

import '../list/listItems.css';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { openModal } from '../../redux/slices/ModalSlice';
import IModal from '../../interfaces/IModal';
import EditItem from '../edit/editItem';
import DeleteItem from '../delete/deleteItem';

export const ListItems: React.FC<{ bookList: IBook[] }> = ({ bookList }) => {
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state)

    const _DeleteHandler = (book: IBook): any => {
        var selectedItem : IBook = {
            id: book.id,
            category: book.category,
            description: book.description,
            price: book.price,
            title: book.title,
            createdDate :book.createdDate
        };

        const modalProp: IModal = {
            children: <DeleteItem key="EditComp" book={selectedItem} />,
            headerTitle: 'Delete Book',
            isOpen: true
        }
        
        dispatch(openModal(modalProp));
    }

    const _EditHandler = (book: IBook): any => {
        var selectedItem : IBook = {
            id: book.id,
            category: book.category,
            description: book.description,
            price: book.price,
            title: book.title,
            createdDate :book.createdDate
        };

        const modalProp: IModal = {
            children: <EditItem key="EditComp" book={selectedItem} />,
            headerTitle: 'Edit Book',
            isOpen: true
        }
        
        dispatch(openModal(modalProp));
    }

    return (
        <table className='table' width="100%">
            <thead>
                <tr >
                    <th style={{ fontWeight: "700" }} align="left">Name</th>
                    <th style={{ fontWeight: "700" }} align="left">Price&nbsp;($CAD)</th>
                    <th style={{ fontWeight: "700" }} align="left">Category</th>
                    <th style={{ fontWeight: "700" }} align="left">Description</th>
                    <th style={{ fontWeight: "700" }} align="center">Operation</th>
                </tr>
            </thead>
            <tbody>
                {bookList.map((row, index) => (
                    <tr key={index}>
                        <td align="left">{row.title}</td>
                        <td align="left">{row.price}</td>
                        <td align="left">{row.category}</td>
                        <td align="left">{row.description}</td>
                        <td align="center">
                            <button className="btn-table btn-error" onClick={() => _DeleteHandler(row)}>Delete</button>
                            <button className="btn-table btn-warning" onClick={() => _EditHandler(row)}>Edit</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListItems;



