import "./Productdetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
const Productdetails = () => {
  const { productid } = useParams();
  const [quantity, setQuantity] = useState(1);
  // const [products, setProducts] = useState([])
  // const [product, setProduct] = useState({})
  
  const { product } = useSelector((state) => state.ProductsReducer);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 2000);
  }, []);
  

  console.log(product);
  const decriment = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "PRODUCT", productid });
  }, [productid]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6 my-5">
          <Skeleton className="" height={400} />
        </div>
        <div className="col-md-6 my-5" style={{ lineHeight: 2 }}>
          <Skeleton width={300} height={50} />
          <Skeleton height={75} />
          <Skeleton width={150} height={25} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <div className="d-flex">
            <Skeleton width={100} height={50} />
            <Skeleton style={{ marginLeft: 6 }} width={100} height={50} />
          </div>
        </div>
      </>
    );
  };

  const Allproducts = () => {
    return (
      <>
        <div className="col-md-6 my-5">
          <img
          className=""
            height="400px"
            width="400px"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className="col-md-6 my-5">
          <h4 className="text-uppercase text-dark-50 ">{product?.category}</h4>
          <h1 className="display-7">{product?.title}</h1>
          <p className="lead">
            Rating:{product?.rating?.rate}
            {product?.rating && (
              <Rating
                className="fs-3"
                style={{ color: "orange" }}
                quiet="false"
                readonly="false"
                initialRating={product?.rating?.rate}
                emptySymbol={<AiOutlineStar />}
                fullSymbol={<AiTwotoneStar />}
              />
            )}
          </p>
          <div>
            <span>Price:</span>
            <span className="text-decoration-line-through">
              {currencyFormatter.format(product?.price, { code: "USD" })}
            </span>
          </div>
          <h3 className="display-6 fw-bold">
            {currencyFormatter.format(product?.discountPrice, { code: "USD" })}
          </h3>
          <p className="lead">{product?.description?.substring(0, 120)}</p>
          <div className="dec_in_quantity">
            <span onClick={decriment} className="dec">
              <BsDash />
            </span>
            <span className="quantity">{quantity}</span>
            <span onClick={() => setQuantity(quantity + 1)} className="inc">
              <BsPlus />
            </span>
          </div>
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: { product, quantity } })
            }
            className="btn1 me-2"
          >
            Add to Cart
          </button>
          <Link to="/cart">
            <button className=" btn2 me-2">Check Your Cart</button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <Allproducts />}</div>
    </div>
  );
};

export default Productdetails;
