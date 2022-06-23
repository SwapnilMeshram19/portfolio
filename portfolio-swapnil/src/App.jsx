import './App.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Skills" element={<Skills/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
