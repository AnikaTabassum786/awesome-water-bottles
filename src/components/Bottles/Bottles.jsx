import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart } from '../../utilities/localstorage';

const Bottles = ({ bottlesPromise }) => {

    const [cart,setCart] = useState([])

    const bottles = use(bottlesPromise)
    // console.log(bottles)

    const handleAddCart=(bottle)=>{
        console.log('added cart',bottle)
        const newCart=[...cart,bottle]
        setCart(newCart)

        // save the bottle id in the storage
        addToStoreCart(bottle.id)

    }

    useEffect(()=>{

    const storedCartIds = getStoreCart();
    //console.log(storedCartIds,bottles)

    const storedCart = [];

    for(const id of storedCartIds){
        console.log(id);
        const cartBottle = bottles.find(bottle => bottle.id === id);

        if(cartBottle){
            storedCart.push(cartBottle)
        }
    }

    setCart(storedCart)
    
    },[bottles])

    

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