import { useEffect, useState } from "react";
import './ProductView.css'
import ModalPortal from './ModalPortal';

function ProductView(props) {
    const [quantity, setQuantity] = useState(0);
    const [isAdmin, setIsAdmin] = useState(null);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [editName, setEditName] = useState(props.name);
    const [editPrice, setEditPrice] = useState(props.price);
    const [editCategory, setEditCategory] = useState(props.category);

    useEffect(() => {
        const ProfilType = localStorage.getItem("type");
        if (ProfilType == "admin") {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);

    function changeQuantity(event) {
        setQuantity(event.target.value);
    }

    function changePrice(){
        props.setFullPrice(quantity*props.price + props.currentPrice);
    }

    async function updateProduct() {
        const response = await fetch('http://localhost:3000/products/' + props.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: editName, price: editPrice, category: editCategory })
        });
        if (response.ok) {
            setEditModalOpen(false);
            if(props.FetchProducts){
                props.FetchProducts();
            }
        }
    }

    return (
        <>
            <div className="Main-Product-Div">
                <h2>{props.name}</h2>
                <div className="Product-Div">
                    <h3>Price for 1 pc: {props.price}rsd</h3>
                    {isAdmin ? (
                        <div>
                            <div className="Product-Button">
                                <button onClick={props.DeletedProduct}>Delete Product</button>
                            </div>
                            <div className="Product-Button">
                                <button onClick={() => setEditModalOpen(true)}>Edit Product</button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <input className="style-input-product" type="Number" onChange={changeQuantity} min="0" value={quantity}></input>
                            <div className="Product-Button">
                                <button onClick={changePrice}>Add Product</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isEditModalOpen && (
                <ModalPortal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "white" }}>
                        <h2>Edit Product</h2>
                        <input className="style-input-product" placeholder="Enter Name" onChange={(e) => setEditName(e.target.value)} value={editName}></input>
                        <input className="style-input-product" type="number" placeholder="Enter Price" onChange={(e) => setEditPrice(e.target.value)} value={editPrice}></input>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="Burek"
                                    checked={editCategory === 'Burek'}
                                    onChange={(e) => setEditCategory(e.target.value)}
                                />
                                Burek
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="Breads"
                                    checked={editCategory === 'Breads'}
                                    onChange={(e) => setEditCategory(e.target.value)}
                                />
                                Breads
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="Pastries"
                                    checked={editCategory === 'Pastries'}
                                    onChange={(e) => setEditCategory(e.target.value)}
                                />
                                Pastries
                            </label>
                        </div>
                        <button onClick={updateProduct}>Confirm Edit</button>
                        <button onClick={() => setEditModalOpen(false)}>Cancel</button>
                    </div>
                </ModalPortal>
            )}
        </>
    );
}
export default ProductView;
