import React from 'react';
import { FaStar } from 'react-icons/fa';

const ARRAY = [0, 1, 2, 3, 4];

const StarRating = ({ rating, onRatingChange, readOnly = false }) => {
    return (
        <div className="star-rating flex">
            {ARRAY.map((el, index) => (
                <FaStar
                    key={index}
                    size="20"
                    onClick={() => !readOnly && onRatingChange(index)}
                    color={rating[index] ? 'gold' : 'grey'}
                    className={readOnly ? '' : 'cursor-pointer'}
                />
            ))}
        </div>
    );
};

export default StarRating;