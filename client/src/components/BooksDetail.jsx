import React, { useContext } from "react";
import { BookContext } from "../context/context";

const BooksDetail = ({ book }) => {
    const { dispatch } = useContext(BookContext)
    const handleDelete = () => {
        dispatch({ type: 'DELETE_BOOK', id: book.id });
    };
    return (
        <div>
            <li onClick={handleDelete}>
                <div>{book.title}</div>
                <div>{book.author}</div>
            </li>
        </div>
    );
}

export default BooksDetail;
