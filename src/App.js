import { Route, Routes, Link, Navigate } from "react-router-dom";
import Home from './Home';
import About from './About';
import {HighSchool} from "./highschool/HighSchool";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="high-school/*" element={<HighSchool />}/>
{/*         <Route index element={<Navigate replace to="resumes" />} //>
        <Route path="resumes" element={<h1>ayyyy</h1>} />
        <Route path="freshman" element={<h1>f</h1>} />
        <Route path="sophomore" element={<h1>s</h1>} />
        <Route path="junior" element={<h1>asdf</h1>} />
        <Route path="senior" element={<h1>ajflajf</h1>} />
      </Route> */}
    </Routes>
  );
}

export default App;
