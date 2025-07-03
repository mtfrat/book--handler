import React from 'react'
import { useState } from 'react'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import './App.css'

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null)

  const bookEditorHandler = (book) => {
    setBookToEdit(book)
  }

  const bookUpdateHandler = () => {
    setBookToEdit(null)
  }

  return (
    <div className='app'>
      <h1>Books handler</h1>
      <BookForm bookToEdit={bookToEdit} updatedBook={bookUpdateHandler} />
      <BookList bookToEdit={bookEditorHandler} />
    </div>
  )
}

export default App