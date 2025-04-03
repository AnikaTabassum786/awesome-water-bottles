import React from 'react';
import './Bottle.css'
const Bottle = ({bottle}) => {
     console.log(bottle)
    const {img,name,price,stock} = bottle
    return (
        <div className='card bottle'>
            <img src={img} alt="" />
            <div>{name}</div>
            <div>${price}</div>
            <div>{stock} remaining</div>
            <button>Buy Now</button>
        </div>
    );
};

export default Bottle;