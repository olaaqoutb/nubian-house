// App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home';
import BookForm from './Components/BookForm';
import GuestHousePage from "./Components/GuestHousePage";
import Activity from "./Components/Activity";
import Customer from "./Components/Customer";
import OurGuestHouse from './Components/OurGuestHouse';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      {/* هنا نقوم بإضافة التوجيه */}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Activity />
            <Customer />
            <OurGuestHouse />
            <AboutUs />
          </>
        } />
        <Route path="/reservation" element={<BookForm />} />
        <Route path="/more-details" element={<GuestHousePage />} />
      </Routes>
      {/* الفوتر ثابت في جميع الصفحات */}
      <Footer />
    </Router>
  );
}

export default App;
