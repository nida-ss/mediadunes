// CustomerReviewsCarousel.jsx
import React, { useState } from 'react';
import './Customer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const reviewsData = [
    {
        text: "Denovers did an incredible job under very tight timelines. The re-design of the product received  use by more than 200,000 users. The design is durable. I would highly recommend working with Denovers for any project.",
        name: "Brandon Busioto",
        position: "CEO, CoVerified",
        image: "https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg"
    },
    {
        text: "Denovers did an incredible job under very tight timelines. The re-design of the product received  use by more than 200,000 users. The design is durable. I would highly recommend working with Denovers for any project.",
        name: "Jane Doe",
        position: "CTO, TechCorp",
        image: "https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg"
    },
    {
        text: "Working with Denovers was a game-changer for us. Their attention to detail and commitment to quality step of the process.",
        name: "John Smith",
        position: "Manager, FinTech",
        image: "https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg"
    },
    {
        text: "Denovers exceeded our expectations with their innovative design solutions and quick turnaround time. Highly recommend their services!",
        name: "Alice Brown",
        position: "CEO, HealthCorp",
        image: "https://img.freepik.com/premium-photo/portrait-young-boy-professional-look_785361-73.jpg"
    }
];

const CustomerReviewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex + 2 < reviewsData.length ? prevIndex + 2 : 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex - 2 >= 0 ? prevIndex - 2 : reviewsData.length - 2
        );
    };

    return (
        <div className="reviews-carousel  text-center py-5">
            <h2 className="mb-4">Our Customer Reviews</h2>
            <div className="row justify-content-center align-items-center">
                <button className="col-1 arrow-button" onClick={handlePrev}>←</button>
                <div className="col-10 col-md-8">
                    <div className="row">
                        {reviewsData.slice(currentIndex, currentIndex + 2).map((review, index) => (
                            <div className="col-12 col-md-6 d-flex justify-content-center mb-4" key={index}>
                                <div className="review-card">
                                    {/* <p className="quote-icon">“</p> */}
                                    <p className="review-text">{review.text}</p>
                                    <div className="reviewer-info">
                                        <img src={review.image} alt={`${review.name} photo`} className="reviewer-image" />
                                        <div>
                                            <p className="reviewer-name mb-0">{review.name}</p>
                                            <p className="reviewer-position">{review.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="col-1 arrow-button" onClick={handleNext}>→</button>
            </div>
        </div>
    );
};

export default CustomerReviewsCarousel;
