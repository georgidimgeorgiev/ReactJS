import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


export default function Home(){
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
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/CoverFire.png"/>
                    </div>
                    <h3>Cover Fire</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/ZombieLang.png"/>
                    </div>
                    <h3>Zombie Lang</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>
                <div className="game">
                    <div className="image-wrap">
                        <img src="./images/MineCraft.png"/>
                    </div>
                    <h3>MineCraft</h3>
                    <div className="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div className="data-buttons">
                        <a href="#" className="btn details-btn">Details</a>
                    </div>
                </div>

                {/* <!-- Display paragraph: If there is no books  --> */}
                <p className="no-articles">No books yet</p>
            </div>
        </section>
        </>
    );
}

