import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from './firebase-config';

const App = () => {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch (e) {
      console.log(e.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (e) {
      console.log(e.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
  }

  return (
    <div>
      <div>
        <h3>Register User</h3>
        <input type="text" placeholder={'Email'} onChange={(e) => setRegisterEmail(e.target.value)}/>
        <input type="password" placeholder={'Password'} onChange={(e) => setRegisterPassword(e.target.value)}/>

        <button onClick={register}>Create user</button>
      </div>

      <div>
        <h3>Register User</h3>
        <input type="text" placeholder={'Email'} onChange={(e) => setLoginEmail(e.target.value)}/>
        <input type="password" placeholder={'Password'} onChange={(e) => setLoginPassword(e.target.value)}/>

        <button onClick={login}>Login</button>
      </div>

      <h3>User Logged In: </h3>
      { user?.email }
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default App;
