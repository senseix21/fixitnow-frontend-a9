import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
    maxRating: number;
}

const Rating: React.FC<RatingProps> = ({ maxRating }) => {
    const [rating, setRating] = useState(0);

    const handleRatingClick = (index: number) => {
        setRating(index + 1);
    };

    return (
        <div className='flex'>
            {[...Array(maxRating)].map((_, index) => (
                <FaStar
                    key={index}
                    style={{ color: index < rating ? 'red' : '#e4e5e9' }}
                    onClick={() => handleRatingClick(index)}
                />
            ))}
        </div>
    );
};

export default Rating;
