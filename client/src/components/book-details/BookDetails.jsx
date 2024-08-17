import {useEffect, useState} from 'react';
import booksAPI from '../../api/books-api';
import { useParams } from 'react-router-dom';


export default function BookDetails(){
    const[book, setBook] = useState({});
    const {bookId} = useParams();

    useEffect(() => {
        (async() => {
            const result = await booksAPI.getOne(bookId);
            setBook(result);
        })()
    })
    return(
        // <!--Details Page-->
        <section id="game-details">
            <h1>Book Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src="images/MineCraft.png" />
                    <h1>{book.title}</h1>
                    <span className="levels">{book.author}</span>
                    <p className="type">{book.category}</p>
                </div>

                <p className="text">{book.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>
        </section>
    );
}