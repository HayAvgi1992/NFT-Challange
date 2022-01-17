import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

function PunkList({ punkListData, changePunk }) {
    return (
        <div className='punkList'>
            {punkListData.map( punk => (
            <div 
            onClick={() => changePunk(punk.token_id)}
            key={punk.token_id}
            >
                <CollectionCard
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    cardImage={punk.image_original_url}
                />
            </div>
            ))}
        </div>
    )
}

export default PunkList
