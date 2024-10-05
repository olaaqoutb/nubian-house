import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import './Activity.css';
import act1 from '../assets/act1.jpg';
import act2 from '../assets/act2.jpg';
import act3 from '../assets/act3.jpg';

gsap.registerPlugin(ScrollTrigger);

function Activity() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Card 1: Image on the left
      gsap.from(".card1", {
        scrollTrigger: {
          trigger: ".card1",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false, // Set to true to debug
        },
        x: "-30%",        // Adjust to a smaller distance
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Card 2: Image on the right
      gsap.from(".card2", {
        scrollTrigger: {
          trigger: ".card2",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false, // Set to true to debug
        },
        x: "30%",         // Adjust to a smaller distance
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Card 3: Image on the left
      gsap.from(".card3", {
        scrollTrigger: {
          trigger: ".card3",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false, // Set to true to debug
        },
        x: "-30%",        // Adjust to a smaller distance
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <h1 className="header">Our Activity</h1>
      <div className="card1">
        <img src={act1} alt="" className="imgcard1" />
        <p className="descCard1">Abu Simbel:
        Explore the majestic temples of Abu Simbel, carved out of the mountainside, offering a glimpse into ancient Egyptian history. Enjoy guided tours that reveal the fascinating stories behind the monuments. Don’t miss the sound and light show that brings the temple to life under the stars</p>
      </div>

      <div className="card2">
        <p className="descCard1">Nile River:
Embark on a relaxing Nile cruise, where you can sail along the world's longest river and admire the stunning landscapes. Enjoy on-board activities, traditional music, and authentic Egyptian cuisine. Witness the beauty of the sunset as it reflects on the waters of the Nile.

Luxor</p>
        <img src={act2} alt="" className="imgcard1 imgcard2" />
      </div>

      <div className="card3">
        <img src={act3} alt="" className="imgcard1" />
        <p className="descCard1">Luxor:
Step into the heart of ancient Egypt in Luxor, home to the Valley of the Kings and the awe-inspiring Karnak Temple. Guided tours will take you through centuries of history, revealing the mysteries of the pharaohs. Experience the vibrant culture of Luxor’s local markets and bazaars.</p>
      </div>
    </div>
  );
}

export default Activity;
