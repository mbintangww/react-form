import React, { useContext } from "react";
import { BookContext } from "../context/context";
import BooksDetail from "./BooksDetail";

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div>
            <ul>
                {books.map((book) => (
                    <BooksDetail key={book.id} book={book} />
                ))}
            </ul>

        </div>
    ) : (
        <div>no books here</div>
    )
}

export default BookList;