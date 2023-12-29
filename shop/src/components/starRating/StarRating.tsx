import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface StarRatingProps {
    initialRating: number | null;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating }) => {
    const [rating, setRating] = useState<number | null>(initialRating);

    // Update the rating when it changes
    useEffect(() => {
        setRating(initialRating);
    }, [initialRating]);

    const renderStars = () => {
        const stars = [];
        const roundedRating = Math.round((rating || 0) * 2) / 2;

        for (let i = 0; i < 5; i++) {
            if (i + 0.5 <= roundedRating) {
                stars.push(<FaStar key={i} color="gold" />);
            } else if (i < roundedRating) {
                stars.push(<FaStarHalf key={i} color="gold" />);
            } else {
                stars.push(<FaStar key={i} color="gray" />);
            }
        }

        return stars;
    };

    return <div>{renderStars()}</div>;
};

export default StarRating;