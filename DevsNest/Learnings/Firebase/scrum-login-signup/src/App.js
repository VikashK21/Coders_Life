import './App.css';
import React, { useRef } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase-config"

function App() {
  const signupEmail = useRef("")
  const signupPass = useRef("")
  const loginEmail = useRef("")
  const loginPass = useRef("")

  const signup = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(signupEmail.current.value);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        signupEmail.current.value,
        signupPass.current.value
      )
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    
  }


  return (
    <div className="App">
      <div>
        <form onSubmit={signup}>
          <h1>Signup</h1>
          <b>Email</b> <br />
          <input
            type="email"
            name="email"
            ref={signupEmail}
            required
          /> <br />

          <strong>Password</strong> <br />
          <input
            type="password"
            name="password"
            ref={signupPass}
            required
          /> <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div>
        <form >
          <h1>Login</h1>
          <strong>Email</strong> <br />
          <input
            type="email"
            name="email"
            ref={loginEmail}
            required
          /> <br />

          <strong>Password</strong> <br />
          <input
            type="password"
            name="password"
            ref={loginPass}
            required
          /> <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export {App};


