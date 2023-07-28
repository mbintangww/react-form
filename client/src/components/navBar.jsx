import React, { useContext } from "react";
import { BookContext } from "../context/context";

const NavBar = () => {
    const { books } = useContext(BookContext);

    return (
        <div>
            <h1>you have {books.length} books</h1>
        </div>
    );
}

export default NavBar;