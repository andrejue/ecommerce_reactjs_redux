import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import blurReducer from "./blur/reducer";
import menuReducer from "./mobilemenu/reducer";
import mobileCartReducer from "./mobilecart/reducer";

const rootReducer = combineReducers({cartReducer, blurReducer, menuReducer, mobileCartReducer});

export default rootReducer;
