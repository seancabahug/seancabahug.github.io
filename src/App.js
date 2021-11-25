import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
