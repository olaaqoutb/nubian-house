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
        <Route path="/activity" element={<Activity />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/ourguesthouse" element={<OurGuestHouse />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
