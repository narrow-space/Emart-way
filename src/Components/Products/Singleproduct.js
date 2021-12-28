import currencyFormatter from "currency-formatter";
import React from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import './Singleproduct.css'
const Singleproduct = (props) => {
  const { image, id, price, title, discount, discountPrice,rating } = props.pd;

  return (
    <div className="col-md-3 mt-3">
      <Link className="text-decoration-none text-dark" to={`/product/${id}`}>
        <div className="card p-4">
          <img src={image} className="mt-0" height="250px" alt="..." />

          <div className="card-body">
            <small className="card-title mb-0">{title?.substring(0, 29)}</small><br />
             <small><Rating
                className=""
                style={{ color: "orange" }}
                quiet="false"
                readonly="false"
                initialRating={rating?.rate}
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiTwotoneStar />}
              />({rating?.rate})</small>
            <div className="d-flex justify-content-between">
          
           
            
         
        
              <p
                style={{ textDecoration: "line-through" }}
                className="card-text"
              >
                {currencyFormatter.format(price, { code: "USD" })}
              </p>
              <small className="me-4" style={{ color: "rgb(131, 130, 130)" }}>
                {discount}%
              </small>

              <p>{currencyFormatter.format(discountPrice, { code: "USD" })}</p>
            </div>
            {/* <Link to={`/product/${id}`} className='btn btn-outline-warning '>Buy Now</Link> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Singleproduct;
