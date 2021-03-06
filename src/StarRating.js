import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

function StarRating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (<label>
                    <input
                        type="radio"
                        name="rating" 
                        value={ratingValue} 
                        onClick={()=>setRating(ratingValue)}
                       />
                        <FaStar 
                        className='star' 
                        color={ratingValue <= (hover || rating)?('#ffc107'):('e0dbdb')}
                        onMouseEnter={()=>setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
               /></label>)
            })}

        </>
    )
}

export default StarRating