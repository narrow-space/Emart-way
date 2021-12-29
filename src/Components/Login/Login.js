import React from 'react';
import './Login.css'
import vector from '../../Images/Data_security_01.jpg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Ring } from "react-awesome-spinners";



const Login = () => {
  const [loginData,setLoginData]=useState({})
  const {loginUser,isLoading}=UseAuth()
  const history =useHistory()
  const location =useLocation()
  const handleonChange=(e)=>{
  const field = e.target.name
  const value = e.target.value
  const newLoginData={...loginData}
  newLoginData[field]=value
  setLoginData(newLoginData)
  console.log(field,value);
  }
  const handlelogin=(e)=>{
    e.preventDefault()
    loginUser(loginData.email,loginData.password)
    const uri =location.state?.from ||'/home'
    history.push(uri)
  }
    return (
        <div className='container'>
         <div className="row mt-4">
             <div className="col-md-6">
              <div className="logo">
                  <img height="400px" width="500px"  src={vector} alt="" />
              </div>
             </div>
             <div className="col-md-6">
             <div class="center">
           {
             isLoading?<div className='ring'>
               <Ring/>
             </div>:
             <>
             <h1>Login</h1>
      <form onSubmit={handlelogin}>
        <div class="txt_field">
          <input onChange={handleonChange} name='email' type="Email" required/>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input name='password' onChange={handleonChange} type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        
        <input  type="submit" value="Login"/>
        <div class="signup_link">
          Not a member? <Link className='text-decoration-none' to="/register">Signup</Link>
        </div>
      </form>
             </>
           }
    </div>
             </div>
         </div>
        </div>
    );
};

export default Login;