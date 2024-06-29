import React, { useState } from 'react'
import "./Login.css";

import { login, logout } from "../Login/Action";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const router = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      try {
        if (name && email && password) {
          // toast.success("Registration Successfull. Go for Login")
          // console.log(user, "user")
          const response = {
            data: {
              success: true,
              message: "LOGIN Successfull.",
              userData: { name: "Mehfooz" },
            },
          };
  
          if (response.data.success) {
  
            dispatch(login({ user: response.data.userData.name }));
            // console.log(user, "user2")
            setName("");
            setEmail("");
            setPassword("");
  
            router("/logout");
          }
        } else {
          alert("All fields are mandatory");
        }
      } catch (error) {}
    };

    //   dispatch(login({
    //     email:email,
    //     password:password,
      
    //   })
    // );
    // setEmail("");
    // setPassword("");

    // router("/logout")

    // };

  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input type='name'
          placeholder='Input Name'
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type='email' 
          placeholder='Input Email' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type='password' 
          placeholder='Input Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='submit__btn'>
        Login
        </button>
      </form>
    </div>
  )
}

export default LoginPage;
