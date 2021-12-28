import ProductsReducer from "./reducers/ProductsReducer";
import CartReducer from "./reducers/CartReducer"
import { createStore,combineReducers} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-key',
    storage
}



const root=combineReducers({
    ProductsReducer,
    CartReducer
})
const persistedReducer=persistReducer(persistConfig,root)

const store = createStore(persistedReducer,devToolsEnhancer())

const persistor =persistStore(store)
export default store;
export {persistor}