import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.js'
import Home from './Pages/Home/Home.js'
import Search from "./Pages/Search/Search.js"
import CardResultItem from "./Pages/ResultItem/CardResultItem.js";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/projectZones" element={<Home/>} />
          <Route exact path="/projectZones/buscar" element={<Search/>} />
        </Routes>
        <CardResultItem/> 
    </BrowserRouter>
  );
}

export default App;
