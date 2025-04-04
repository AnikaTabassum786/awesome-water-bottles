import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

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


    const handleRemoveFromCart =(id)=>{
        console.log('remove item from the cart',id)

        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)

        removeFromCart(id)
    }

    

    return (
        <div>
            Total Bottle: {bottles.length} <br />
            Cart: {cart.length}
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

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