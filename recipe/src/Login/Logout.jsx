import React from 'react'
import "./Logout.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from './Action';

const Logout = () => {


  const dispatch = useDispatch();
const user = useSelector((state) => state.user.user);
const router=useNavigate();

  const logout = () => {
    dispatch(logout());
    router("/login") 
  };
  return (
    <div className='logout'>

      
      <h1>Welcome <span className='user__name'>{user}</span></h1>
       <button type='submit' className='logout__button' onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
