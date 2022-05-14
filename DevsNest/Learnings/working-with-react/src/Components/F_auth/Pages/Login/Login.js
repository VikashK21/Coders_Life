import React, { useRef, useState } from 'react';
import { Link, useHistory} from 'react-router-dom';
import '../../../../App.css'

function Login() {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(nameRef.current.value)
        // history.push('/')
    }

    return (
        <>
            <form className='flex' onSubmit={handleSubmit} method="POST">
                <div className='flex-child'>
                    <h1>Log In</h1>
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
                    <button type="submit" className='btn btn-dsn'>Log In</button>
                </div>
            </form>
        </>

    )
}

export default Login;