import React, { useRef, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import '../../../../App.css';
import { useAuth } from '../../context/AuthContext';

function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(nameRef.current.value)
        signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
        // history.push('/')
    }

    return (
        <>
            <form className='flex' onSubmit={handleSubmit} method="POST">
                <div className='flex-child'>
                    <h1 className='App'>Sign Up</h1>
                    <label >Your Name <br />
                        <input
                            className='btn'
                            type="text"
                            name="name"
                            ref={nameRef}
                            placeholder='Enter your name'
                            required />

                    </label>
                    <label>Your Email <br />
                        <input
                            className='btn'
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder='Enter your email'
                            required />

                    </label>
                    <label>Your Password
                        <br />
                        <input
                            className='btn'
                            type="password"
                            name="password"
                            ref={passwordRef}
                            placeholder='Create a strong Password'
                            required />

                    </label>
                    <button type="submit" className='btn btn-dsn'>Sign Up</button>
                </div>
            </form>
        </>

    )
}

export default Signup;