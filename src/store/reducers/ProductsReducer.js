import data from './Data.json'
const initState = {
  products:data, 
    
  
  product: {},
};
const ProductsReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (pd) => pd.id === parseInt(action.productid)
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
