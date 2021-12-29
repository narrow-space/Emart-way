import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import "./Products.css";
import Singleproduct from "./Singleproduct";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { ImWoman, ImPushpin, ImMobile } from "react-icons/im";
import { IoMdGlasses } from "react-icons/io";
import { GiElectric } from "react-icons/gi";
const Products = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  console.log(products);
  // const [products, setProducts] = useState([])
  const [filter, setFilter] = useState(products.slice(6, 17));

  const componentMounted = true;


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);
  // useEffect(() => {
  //     setLoading(true);
  //     fetch('/Data.json')
  //         .then(res => res.json())
  //         .then(data => {
  //             if(componentMounted){
  //                 // setProducts(data)
  //                 setFilter(data)
  //                 setLoading(false)
  //                 console.log(filter);
  //                 console.log(data);
  //             }
  //             return()=>{
  //                 componentMounted=false
  //             }
  //         })
  // }, [])

  const filterProducts = (selectedproduct) => {
    const catagoryp = products.filter((pd) => pd.category === selectedproduct);
    setFilter(catagoryp);
  };

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const Allproducts = () => {
    return (
      <>
        <div class="container ">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2">
              <div onClick={() => setFilter(products)} className="category d-flex justify-content-evenly  ">
                <p >All Products</p>
                <div >
                  <MdProductionQuantityLimits />
                </div>
              </div>
              <div onClick={() => filterProducts("men's clothing")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p >
                    Men's Clothing
                  </p>
                </div>
                <div >
                  <GiClothes className="text-center" />
                </div>
              </div>

              <div onClick={() => filterProducts("mobile")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                 Mobile
                  </p>
                </div>
                <div className="text-center">
                  <ImMobile />
                </div>
              </div>
            </div>
            <div class="col-md-auto">
              <div onClick={() => filterProducts("women's clothing")} className="category d-flex justify-content-evenly ">
                <div>
                  <p


                  >
                    Womens Clothing
                  </p>
                </div>
                <div className="text-center">
                  <ImWoman />
                </div>
              </div>
              <div onClick={() => filterProducts("jewelery")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                    Jwelery Products
                  </p>
                </div>
                <div className="text-center">
                  <ImPushpin />
                </div>
              </div>

              <div onClick={() => filterProducts("trimmer")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                   Hair trimmer
                  </p>
                </div>
                <div className="text-center">
                  <GiElectric />
                </div>
              </div>

            </div>
            <div class="col col-lg-2">
              <div onClick={() => filterProducts("electronics")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                    Electronics
                  </p>
                </div>
                <div className="text-center">
                  <ImMobile />
                </div>
              </div>
              <div onClick={() => filterProducts("sunglasses")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                    Eye Ware
                  </p>
                </div>
                <div className="text-center">
                  <IoMdGlasses />
                </div>
              </div>
              
            </div>
            
          </div>
        </div>

        {/* <div className="container">
          <div className="row ">
            <div className="col-md-4 category">
              
               




            <div class="col col-lg-2">
              <div onClick={() => filterProducts("mobile")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                 Mobile
                  </p>
                </div>
                <div className="text-center">
                  <ImMobile />
                </div>
              </div>
              <div onClick={() => filterProducts("trimmer")} className="category d-flex justify-content-evenly align-item-center">
                <div>
                  <p className="me-3">
                   Hair trimmer
                  </p>
                </div>
                <div className="text-center">
                  <GiElectric />
                </div>
              </div>
              
            </div>







            </div>
            <div className="col-md-4 category">
              {" "}
            
             
            </div>
            <div className="col-md-4 category">
           
            </div>
            
          </div>
        </div> */}

        {filter.map((pd) => {
          return <Singleproduct key={pd.id} pd={pd}></Singleproduct>;
        })}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">
            Find Your Products
          </h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <Allproducts />}
      </div>
    </div>
  );
};

export default Products;
