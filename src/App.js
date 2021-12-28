
import './App.css';

import Nav from './Components/Nav/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';
import Productdetails from './Components/ProductsDetails/Productdetails';



function App() {
  return (
    <div className="App">
      <Router >
   
        <Nav></Nav>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* <Route  path="/products">
            <Products></Products>
          </Route> */}
            

          <Route exact  path="/product/:productid">
            <Productdetails></Productdetails>
          </Route>


          <Route exact  path='/cart'>
            <Cart></Cart>
          </Route>
        </Switch>
       
      </Router>

    </div>
  );
}

export default App;
