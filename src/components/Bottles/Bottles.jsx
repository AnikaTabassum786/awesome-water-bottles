import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const bottles = use(bottlesPromise)
    // console.log(bottles)

    return (
        <div>
            {bottles.length}

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
                {bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)}
            </div>


        </div>
    );
};

export default Bottles;