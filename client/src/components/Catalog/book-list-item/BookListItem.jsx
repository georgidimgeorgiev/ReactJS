import {Link} from 'react-router-dom'

export default function BookListItem({
    _id,
    title,
    category,
    imageUrl
}){
    return(
        <div className="allBooks">
            <div className="allBooks-info">
                <img src={imageUrl}/>
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/books/${_id}/details`} className="details-button">Details</Link>
            </div>
        </div>
    );
}