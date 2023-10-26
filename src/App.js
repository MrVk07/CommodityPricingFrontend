import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homescreen from "./components/HomeScreen.js";
import DataItem from './components/DataItem';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homescreen />} />
        <Route path='/:item' element={<DataItem />} />
      </Routes>
    </Router>
  )
}

export default App
