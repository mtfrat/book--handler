import React, { useEffect, useState } from 'react'
import { db } from '../../service/config'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import './BookForm.css'

const BookForm = ({bookToEdit, updatedBook}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(() =>{
        if(bookToEdit){
            setTitle(bookToEdit.title)
            setAuthor(bookToEdit.author)
        } else{
            setTitle("")
            setAuthor("")
        }
    },[bookToEdit])

    const formHandler = async (e) => {
        e.preventDefault()

        if(!title || !author) return;

        if(bookToEdit){
            const bookRef = doc(db, "books", bookToEdit.id)
            await updateDoc(bookRef, {title, author})
            updatedBook()
        } else {
            await addDoc(collection(db, "books"), {title, author})
        }
        setTitle("")
        setAuthor("")
    }

    return (
        <form onSubmit={formHandler} className='book-form'>
            <input type="text" value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" value={author} placeholder='Author' onChange={(e) => setAuthor(e.target.value)}/>
            <button type='submit'>
                {
                    bookToEdit ? "Update book" : "Add book"
                }
            </button>
        </form>
    )
}

export default BookForm