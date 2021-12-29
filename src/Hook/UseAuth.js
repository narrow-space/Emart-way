import { useContext } from "react";
import { AuthContext } from "../Components/Contexts/Authprovider/AuthProvider";

const UseAuth=()=>{
 const Auth=useContext(AuthContext)
 return Auth;
}
export default UseAuth;