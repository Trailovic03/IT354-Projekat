import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import React from "react";
function SignUp() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    function checkPassword() {
        if (newPassword.length < 8) {
            setError(true);
        } else {
            setError(false);
        }

    }
    function checkEmail() {
        if (newEmail.includes('@')) {
            setError(false);
        } else {
            setError(true);
        }
    }

    function changeName(event) {
        setName(event.target.value);
    }
    function changeSurname(event) {
        setSurname(event.target.value);
    }
    function changeNewEmail(event) {
        setNewEmail(event.target.value);
    }
    function changeNewPassword(event) {
        setNewPassword(event.target.value);
    }

    async function addUser() {
        checkEmail();
        checkPassword();
        if (!error) {


            const response = await fetch('http://localhost:3000/users/', {
                method: "POST",
                headers: {
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify({ name, surname, email: newEmail, password: newPassword })
            }
            )
            setName('');
            setSurname('');
            setNewEmail('');
            setNewPassword('');

        } else {
            alert("Wrong Email or Password!");
        }
    }
    function navigateLogin() {
        navigate('/');
    }



    return (
        <>
            <div className="Main-div">
                <div className="Picture">
                </div>
                <div className="style-div">
                    <h1 style={{ color: 'white' }}>Sign Up</h1>
                    <input type="text" onChange={changeName} value={name} placeholder="Name" className="style-input"></input>
                    <input type="text" onChange={changeSurname} value={surname} placeholder="Surname" className="style-input"></input>
                    <input type="text" onChange={changeNewEmail} value={newEmail} placeholder="Email" className="style-input"></input>
                    <input type="password" onChange={changeNewPassword} value={newPassword} placeholder="Password" className="style-input"></input>
                    <div className="style-button">
                        <button onClick={addUser}>Submit</button>
                        <button onClick={navigateLogin}>Login</button>
                    </div>
                </div>


            </div>
        </>
    )
} export default SignUp;