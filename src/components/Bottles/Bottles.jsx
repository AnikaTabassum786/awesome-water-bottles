import React, { use } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({bottlesPromise}) => {

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


            {bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}></Bottle>)}
            
        </div>
    );
};

export default Bottles;