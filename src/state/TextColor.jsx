import { useState } from 'react';
import '../App.css'

export default function TextColor() {
    const [textColor, setTextColor] = useState("black");

    return(
        <>
            <button className="btn btn-primary" onClick={() => {
                setTextColor(textColor === "black" ? "red" : "black")
            }}>Set Color</button>  
            <h1 style={{color: textColor}}>SET COLOR</h1>
        </>
    );
}