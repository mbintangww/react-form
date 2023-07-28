import { useState } from 'react'

import './App.css'
import BookForm from './components/bookForm';
import BookList from './components/bookList';
import NavBar from './components/navBar';
import BookContextProvider from './context/context';

const App = () => {
  return (
    <div>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
