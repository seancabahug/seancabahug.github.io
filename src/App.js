import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import HighSchool from "./highschool/HighSchool";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/high-school" element={<HighSchool />}>
      </Route>
    </Routes>
  );
}

export default App;
