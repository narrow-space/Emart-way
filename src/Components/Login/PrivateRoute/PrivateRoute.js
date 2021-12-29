import React from 'react';

import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../Hook/UseAuth';
import { Ring } from "react-awesome-spinners";


const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading} = UseAuth()
    if(isLoading){
        return <div className='ring'>
            <Ring/>
        </div>
    }
    
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};

export default PrivateRoute;