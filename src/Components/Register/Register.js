import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';
import vector from '../../Images/isometric-e-commerce-elements-background_52683-535.jpg'
import { Ring } from "react-awesome-spinners";
import swal from 'sweetalert';

import './Register.css'
const Register = () => {

  const [loginData,setLoginData]=useState({})
  const {registerUser,isLoading,user}=UseAuth()
  const history=useHistory()
  const location =useLocation()
  const handleonChange=(e)=>{
  const field = e.target.name
  const value = e.target.value
  const newLoginData={...loginData}
  newLoginData[field]=value
  setLoginData(newLoginData)
  console.log(newLoginData);
  }
  const handleRegister=(e)=>{
    e.preventDefault()
   if(loginData.password!== loginData.password2){
     return swal("Password didnt match!");

   }
   
   registerUser(loginData.email,loginData.password,loginData.name,history,location);
  //  const uri =location.state?.from ||'/home'
  //  history.push(uri)
  }
    return (
        <div>
             <div className='container'>
         <div className="row mt-4">
             <div className="col-md-6">
              <div className="logo">
                  <img className='img-fluid' src={vector} alt="" />
              </div>
             </div>
             <div className="col-md-6">
             <div class="center">
      {
        isLoading?<div className='ring'>
          <Ring />

        </div>:<>
        
        <h1>Registration</h1>
      <form onSubmit={handleRegister}>
        <div class="txt_field">
          <input name='name' onBlur={handleonChange} type="text" required/>
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input name='email' onBlur={handleonChange} type="email" required/>
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input name='password' onChange={handleonChange} type="password" required/>
          <span></span>
          <label>Password</label>
        </div>
        <div class="txt_field">
          <input name='password2' onChange={handleonChange} type="password" required/>
          <span></span>
          <label>Confirm Password</label>
        </div>
       
        <input  type="submit" value="Register"/>
        <div class="signup_link">
          Already a have an account? <Link className='text-decoration-none' to="/login">Login</Link>
        </div>
      </form>
        </>
      }

      
    </div>
             </div>
         </div>
        </div>
        </div>
    );
};

export default Register;