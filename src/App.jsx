import React from 'react'
import { useState } from 'react'
import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle'

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
      <DarkModeToggle/>
      <h1>Books handler</h1>
      <BookForm bookToEdit={bookToEdit} updatedBook={bookUpdateHandler} />
      <BookList bookToEdit={bookEditorHandler} />
    </div>
  )
}

export default App