import { useState } from 'react';
import '../App.css'

export default function ShowHide() {
    const [showText, setShowText] = useState(false);

    return(
        <>
            {showText === true ? <button className="btn btn-primary" onClick={() => {
                setShowText(!showText)
            }}>Hide</button> : <button className="btn btn-primary" onClick={() => {
                setShowText(!showText)
            }}>Show</button>}
            
            {showText && <h1 className='text-3xl mt-4'>REACT VITE PROJECT</h1>}
        </>
    );
}