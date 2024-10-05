import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './OurGuestHouse.css';
import guestHouseImage1 from '../assets/guestHouseImage1.jpg';
import guestHouseImage2 from '../assets/olaa.jpg';

gsap.registerPlugin(ScrollTrigger);

function OurGuestHouse() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Guesthouse Card Animation
      gsap.fromTo(
        ".guesthouse-card",
        { x: "-30%", opacity: 0 },  // Start off-screen
        {
          x: "0%",                    // Final position in view
          opacity: 1,
          scrollTrigger: {
            trigger: ".guesthouse-card",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
            markers: false,          // Markers disabled
          },
          duration: 2,
          ease: "power4.out"
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <h1 style={{ textAlign: "center", margin: "30px", fontSize: "45px" }} className="ourguest-house-header">Our Guest House</h1>
      <div className="guesthouse-card">
        <div className="image-container">
          <img src={guestHouseImage1} alt="Guest House" className="guesthouse-image" />
          <img src={guestHouseImage2} alt="Guest House" className="guesthouse-image guesthouse-image-hover" />
          <div className="overlay">
            <p className="description">Experience the tranquility and beauty of our guest house with stunning views and comfortable accommodations.</p>
            <a href="/more-details" className="more-details-btn"><span>More Details</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGuestHouse;
