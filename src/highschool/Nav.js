import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return <div className="header">
        <div className="name">
            <Link to="/">Sean Cabahug</Link>
        </div>
        <div className="nav">
            {["resumes", "freshman", "sophomore", "junior", "senior"].map(page =>
                <NavLink key={page} to={page} className={({ isActive }) => isActive ? "active-nav" : undefined}>
                    { page.charAt(0).toUpperCase() + page.substring(1) }
                </NavLink>
            )}
        </div>
    </div>
}