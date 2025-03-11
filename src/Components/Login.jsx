import { useEffect, useState } from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    useEffect(()=>{
        localStorage.setItem("type","undefined");
    },[])
    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }

    function checkPassword() {
        if (password.length < 8) {
            setError(true);
        } else {
            setError(false);
        }

    }
    function checkEmail() {
        if (email.includes('@')) {
            setError(false);
        } else {
            setError(true);
        }
    }


    async function LoginUser() {
        checkEmail();
        checkPassword();
        if (!error) {
            const response = await fetch('http://localhost:3000/users?email=' + email + '&password=' + password);
            const data = await response.json();
            console.log(data);

            setEmail('');
            setPassword('');
            if (data.length > 0 && data[0].type == "user") {
                localStorage.setItem("type","user")
                navigate('/HomePage');
            }else   if (data.length > 0 && data[0].type == "admin") {
                localStorage.setItem("type","admin")
                navigate('/AdminPanel');
            }

        } else {
            alert("Wrong Email or Password!");
        }
    }



    function signUp() {
        navigate('/SignUp');
    }


    return (
        <>
            <div className="Main-div">


                <div className="Picture">





                </div>
                <div className="style-div">
                    <h1 style={{color:'white'}}>Login</h1>

                    <input type="email" placeholder="Email" onChange={changeEmail} value={email} className="style-input"></input>
                    <input type="password" placeholder="Password" onChange={changePassword} value={password} className="style-input"></input>
                    <div className="style-button">
                        <button onClick={LoginUser}>Submit</button>
                        <button onClick={signUp}> Sign Up</button>
                    </div>

                </div>


            </div>
        </>

    )
} export default Login;
