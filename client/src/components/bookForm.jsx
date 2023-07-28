import React, { useContext, useState } from "react";
import { BookContext } from "../context/context";

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah refresh halaman saat form disubmit
        dispatch({ type: "ADD_BOOK", book: { title, author } }) // Memanggil addBook dengan data buku baru
        setTitle(""); // Mengosongkan nilai title setelah form disubmit
        setAuthor(""); // Mengosongkan nilai author setelah form disubmit
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        value={title}
                        id="title"
                        placeholder="add title"
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="author">author</label>
                    <input
                        type="text"
                        value={author}
                        id="author"
                        placeholder="add author"
                        onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div>
                    <button type="submit">add book</button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;