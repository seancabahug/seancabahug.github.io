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
                <Route key="resumes" path="resumes" element={<Page page={<h1>bruh</h1>} />} />
                <Route key="freshman" path="freshman" element={<Page page={<h2>yeahhh</h2>}/>} />
                <Route key="sophomore" path="sophomore" element={<h1>s</h1>} />
                <Route key="junior" path="junior" element={<h1>asdf</h1>} />
                <Route key="senior" path="senior" element={<h1>ajflajf</h1>} />
            </Routes>
        </AnimatePresence>
    </>;
}