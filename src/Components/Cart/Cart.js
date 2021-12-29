import currencyFormatter from "currency-formatter";
import React from "react";
import { AiFillDelete,AiFillShopping } from "react-icons/ai";
import { BsDash, BsPlus } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { products,totalqty,totalPrice } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch()
  console.log(products);
  return (
    <div className="cart">
      <div className="container">
      

        {products.length > 0 ? (
          <>
            <div className="row mt-5">
            
             <div className="col-md-9 ">
                <div className="cart_heading">
                  <div className="row">
                    <div className="col-md-2">Picture</div>
                    <div className="col-md-2">Name</div>
                    <div className="col-md-2">Price</div>
                    <div className="col-md-2">inc/dec</div>
                    <div className="col-md-2">Total price</div>
                    <div className="col-md-2">Remove</div>
                  </div>
                </div>
                {products.map((pd) => (
                  <div key={pd.id} className="row align-items-center mt-4">
                    <div className="col-md-2 ">
                      <div className="cart_image d-flex justify-content-center align-items-center item-padding">
                        <img
                          className=""
                          height="100px"
                          width="100px"
                          src={pd.image}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <div className="cart_name item-padding">{pd.title.substring(0, 20)}</div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center item-padding">
                    {currencyFormatter.format(pd.discountPrice, { code: "USD" })}
                      
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                      <div className="cart_inc_dec item-padding">
                        <div className="dec_in_quantity">
                          <span onClick={()=> dispatch({type:"DEC",payload:pd.id})}  className="dec">
                            <BsDash />
                          </span>
                          <span className="quantity">{pd.quantity}</span>
                          <span onClick={()=> dispatch({type:"INC",payload:pd.id})} className="inc">
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <div className="cart_total text-center item-padding">
                        {currencyFormatter.format(pd.discountPrice*pd.quantity, { code: "USD" })}
                            
                        </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-center align-items-center">
                        <div className="car_remove item-padding">
                         <span style={{color:"#D2621E"}} className="fs-3" onClick={()=> dispatch({type:"REMOVE",payload:pd.id})} > <AiFillDelete className="delet-bask"/></span>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
             
              <div className="col-md-3 ">
              <div className="summery">
              <div className="summer_heading ">
              summary
              </div>
              <div className="summery_details ">
                <div className="row">
                  
                  
                  <div className="col-md-6">
                    Total-Items:
                  </div>
                  <div className="col-md-6">
                    {totalqty}
                  </div>
                 
                  
                  <div className="row my-3">
                  
                   <div className="col-md-6">
                    TotalPrice:
                    </div>
                    <div className="col-md-6 ">
                    {currencyFormatter.format(totalPrice,{ code: "USD" })}
                    </div>
                   
                  </div>
                 <div className="btncheck">
                 <button className="checkout-btn">Checkout</button>
                 </div>
                </div>
              </div>
              </div>
                  
                
              
              </div>
            </div>
          </>
        ) : (
          <div className="empty_cart">
            
            <h1>Your Cart is Empty</h1>
            <div className="Continue_shopping">

           <Link className="text-decoration-none" to="/home"><span>Continue Shopping < AiFillShopping/></span></Link>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
