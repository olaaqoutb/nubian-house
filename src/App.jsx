// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import Activity from "./Components/Activity";
import Customer from "./Components/Customer";
import OurGuestHouse from './Components/OurGuestHouse';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import BookForm from './Components/BookForm';
import GuestHousePage from "./Components/GuestHousePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<BookForm />} />
        <Route path="/more-details" element={<GuestHousePage />} />
        {/* Render AboutUs without a route, so it shows on all pages */}
      </Routes>
      <Activity />
      <Customer />
      <OurGuestHouse />
      <AboutUs /> {/* Ensure AboutUs is rendered */}
      <Footer />
    </Router>
  );
}

export default App;
