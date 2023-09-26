import React from 'react';
import IBookList from '../../interfaces/IBook';

import '../list/listItems.module.css';

export const ListItems: React.FC<IBookList> = ({ items }) => {

    const _DeleteHandler = (): any => {


    }

    return (
        <table border={1} width="100%" style={{padding:'20px'}}>
            <tr >
                <th style={{ fontWeight: "700" }} align="left">Name</th>
                <th style={{ fontWeight: "700" }} align="left">Price&nbsp;($CAD)</th>
                <th style={{ fontWeight: "700" }} align="left">Category</th>
                <th style={{ fontWeight: "700" }} align="left">Description</th>
                <th style={{ fontWeight: "700" }} align="left">Operation</th>
            </tr>
            {items.map((row, index) => (
                <tr >
                    <td align="left">{row.name}</td>
                    <td align="left">{row.price}</td>
                    <td align="left">{row.category}</td>
                    <td align="left">{row.description}</td>
                    <td>
                    <button  color="warning" className="btn-error" onClick={_DeleteHandler()}>Delete</button>
                    </td>
                </tr>
            ))}
        </table>








    );
};

export default ListItems;



