import {
    Outlet,
    useLocation,
    Routes,
    Route,
    Navigate,
    Link
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import "../Home.css";
import "./HighSchool.css";
import Nav from './Nav';
import Resumes from './Resumes';
import Freshman from './Freshman';
import Sophomore from './Sophomore';
import Junior from './Junior';
import Senior from './Senior';

function Page(props) {
    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
    >
        { props.page }
    </motion.div>
}

export function HighSchool() {
    let location = useLocation();

    return <>
        <Nav />
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Navigate replace to="resumes" />} />
                <Route key="resumes" path="resumes" element={<Page page={<Resumes />} />} />
                <Route key="freshman" path="freshman" element={<Page page={<Freshman />}/>} />
                <Route key="sophomore" path="sophomore" element={<Page page={<Sophomore />} />} />
                <Route key="junior" path="junior" element={<Page page={<Junior />} />} />
                <Route key="senior" path="senior" element={<Page page={<Senior />} />} />
            </Routes>
        </AnimatePresence>
    </>;
}