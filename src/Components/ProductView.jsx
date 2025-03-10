import { useState } from "react";
import './ProductView.css'




function ProductView(props) {
    const [quantity, setQuantity] = useState(0);


    function changeQuantity(event) {
        setQuantity(event.target.value);
    }






    return (
        <>
            <div className="Main-Product-Div">
                <h2>{props.name}</h2>
                {/* <div style={{backgroundImage:"url("+"/assets/BackgroundLogin.jpg"+")"}}>
        </div> */}

                <div className="Product-Div">
                    <h3>Price for 1 pc: {props.price}rsd</h3>
                    <input className="style-input-product" type="Number" onChange={changeQuantity} value={quantity}></input>
                    <div className="Product-Button">
                        <button >Add Product</button>
                    </div>
                </div>
            </div>
        </>





    );
} export default ProductView;