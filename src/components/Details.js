import "./Details.css";
import { useParams } from "react-router-dom";
import Data from "../Data";

function Details() {
    const params = useParams(); // Ausgabe: {id:'2'}
    // console.log(params);
    let blog = Data[params.id]; // Ausgabe: komplettes Objekt mit der Eigenschaft id:2
    // console.log(blog);
    return (
        <div className="detailsContainer">
            <div className="imgContainer">
                <img src={blog.img_url} alt={blog.title}></img>
            </div>
            <div className="title">
                <h2>{blog.title}</h2>
                <p>{blog.published_date}</p>
            </div>
            <p className="description">{blog.description}</p>
            <p className="author">By {blog.author}</p>
        </div>
    );
};

export default Details;