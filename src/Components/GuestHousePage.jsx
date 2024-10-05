import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./GuestHousePage.css";

import nubian1 from "../assets/nubian1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";
import h5 from "../assets/h5.jpg";
import h6 from "../assets/h6.jpg";
import h7 from "../assets/h7.jpg";
import h8 from "../assets/h8.jpg";
import view1 from "../assets/view1.jpg";
import view2 from "../assets/view2.jpg";
import view3 from "../assets/view3.jpg";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import food4 from "../assets/food4.jpg";
import food5 from "../assets/food5.jpg";
import food6 from "../assets/food6.jpg";
import food7 from "../assets/food7.jpg";
import food8 from "../assets/food8.jpg";




const GuestHousePage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for guest cards in "Comfortable Home" section
    gsap.fromTo(
      ".guest-card",
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power4.out", 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".description-and-cards",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for images in "Beautiful View" section
    gsap.fromTo(
      ".beatiful-card img",
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power4.out", 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".card-container2.beatiful-card",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for food cards in "Delicious Food" section
    gsap.fromTo(
      ".food-card",
      { y: -50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power4.out", 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".background-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <div className="guest-house-page">
      {/* Main Title */}
      <h1 className="guest-header">Our Nubian House</h1>

      {/* Description and Cards Container */}
      <div className="description-and-cards">
        <div className="guest-description">
          <h2>Comfortable Home</h2>
          <p>
            Welcome to our guest house. Here, you'll find comfort, elegance, and a beautiful view.
            Welcome to our guest house. Here, you'll find comfort, elegance, and a beautiful view.
            Welcome to our guest house. Here, you'll find comfort, elegance, and a beautiful view.
          </p>
        </div>
        <div className="card-container">
          {[nubian1, h2, h3, h4, h5, h6, h7,h8].map(
            (img, index) => (
              <div className="guest-card" key={index}>
                <img src={img} alt={`Guest House ${index}`} />
                <div className="card-description">
                Welcome to our guest house. Here, you'll find comfort, elegance, and a beautiful view. Welcome to our guest house. Here, you'll find comfort,
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Second Section */}
      <h2 className="h2header">Beautiful View</h2>
      <div className="card-container2 beatiful-card">
        {[view1, view2, view3].map((img, index) => (
          <div className="guest-card2" key={index}>
            <img src={img} alt={`View ${index}`} />
          </div>
        ))}
      </div>

      {/* Third Section */}
      <h2 className="h2header">Delicious Food</h2>
      <div
        className="background-section"
        style={{ backgroundImage: `url(${view2})` }}
      >
        <div className="card-container2">
          {[food1, food2, food3, food4, food5, food6, food7,food8, food8].map(
            (img, index) => (
              <div className="guest-card2 food-card" key={index}>
                <img src={img} alt={`Food ${index}`} />
                <div className="card-description">
                  traditional food
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestHousePage;
