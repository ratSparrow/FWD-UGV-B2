

import { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {
            email:email,
            password:password
        }
        console.log(userData)
        console.log(JSON.stringify(userData))

        fetch("",{
            method:"POST",
            headers:{

            },
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {

        setPassword(event.target.value)
    }
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="form-title">Login</h2>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        onChange={(event) => handleEmail(event)}
                        name='username'
                        type="text"
                        id="username"
                        className="form-input"
                        placeholder="Enter your username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        onChange={(event) => handlePassword(event)}
                        name='password'
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter your password" />
                </div>

                <input type="submit" className="form-button" />
                <p className="form-footer">Dont have an account? <a href="#signup" className="form-link">Sign up</a></p>
            </form>
        </div>
    );
};

export default LoginForm;
