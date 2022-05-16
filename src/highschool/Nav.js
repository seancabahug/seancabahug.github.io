import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return <div className="header">
        <Link to="/" className="name">Sean Cabahug</Link>
        <div className="nav">
            {["resumes", "freshman", "sophomore", "junior", "senior"].map(page =>
                <NavLink key={page} to={page} className={({ isActive }) => isActive ? "active-nav" : undefined}>
                    { page.charAt(0).toUpperCase() + page.substring(1) }
                </NavLink>
            )}
        </div>
        <a className="reflection" href="https://docs.google.com/document/d/16NQ29swJTTI4QWje8tmHJgzqebNP4OALQjRIxZTs0I4/edit?usp=sharing">
            Reflection
        </a>
    </div>
}