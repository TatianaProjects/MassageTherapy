import { useState, useEffect } from "react";


function Reviews() {
   const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      review:
        "The most relaxing massage I have ever experienced. I left feeling refreshed and stress-free."
    },
    {
      id: 2,
      name: "Michael T.",
      review:
        "Professional service and a calm atmosphere. Highly recommended for anyone looking to unwind."
    },
    {
      id: 3,
      name: "Jennifer K.",
      review:
        "The hot stone massage was incredible. I felt better for days afterwards."
    },
    {
      id: 4,
      name: "David R.",
      review:
        "Excellent experience from start to finish. Clean, welcoming, and very relaxing."
    }
  ];
  
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
  setCurrentReview(
    (currentReview + 1) % reviews.length
  );
};

const prevReview = () => {
  setCurrentReview(
    (currentReview - 1 + reviews.length) % reviews.length
  );
};

useEffect(() => {

  const timer = setInterval(() => {

    setCurrentReview(
      prev => (prev + 1) % reviews.length
    );

  }, 5000);

  return () => clearInterval(timer);

}, []);
  
  return (
    <div className="page-container reviews-page">

      <h1>Client Reviews</h1>

      <div className="reviews-container">

        <button className="slider-btn" onClick={prevReview}>←</button>

        <div className="review-card glass-card">

          <p className="stars">⭐⭐⭐⭐⭐</p>
          <p className="review-text">"{reviews[currentReview].review}"</p>

          <h3>{reviews[currentReview].name}</h3>

        </div>

          <button className="slider-btn" onClick={nextReview}>→</button>

        </div>

    </div>
  );
}

export default Reviews;