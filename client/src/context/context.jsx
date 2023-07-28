import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/reducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
        { title: 'blue clock', author: 'james villian', id: 1 },
        { title: 'flying bird', author: 'casio van hoppen', id: 2 },
        { title: 'black bloods', author: 'john lamar', id: 3 }
    ])


    return (
        <div>
            <BookContext.Provider value={{ books, dispatch }}>
                {props.children}
            </BookContext.Provider>
        </div>
    )
}

export default BookContextProvider;