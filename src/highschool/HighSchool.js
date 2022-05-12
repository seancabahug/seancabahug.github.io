import {
    Outlet,
    useLocation,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import "../Home.css";
import "./HighSchool.css";

export function HighSchool() {
    let location = useLocation();

    return <>
        <div>
            <Link to="resumes">resumes</Link>
            <Link to="freshman">freshman</Link>
        </div>
        <PageTransition 
            preset="slide" 
            transitionKey={location.pathname}
            enterAnimation="moveToLeft"
            exitAnimation="moveToLeft"
        >
            <Routes>
                <Route index element={<Navigate replace to="resumes" />} />
                <Route key="resumes" path="resumes" element={<h1>ayyyy</h1>} />
                <Route key="freshman" path="freshman" element={<h1>f</h1>} />
                <Route key="sophomore" path="sophomore" element={<h1>s</h1>} />
                <Route key="junior" path="junior" element={<h1>asdf</h1>} />
                <Route key="senior" path="senior" element={<h1>ajflajf</h1>} />
            </Routes>
        </PageTransition>
    </>;
}