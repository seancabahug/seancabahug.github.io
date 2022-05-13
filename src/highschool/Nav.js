import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    return <div className="header">
        <div className="nav">
            <Link to="resumes">Resumes</Link>
            <Link to="freshman">Freshman</Link>
            <Link to="sophomore">Sophomore</Link>
            <Link to="junior">Junior</Link>
            <Link to="senior">Senior</Link>
        </div>
    </div>
}