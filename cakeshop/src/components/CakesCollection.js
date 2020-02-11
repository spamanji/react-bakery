import React, { useState } from 'react';
import Cake from './Cake';

export default function CakesCollection(props) {
    const cakes = props.cakes;

    return <div refs='gallery-container' className='container-fluid gallery-container'>
        <div className='row'>
            {
                cakes.map((cake, index) => {
                    return <div className='col-sm-6 col-md-3 col-xl-2' key={index}>
                        <div className='gallery-card'>
                            <Cake className='gallery-thumbnail' cake={cake} deleteCake={props.deleteCake}
                                editCake={props.editCake} />
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}