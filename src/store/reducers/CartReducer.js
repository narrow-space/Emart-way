const initialstate = {
    products:[],

    totalPrice: 0,
    totalqty: 0,
};

const CartReducer = (state = initialstate, action) => {
    let findpd;
    let index;
    switch (action.type) {
        case "ADD_TO_CART":
            const { product, quantity } = action.payload;
            ///Check if product is already exists//
            const check = state?.products?.find((pd) => pd.id === product.id);
            if (check) {
                return state;
                
            } 
            
            else {
                const TotalPrice = state.totalPrice + product.discountPrice * quantity;
                const TotalQuantity = state.totalqty + quantity;
                product.quantity = quantity;
               
                return {
                    ...state,
                    products: [...state.products, product],
                    
                    totalPrice: TotalPrice,
                    totalqty: TotalQuantity,
                  
                }
              
                
                
               
            }
           
           
        case 'INC':
            findpd = state.products.find(pd => pd.id === action.payload)
            index = state.products.findIndex(pd => pd.id === action.payload)
            findpd.quantity += 1;
            state.products[index] = findpd;
            return {
                ...state,
                totalPrice: state.totalPrice + findpd.discountPrice,
                totalqty: state.totalqty + 1
            }
        case 'DEC':
            findpd = state.products.find(pd => pd.id === action.payload)
            index = state.products.findIndex(pd => pd.id === action.payload)
            if(findpd.quantity>1){
                findpd.quantity -= 1
                state.products[index] = findpd;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findpd.discountPrice,
                    totalqty: state.totalqty - 1
                }
            }
            else{
                   return state
            }
            case 'REMOVE':
                findpd = state.products.find(pd => pd.id === action.payload);
                const filterpd =state.products.filter(pd=>pd.id!==action.payload)
                return{
                    ...state,
                    products:filterpd,
                    totalPrice:state.totalPrice - findpd.discountPrice *findpd.quantity,
                    totalqty:state.totalqty-findpd.quantity

                };
               
    
        default:
            return state;
    }

    
             
}; 

export default CartReducer;
