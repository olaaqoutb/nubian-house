import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';
import logo from "../assets/logo.jfif"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility
  const menuItemsRef = useRef([]);

  useEffect(() => {
    menuItemsRef.current.forEach((item) => {
      const mouseEnterHandler = () => {
        gsap.to(item, { y: -7, duration: 0.3, ease: 'power1.inOut' });
      };
      const mouseLeaveHandler = () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: 'power1.inOut' });
      };

      item.addEventListener('mouseenter', mouseEnterHandler);
      item.addEventListener('mouseleave', mouseLeaveHandler);

      // Cleanup function to remove event listeners
      return () => {
        item.removeEventListener('mouseenter', mouseEnterHandler);
        item.removeEventListener('mouseleave', mouseLeaveHandler);
      };
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="" className='logo'/></div>
      <div className="burger" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </div>
      <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
        {['Home', 'Activities', 'Customer Opinion', 'Our Guesthouse', 'About Us', 'Contact Us'].map((item, index) => (
          <li
            key={index}
            ref={(el) => (menuItemsRef.current[index] = el)}
            className="menu-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
