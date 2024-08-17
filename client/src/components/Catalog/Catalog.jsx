import * as booksAPI from '../../api/books-api';
import { useEffect, useState } from "react";
import BookListItem from './book-list-item/BookListItem';



export default function Catalog(){
    const[books, setBooks] = useState([]);
    useEffect(() => {
        booksAPI.getAll()
            .then(result => setBooks(result));
            // console.log(result);
    },[])

    return(
        // <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Books</h1>

            {books.length > 0
                ? books.map(book => <BookListItem key={book._id}{...book}/>)
                : <h3 className="no-articles">No books yet</h3>
            }
            
        </section>
    );
}