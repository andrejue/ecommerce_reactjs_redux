import { combineReducers } from "redux";
import cartReducer from "./cart/reducer";
import blurReducer from "./blur/reducer";
import menuReducer from "./mobilemenu/reducer";

const rootReducer = combineReducers({cartReducer, blurReducer, menuReducer});

export default rootReducer;
