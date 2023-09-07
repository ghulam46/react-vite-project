import { useState } from 'react';
import { sculptureList } from './Data.jsx'

export default function ComponentMemory() {
    const [index, setIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    let sculpture = sculptureList[index];

    function handleClick() {
        setIndex((index + 1) % sculptureList.length)
    }

    function handleMoreClick() {
        setShowText(!showText)
    }
    
    return(
        <div className='p-10'>
            <button className='btn btn-outline btn-primary mb-2' onClick={handleClick}>Next</button>
            <h2 className='text-4xl mb-3'>
                <i>{sculpture.name}</i> 
                <h2 className='text-sm'>
                    {''}by {sculpture.artist}
                </h2>
            </h2>
            <h3 className='mb-2'>({index + 1} of {sculptureList.length})</h3>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
                style={{width: 150}}
            />
            <button className='btn btn-info mt-3' onClick={handleMoreClick}>{showText ? 'Hide' : 'Show'} Descriptions</button>
            {showText && <p className='mt-2' style={{width: 600}}>{sculpture.description}</p>}
        </div>
    );
}