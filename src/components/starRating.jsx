import React from 'react';
import { FaStar } from 'react-icons/fa';

const ARRAY = [0, 1, 2, 3, 4];

const StarRating = ({ rating, onRatingChange, readOnly = false }) => {
    return (
        <div className="star-rating">
            {ARRAY.map((el, index) => (
                <FaStar
                    key={index}
                    size="20"
                    onClick={() => !readOnly && onRatingChange(index)}
                    color={rating[index] ? (readOnly ? 'black' : 'gold') : 'grey'}
                    style={{ cursor: readOnly ? 'default' : 'pointer' }}
                />
            ))}
        </div>
    );
};

export default StarRating;
