import React, { useState } from 'react'
import './App.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "./firebase-config"

function App() {
  const [signuEmail, setSignupEmail] = useState("");
  const [signuPass, setSignupPass] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const signup = async (event) => {
    event.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signuEmail,
        signuPass
      );
      console.log(user);
      alert('You are successfully Signed Up.')
    } catch (err) {
      alert(err.mesage)
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPass
      )
      console.log(user);
      alert('You are successfully Logged In.')
    } catch (err) {
      alert(err.mesage)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
      user? alert('You are logged out now.'): alert('Log In first!!')
    } catch (err) {
      alert(err.mesage)
      
    }
  }

  return (
    <>
      <div className='App'>
        <h1>Sign UP</h1>
        <form onSubmit={signup}>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            autoComplete='off'
            required
            onChange={(event) => {
              setSignupEmail(event.target.value)
            }} /> <br /> <br />

          <input
            type="password"
            name="password"
            placeholder='Enter your password'
            required
            onChange={(event) => {
              setSignupPass(event.target.value)
            }} /> <br />

          <button
            type="submit">Sign Up
          </button>
        </form>

        <h1>Log In</h1>

        <form onSubmit={login}>
          <input
            type="email"
            name="email"
            placeholder='Enter your email'
            autoComplete='off'
            required
            onChange={(event) => {
              setLoginEmail(event.target.value)
            }} /> <br /> <br />

          <input
            type="password"
            name="password"
            placeholder='Enter your password'
            required
            onChange={(event) => {
              setLoginPass(event.target.value)
            }} /> <br />

          <button
            type="submit">Log In</button>

        </form> <br />

        <h3>User Logged In</h3>
        {user?.email} <br />
        <br /> <button onClick={logout} >Sign Out</button>
      </div>
    </>
  );
}

export default App;