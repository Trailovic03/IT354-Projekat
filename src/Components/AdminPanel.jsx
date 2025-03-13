import './HomePage.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdLogout } from "react-icons/md";
import ProductView from "./ProductView";
import ModalPortal from './ModalPortal';

function AdminPanel() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");



    function changeName(event) {
        setName(event.target.value);
    }

    function changePrice(event) {
        setPrice(event.target.value);
    }

    function LogOut() {

        localStorage.setItem("type", "undefined");
        navigate('/');

    }

    useEffect(() => {
        const profilType = localStorage.getItem("type");
        if (profilType == "user") {
            navigate('/HomePage');
        } else if (profilType == "undefined") {
            navigate('/');
        }
        FetchProducts();
    }, [])

    function handleEdit(name,price,category,id){
        setModalOpen(true);
    }


    async function UpdateProduct(id) {
        const response = await fetch('http://localhost:3000/products/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, price,category})


        });
        FetchProducts();
    }
    async function DeletedProduct(id) {
        const response = await fetch('http://localhost:3000/products/' + id, {
            method: 'Delete',

        });
        FetchProducts();
    }

    async function createProduct() {
        const response = await fetch('http://localhost:3000/products/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price, category })
        }
        )
        FetchProducts();
    }

    function handleRadioChange(event) {
        setCategory(event.target.value);
    }


    async function FetchProducts() {
        const response = await fetch('http://localhost:3000/products/')
        const data = await response.json();
        setProducts(data);
    }
    function ProductsFor() {
        const breadsElements = [];
        const burekElements = [];
        const pastriesElements = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].category == "Breads") {
                breadsElements.push(
                    <ProductView name={products[i].name} price={products[i].price} id={products[i].id} edit={handleEdit} UpdateProduct={() => UpdateProduct(products[i].id)} DeletedProduct={() => DeletedProduct(products[i].id)} ></ProductView>
                )
            } else if (products[i].category == "Burek") {
                burekElements.push(
                    <ProductView name={products[i].name} price={products[i].price} id={products[i].id} edit={handleEdit} UpdateProduct={() => UpdateProduct(products[i].id)} DeletedProduct={() => DeletedProduct(products[i].id)}></ProductView>
                )
            } else if (products[i].category == "Pastries") {
                pastriesElements.push(
                    <ProductView name={products[i].name} price={products[i].price} id={products[i].id} edit={handleEdit} UpdateProduct={() => UpdateProduct(products[i].id)} DeletedProduct={() => DeletedProduct(products[i].id)}></ProductView>
                )
            }

        }
        return <div style={{ backgroundColor: "rgba(38, 36, 36, 0.8)" }}>
            <h2 style={{ color: "white", marginLeft: "15px" }}>Breads</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{breadsElements}</div>
            <h2 style={{ color: "white", marginLeft: "15px", borderTop: "5px solid white" }}>Burek</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{burekElements}</div>
            <h2 style={{ color: "white", marginLeft: "15px", borderTop: "5px solid white" }}>Pastries</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{pastriesElements}</div>
        </div>;

    }





    return (
        <>

            <div className="Button-Style">
                <div></div>
                <div></div>
                <h1 style={{ color: "white" }}>Pekara Trajko</h1>
                <div style={{ marginRight: "5%", display: "flex", gap: "7px" }}>
                    <button onClick={() => setModalOpen(true)}>Add</button>
                    <button onClick={LogOut}><MdLogout size={24} color="white" /></button>

                </div>
                <ModalPortal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "white" }}>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="Burek"
                                    checked={category === 'Burek'}
                                    onChange={handleRadioChange}
                                />
                                Burek
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="Breads"
                                    checked={category === 'Breads'}
                                    onChange={handleRadioChange}
                                />
                                Breads
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    value="Pastries"
                                    checked={category === 'Pastries'}
                                    onChange={handleRadioChange}
                                />
                                Pastries
                            </label>
                        </div>
                        <input className="style-input-product" placeholder="Enter Name" onChange={changeName} value={name}></input>
                        <input className="style-input-product" type="number" placeholder="Enter Price" onChange={changePrice} value={price}></input>
                        <button onClick={createProduct}>Confirm</button>
                        <button onClick={UpdateProduct}>Edit</button>
                    </div>


                </ModalPortal>
            </div>







            {ProductsFor()}
        </>
    );
} export default AdminPanel;