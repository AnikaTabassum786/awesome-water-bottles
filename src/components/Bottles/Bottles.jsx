import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const [cart,setCart] = useState([])

    const handleAddCart=(bottle)=>{
        console.log('added cart',bottle)
        const newCart=[...cart,bottle]
        setCart(newCart)
    }

    const bottles = use(bottlesPromise)
    // console.log(bottles)

    return (
        <div>
            Total Bottle: {bottles.length} <br />
            Cart: {cart.length}

            {/* <div>
                {bottles.map((bottle,index)=>{
                    return(
                        <div key={index}>
                        {bottle.id}
                        </div>
                    )
                })}
            </div> */}

            <div className='bottle-container'>
                {bottles.map(bottle => <Bottle
                 key={bottle.id}
                 bottle={bottle} 
                 handleAddCart={handleAddCart}
                  ></Bottle>)}
            </div>


        </div>
    );
};

export default Bottles;