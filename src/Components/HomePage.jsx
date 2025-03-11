import { useEffect, useState } from "react";
import ProductView from "./ProductView";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './HomePage.css'
import ModalPortal from "./ModalPortal";


function HomePage() {
    const [products, setProducts] = useState([]);
    const [fullPrice, setFullPrice] = useState(0);
    const categories = ["Breads", "Burek", "Pastries"];
    const navigate = useNavigate();
    
    const [isModalOpen, setModalOpen] = useState(false);

    function Contact() {
        navigate('/Contact');
    }


    async function FetchProducts() {
        const response = await fetch('http://localhost:3000/products/')
        const data = await response.json();
        setProducts(data);
    }
    useEffect(() => {
        const ProfilType = localStorage.getItem("type");
        if (ProfilType == "undefined") {
            navigate('/');
        }
        FetchProducts();
    }, []);

    function LogOut() {

        localStorage.setItem("type", "undefined");
        navigate('/');

    }
    function ProductsFor() {
        const breadsElements = [];
        const burekElements = [];
        const pastriesElements = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].category == "Breads") {
                breadsElements.push(
                    <ProductView name={products[i].name} price={products[i].price} setFullPrice={setFullPrice} currentPrice={fullPrice}></ProductView>
                )
            } else if (products[i].category == "Burek") {
                burekElements.push(
                    <ProductView name={products[i].name} price={products[i].price} setFullPrice={setFullPrice} currentPrice={fullPrice}></ProductView>
                )
            } else if (products[i].category == "Pastries") {
                pastriesElements.push(
                    <ProductView name={products[i].name} price={products[i].price} setFullPrice={setFullPrice} currentPrice={fullPrice}></ProductView>
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
                    <button onClick={() => setModalOpen(true)}><FaShoppingCart size={24} color="white" /></button>

                    <ModalPortal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        <div style={{display:"flex",flexDirection:"column", gap:"10px"}}>
                            <h3 >Full price is: {fullPrice}</h3>
                        <input className="style-input-product" placeholder="Enter Card information"></input>
                        <input className="style-input-product" placeholder="Enter Address"></input>
                        </div>
                
                    
                    </ModalPortal>
                    <button onClick={Contact}><FaPhoneAlt size={24} color="white" /></button>
                    <button onClick={LogOut}><MdLogout size={24} color="white" /></button>
                </div>
            </div>

            {ProductsFor()}

        </>


    )
} export default HomePage;