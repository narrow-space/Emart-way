
import './App.css';

import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Productdetails from './Components/ProductsDetails/Productdetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Contexts/Authprovider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router >
   
        <Nav></Nav>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
           

          <PrivateRoute   path="/product/:productid">
            <Productdetails></Productdetails>
          </PrivateRoute>


          <PrivateRoute  path='/cart'>
         
            <Cart></Cart>
          
          </PrivateRoute>

          <Route exact  path='/login'>
            <Login></Login>
          </Route>
          <Route exact  path='/register'>
            <Register></Register>
          </Route>
        </Switch>
       
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
