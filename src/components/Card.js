import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <article className="card">
            <div>
                <img src={props.url} alt={props.tite}></img>
            </div>
            <h2>{props.title}</h2>
            <Link to={`/details/${props.id}`} className="button">Read more</Link>
        </article>
    );
};

export default Card;