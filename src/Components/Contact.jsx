import './Contact.css'
import { FaHome } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function Contact(){


const navigate = useNavigate();
    function HomePage(){
        navigate('/HomePage');
    }











    return(  
         <>
         
         <div className='contact-main-div'>
       


        
        <div className="Contact-style">
        <h3>Pekara Trajko je osnovana 2000. godine.To je najstarija pekara u gradu i opremljena je vrhunskom opremom sa strucnim pekarima.
            U pekari Trajko se proizvodi najkvalitetnije pecivo na trzistu.
            
           
        </h3>
        <h3>Hvala Vam na poseti.</h3>
        <h3> Kontakt telefona: 0657665254</h3>
        <button onClick={HomePage}><FaHome size={24} color='white'/></button>
        </div>
        </div>
        
        
        </>
        );
     
    
}export default Contact;