import { useState } from "react";
import "../App.css"

export default function InputValue() {
    const [InputValue, setInputValue] = useState("");
    
    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    return(
        <div className="App">
            <input className="border-2 border-black" type="text" onChange={handleInputValue}/><br/>
            {InputValue}
        </div>
    );
}