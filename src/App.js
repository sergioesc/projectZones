import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Home from './Pages/Home/Home.js'
import Search from "./Pages/Search/Search.js";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/buscar" element={<Search/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
