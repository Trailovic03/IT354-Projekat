import { useEffect, useState } from "react";
import './ProductView.css'




function ProductView(props) {
    const [quantity, setQuantity] = useState(0);
    const[isAdmin,setIsAdmin] = useState(null);
 useEffect(() => {
        const ProfilType = localStorage.getItem("type");
        if (ProfilType == "admin") {
            setIsAdmin(true);
        }else{
            setIsAdmin(false);
        }
        
    }, []);
    function changeQuantity(event) {
        setQuantity(event.target.value);
    }

function changePrice(){
    props.setFullPrice(quantity*props.price + props.currentPrice);
}




    return (
        <>
            <div className="Main-Product-Div">
                <h2>{props.name}</h2>
            

                <div className="Product-Div">
                    <h3>Price for 1 pc: {props.price}rsd</h3>
                    {isAdmin?(<dvi>
                    <div className="Product-Button">
                        <button onClick={props.edit}>Edit Product</button>
                        <button onClick={props.DeletedProduct}>Delete Product</button>
                    </div></dvi>):(<dvi><input className="style-input-product" type="Number" onChange={changeQuantity} min="0" value={quantity}></input>
                    <div className="Product-Button">
                        <button onClick={changePrice}>Add Product</button>
                    </div></dvi>)}
                    
                </div>
            </div>
        </>





    );
} export default ProductView;