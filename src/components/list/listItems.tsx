import React, { useState } from 'react';
import IBookList from '../../interfaces/IBook';

import '../list/listItems.css';

export const ListItems: React.FC<IBookList> = ({ items }) => {

    const [item, setItem] = useState(0);

    const _DeleteHandler = (): any => {


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
                {items.map((row, index) => (
                    <tr >
                        <td align="left">{row.name}</td>
                        <td align="left">{row.price}</td>
                        <td align="left">{row.category}</td>
                        <td align="left">{row.description}</td>
                        <td align="center">
                            <button color="warning" className="btn-error" onClick={_DeleteHandler()}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ListItems;



