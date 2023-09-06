import { useState } from "react";
import '../App.css'

/* eslint-disable no-const-assign */
export default function UseState() {
    const [productInStock, setProductInStock] = useState(0);

    const increaseProduct = () => {
        setProductInStock(productInStock+1);
    }
    const decreaseProduct = () => {
        (productInStock > 0 ) && setProductInStock(productInStock-1);
    }

    const pis = <h1 className="text-2xl text-white bg-green-500">Product In Stock</h1>;
    const pos = <h1 className="text-2xl text-white bg-red-500">Product Out Of Stock</h1>;

    return(
        <div className="App">
            <div className="p-10">
                <h1 className="text-3xl text-blue-800 mb-3">Product Stock</h1>
                <button className="border-2 border-red-500 px-10 mr-3" onClick={decreaseProduct}>-</button>
                {productInStock}
                <button className="border-2 border-green-500 px-10 ml-3 mb-5" onClick={increaseProduct}>+</button><br/>
                {productInStock > 0 ? pis : pos}
            </div>
        </div>
    );
}