import { useEffect, useState } from "react";
import booksAPI from "../../api/books-api";
import LatestBook from "./latest-book/LatestGame";

export default function Home(){
    const[latestBooks,  setLatestBooks] = useState([]);
    useEffect(() => {
      (async () => {
        const result = await booksAPI.getAll();
        setLatestBooks(result.reverse().slice(0,3));
      })();
    }, []);
    return(
        <>
        {/* <!--Home Page--> */}
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new books are</h2>
                <h3>Only in ReBookStore</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero"/>

            <div id="home-page">
                <h1>Latest Books</h1>

                {/* <!-- Display div: with information about every book(if any) --> */}
                {latestBooks.length > 0 
                  ? latestBooks.map(book => <LatestBook key={book._id}{...book}/>)
                  : <p className="no-articles">No books yet</p>
                }

            </div>
        </section>
        </>
    );
}

