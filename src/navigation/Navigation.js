import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav className="navigation">
            <h1>My Life 💩</h1>
            <ul>
                <li>
                    <Link to="/" className="links">Home</Link>
                </li>
                <li>
                    <Link to="/blog" className="links">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;