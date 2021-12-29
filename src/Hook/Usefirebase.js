import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import swal from 'sweetalert';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

initializeAuthentication();
const Usefirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [isLoading,setIsLoading]=useState(true)
  
  ///User Observer///
  useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
         setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return ()=> unsubscribe;
  },[])


  ///user Login///
  const loginUser=(email,password)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
       if(res.user.accessToken){
        swal("Good job!", "Successfully Log In", "success");
      }
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if(errorCode=="auth/wrong-password"){
        return swal("Worng!", "Password Wrong", "warning");
      }
      if(errorCode=="auth/user-not-found"){
        return swal("Worng!", "Invalid Email & password", "warning");
      }
     
    })
    .finally(()=>setIsLoading(false))
  }

  //   user Register//
  const registerUser = (email, password,name,history,location) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const uri =location.state?.from ||'/home'
        if(res.user.accessToken){
          swal("Good job!", "Successfully Registered", "success");
          history.push(uri)
            }
          const newuser={email,displayName:name}
          setUser(newuser)
          
         
          //// send name to firebase After creaction//
          updateProfile(auth.currentUser, {
            displayName: name,
          })
         })

         .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode=="auth/weak-password" ){
            return swal("Worng!", "password Should be 6 character", "warning");
          }
           if(errorCode=="auth/email-already-in-use"){
              return swal("Worng!", "Email Already Used", "warning")
           }

          })
          .finally(()=>setIsLoading(false))
  };
  ///user Logout
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
       
      })
      .finally(()=>setIsLoading(false))
  };
  return {
    user,
    isLoading,
    registerUser,
    logOut,
    loginUser,
  };
};

export default Usefirebase;
