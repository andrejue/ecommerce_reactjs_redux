import menuActionTypes from "./action-types";

const initialState = false

const menuReducer = (state = initialState, action) => {
   switch (action.type) {
      case (menuActionTypes.menuOpen):

         return true;

      case (menuActionTypes.menuClose):

         return false;

      default:

         return state;
   }

};

export default menuReducer;
