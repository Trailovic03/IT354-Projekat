import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminPanel(){
    const navigate = useNavigate();
    
    useEffect(()=>{
    const profilType = localStorage.getItem("type");
    if(profilType == "user"){
        navigate('/HomePage');
    }else if(profilType == "undefined"){
        navigate('/');
    }
    },[])






    return(
    <>
    
    <h1>Admin Panel</h1>
    
    
    
    
    
    
    
    </>
    );
}export default AdminPanel;