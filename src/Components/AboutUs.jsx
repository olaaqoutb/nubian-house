import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './AboutUs.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

import phone from '../assets/phone1.json';
import stars from "../assets/stars2.json"
import video2 from "../assets/contact-video.mp4";
import p6 from '../assets/p6.jpg';
import p11 from '../assets/p11.png';
import me2 from '../assets/me2.jpeg';
import p3 from '../assets/p3.jpeg';
import { FaCheck, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function AboutUs() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // GSAP text animation on scroll for Meet Our Staff section
        gsap.fromTo(
            ".meet-our-staff h4, .meet-our-staff h1, .staff-card", // استهداف العناصر المستهدفة
            { y: -300, opacity: 0 }, // الحالة الأولية
            { 
                y: 0, 
                opacity: 1, 
                duration: 2, 
                ease: "power4.out", 
                stagger: 0.9,
                scrollTrigger: {
                    trigger: ".meet-our-staff", // القسم الذي يحفز الأنيميشن
                    start: "top 80%", // يبدأ عند وصول القسم إلى 80% من نافذة العرض
                    toggleActions: "play none none none" // تشغيل الأنيميشن مرة واحدة فقط
                } 
            }
        );
    }, []);

    return (
        <>
            <div className="animation-header">
                <h1 className="about-us-header">About Us</h1>
                <Player autoplay loop src={stars} className="stars" />
            </div>

            <div className="about-us-container">
                <div className="about-us-content">
                    <h1 className='about-us-content-header'>The most luxurious resort is here for you to enjoy</h1>
                    <p className="about-us-description">
                        Experience the tranquility and beauty of our guest house with stunning views and comfortable accommodations.
                        gravida a luctus aenean ligula sit. Nisl habitant erat dapibus vivamus fusce mus lobortis ullamcorper.
                    </p>
                    <p className="about-us-description">
                        Experience the tranquility and beauty of our guest house with stunning views and comfortable accommodations.
                        luctus aenean ligula sit. Nisl habitant erat dapibus vivamus fusce mus lobortis ullamcorper.
                    </p>
                    <video src={video2} alt="Guest House" className="about-us-video" loop controls autoPlay muted />
                </div>
            </div>

            <div className="about-us-columns">
                <ul className="about-us-list">
                    <li><FaCheck className="check-icon" /> Cras semper tortor nibh sapien</li>
                    <li><FaCheck className="check-icon" /> Sed tempus vitae arcu platea cubilia</li>
                    <li><FaCheck className="check-icon" /> Elementum fringilla lacus quam</li>
                </ul>
                <ul className="about-us-list">
                    <li><FaCheck className="check-icon" /> Consectetuer adipiscing sociosqu</li>
                    <li><FaCheck className="check-icon" /> Pharetra elementum adipiscing</li>
                    <li><FaCheck className="check-icon" /> Additional Item</li>
                </ul>
            </div>

            <div className="about-us-contact">
    <Player autoplay loop src={phone} className="phone-icon" />
    <span>Reservation: 
    <Link to="/reservation">
            <button className="book-now-button2">Click Here</button>
        </Link>
    </span>
</div>


            {/* Meet Our Staff Section */}
            <div className="meet-our-staff">
                <h4>Meet Our Staff</h4>
                <h1 className='custome-header'>We give you everything right here, where you need it</h1>
                <div className="staff-cards">
                    <div className="staff-card">
                        <img src={p6} alt="Staff 1" className="staff-image" />
                        <div className="staff-info">
                            <h3>Michael Scofield</h3>
                            <p>Manager</p>
                            <div className="social-icons">
                                <FaFacebook />
                                <FaInstagram />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className="staff-card">
                        <img src={p11} alt="Staff 3" className="staff-image" />
                        <div className="staff-info">
                            <h3>Emily Brown</h3>
                            <p>secretary</p>
                            <div className="social-icons">
                                <FaFacebook />
                                <FaInstagram />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className="staff-card">
                        <img src={p3} alt="Staff 3" className="staff-image" />
                        <div className="staff-info">
                            <h3>antinyous</h3>
                            <p>treasurer</p>
                            <div className="social-icons">
                                <FaFacebook />
                                <FaInstagram />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className="staff-card">
                        <img src={me2} alt="Staff 4" className="staff-image" />
                        <div className="staff-info">
                            <h3>Olaa Qoutb</h3>
                            <p>Front-end develper</p>
                            <div className="social-icons">
                                <FaFacebook />
                                <FaInstagram />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
