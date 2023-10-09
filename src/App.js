import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Event from './components/Event';
function App() {
  return (
   <Router>
    <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/events' element={<Event/>}/>
   </Routes>
  
   </Router>
  );
}

export default App;
