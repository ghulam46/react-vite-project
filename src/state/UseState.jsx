import { useState } from "react";

/* eslint-disable no-const-assign */
export default function UseState() {
    const [age, setAge] = useState(0);
    
    const increaseAge = () => {
        setAge(age+1);
    };

    return(
        <>
            {age}
            <button onClick={increaseAge}>+</button>
        </>
    );
}