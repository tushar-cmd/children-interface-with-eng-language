//import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Word from "./components/Word";
import Sentences from "./components/Sentences";
import Game from "./components/Game";
import Tonguetwisters from "./components/Tonguetwisters";
import Contact from './components/Contact';
import Login from './components/Login';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Carousel/>}>
     </Route>
     <Route path="/words" element={<Word/>}>
     </Route>
     <Route path="/game" element={<Game/>}></Route>
     <Route path="/sentences" element={<Sentences/>}></Route>
     <Route path="/tonguetwisters" element={<Tonguetwisters/>}></Route>
     <Route path="/contact" element={<Contact/>}>
     </Route>
     <Route path="/login" element={<Login/>}></Route> 
    </Routes> 
    <Footer/>
    </Router>


    </>
  );
}

export default App;
