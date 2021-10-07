import {
    NavLink
} from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
    return (
        <nav className="navBar">
            <ul className="navBar-list">
                <li>
                    <NavLink exact={true}  activeClassName="nav-selected" to="/">tings to do</NavLink>
                </li>
                <li>
                <NavLink to="/new">add something to do</NavLink>
                </li>
            </ul>
        </nav>
    );
}