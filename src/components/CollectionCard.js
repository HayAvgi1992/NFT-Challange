import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

function CollectionCard({ id, name, traits, cardImage}) {
    return (
        <div className='collectionCard'>
            <img src={cardImage} alt='' />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'> .#{id}</div>
                </div>
                <div className='priceContainer'>
                    <img src={weth} alt='' className='wethImage'/>
                    <div className='price'>{traits[0]?.value}</div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
