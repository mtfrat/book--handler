import React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../../service/config'
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import './BookList.css'

const BookList = ({bookToEdit}) => {
    const [books,setBooks] = useState([])

    useEffect(() =>{
        const booksAct = onSnapshot(collection(db, "books"), (snapshot) =>{
            setBooks(snapshot.docs.map(doc=>({id:doc.id, ...doc.data()})))
        })
        return() => booksAct()
    },[])

    const deleteBook  = async (id) => {
        try {
            await deleteDoc(doc(db, 'books', id))
        } catch (error) {
            console.log("Error deleting book", error);
        }
    }

    return (
    <div>
        <ul className='book-list'>
            {
                books.map(book =>(
                                        <li key={book.id}>
                        <strong>{book.title} - {book.author}</strong>
                        <button onClick={()=>bookToEdit(book)}>Edit</button>
                        <button onClick={()=>deleteBook(book.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
    )
}

export default BookList