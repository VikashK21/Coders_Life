import React, { useRef, useState } from 'react';
import "../App.css"
import { useAuth } from "../Contexts/AuthContext"

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match!!')
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value,
                passwordRef.current.value)
        } catch (err) {
            setError('Failed to create an account!!')

        }

        setLoading(false);
    }

    return (
        <>
            <div>
                <form  style={{ margin: "0px 300px 0px 300px" }}>
                    <div className='App-header'>
                        <div>
                            <label for="email">Email</label> <br />
                            <input type='email' name="email" id='email' required
                                ref={emailRef}
                                placeholder='Enter your email' />

                        </div>
                        <div>
                            <label for="password">Password</label> <br />
                            <input type="password" name="password" id='password'
                                ref={passwordRef}
                                required placeholder='Enter your password' />

                        </div>
                        <div>
                            <label for="cPassword">Confirm Password</label> <br />
                            <input type="password" name="confirmingPass" id='cPassword'
                                ref={passwordConfirmRef}
                                required placeholder='Confirm your password' />

                        </div>
                        <button type="submit">Sign Up</button>
                        <div className='App'>
                            Already have an account? Log In
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;