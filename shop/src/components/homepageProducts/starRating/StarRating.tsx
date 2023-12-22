import React from 'react';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    // Round the rating to the nearest half to determine the number of filled stars
    const filledStars = Math.round(rating * 2) / 2;

    // Create an array of stars based on the rounded rating
    const stars = Array.from({ length: 5 }, (_, index) => {
        const isHalf = index === filledStars - 0.5;
        const isFilled = index < filledStars;

        return (
            <span
                key={index}
                className={`star ${isHalf ? 'half' : ''} ${isFilled ? 'filled' : ''}`}
            >
        &#9733;
      </span>
        );
    });

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
