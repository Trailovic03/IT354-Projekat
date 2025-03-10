import { useEffect, useState } from "react";
import ProductView from "./ProductView";

function HomePage() {
    const [products, setProducts] = useState([]);
    const categories = ["Breads", "Burek", "Pastries"];





    async function FetchProducts() {
        const response = await fetch('http://localhost:3000/products/')
        const data = await response.json();
        setProducts(data);
    }
    useEffect(() => {
        FetchProducts();
    }, []);


    function ProductsFor() {
        const breadsElements = [];
        const burekElements= [];
        const pastriesElements= [];
        for (let i = 0; i < products.length; i++) {
            if(products[i].category=="Breads"){
                breadsElements.push(
                    <ProductView name={products[i].name} price={products[i].price} ></ProductView>
                )
            }else if(products[i].category=="Burek"){
                burekElements.push(
                    <ProductView name={products[i].name } price={products[i].price} ></ProductView>
                )
            }else if(products[i].category=="Pastries"){
                pastriesElements.push(
                    <ProductView name={products[i].name} price={products[i].price}></ProductView>
                )
            }

        }
        return <div style={{backgroundColor:"rgba(38, 36, 36, 0.8)"}}>
            <h2 style={{color:"white" , marginLeft:"15px"}}>Breads</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{breadsElements}</div>
            <h2 style={{color:"white", marginLeft:"15px" ,borderTop:"5px solid white"}}>Burek</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{burekElements}</div>
            <h2 style={{color:"white", marginLeft:"15px" ,borderTop:"5px solid white"}}>Pastries</h2>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>{pastriesElements}</div>
            </div>;

    }



    return (
        <>

            {ProductsFor()}

        </>


    )
} export default HomePage;