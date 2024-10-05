import { useState, useEffect } from 'react';
import './Customer.css'; // ملف CSS مخصص
import p1 from "../assets/p1.jpg"; 
import p2 from "../assets/p2.jpg"; 
import p3 from "../assets/p3.jpeg"; 
import p4 from "../assets/p4.jpg"; 
import p5 from "../assets/p5.jpg"; 
import p6 from "../assets/p6.jpg"; 
import p77 from "../assets/p77.jpg"; 
import p8 from "../assets/p8.jpg"; 
import p9 from "../assets/p12.jpg"; 
import p10 from "../assets/p10.jpg"; 
import p11 from "../assets/p11.png"; 

 


const reviews = [
    { id: 1, name: "Ahmed", review: "Great experience! The guest house was clean and cozy Great experience! The guest house was clean and cozy.", rating: 4, image: p1 },
    { id: 2, name: "Sara", review: "Loved the ambiance and the service was excellent Great experience! The guest house was clean and cozy.", rating: 5, image: p2 },
    { id: 3, name: "Mohamed", review: "The location was perfect, and the staff were friendly. Great experience! The guest house was clean and cozy", rating: 4, image: p3 },
    { id: 4, name: "Nora", review: "A wonderful stay, highly recommend!", rating: 5, image: p4 },
    { id: 5, name: "Laila", review: "Very comfortable and affordable.", rating: 4, image: p5 },
    { id: 6, name: "Nora", review: "A wonderful stay, highly recommend!", rating: 5, image: p6 },
    { id: 7, name: "Omar", review: "A pleasant experience with great hospitality.", rating: 5, image: p77 },
    { id: 8, name: "Salma", review: "Clean rooms and excellent service!", rating: 5, image: p8 },
    { id: 9, name: "Tamer", review: "Loved every moment, especially the food.", rating: 4, image: p9 },
    { id: 10, name: "Yara", review: "Would definitely come back again.", rating: 5, image: p10 },
    { id: 11, name: "Tamer", review: "Loved every moment, especially the food.", rating: 4, image: p11 },
    { id: 12, name: "Yssera", review: "Would definitely come back again.", rating: 5, image: p77 },
];

const Customer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewsToShowCount = 3; // عدد الكاردات التي سيتم عرضها في كل مرة
    const totalReviews = reviews.length;

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + reviewsToShowCount) % totalReviews);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex - reviewsToShowCount + totalReviews) % totalReviews);
    };

    useEffect(() => {
        const interval = setInterval(nextReview, 5000);
        return () => clearInterval(interval);
    }, []);

    // حساب الترجمة الأفقية للكروت
    const translateXValue = -(currentIndex * (100 / reviewsToShowCount));

    return (
        <div className="reviews-container">
            <h1 style={{ textAlign: "center", margin: "30px", fontSize: "45px"  }} className='customerheader'>Nubian House Reviews</h1>
            <div 
                className="reviews-wrapper"
                style={{ transform: `translateX(${translateXValue}%)` }}
            >
                {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="review-image">
                            <img src={review.image} alt={review.name} className="reviewer-photo" />
                            <div className="rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="star">&#9733;</span>
                                ))}
                            </div>
                        </div>
                        <div className="review-content">
                            <h3 className="reviewer-name">{review.name}</h3>
                            <p className="review-text">{review.review}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={prevReview}>Previous</button>
            <button className="next-button" onClick={nextReview}>Next</button>
        </div>
    );
};

export default Customer;
