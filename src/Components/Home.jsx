import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { gsap } from 'gsap';
import { useMediaQuery } from 'react-responsive';
import './Home.css';
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import { Link } from 'react-router-dom';

function Home() {
    const images = [home1, home2, home3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // GSAP text animation on initial render
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".title, .book-now-button", // تحديد العناصر المستهدفة
            { y: -600, opacity: 1 }, // الحالة الأولية
            { y: 0, opacity: 1, duration: 3, ease: "power4.out", stagger: 0.9 } // الحالة النهائية مع توقيت وتأخير متدرج
        );
    }, []);

    // Change background image every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, [images.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="background-container">
        
            <div className="background" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            
                <div className="title">
                    <h1>Welcome to our Nubisn house and hope you enjoy</h1>
                    <p>We have an amazing view, a comfortable place, and are very safe. You can stay anytime you want and will be happy with our activities, so don't miss this opportunity.</p>
                </div>
                <Link to="/reservation">
                    <button className="book-now-button">Book Now</button>
                </Link>
                <button className="arrow-button prev" onClick={handlePrev}>←</button>
                <button className="arrow-button next" onClick={handleNext}>→</button>
            </div>
          
            {isMobile && (
                <div className="mobile-view">
                    {/* مكونات العرض للأجهزة الصغيرة */}
                </div>
            )}
        </div>
    );
}

export default Home;
