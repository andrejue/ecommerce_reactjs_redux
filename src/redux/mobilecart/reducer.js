import mobileCartActionTypes from "./action-types";

const initialState = false

const mobileCartReducer = (state = initialState, action) => {
   switch (action.type) {
      case (mobileCartActionTypes.mobileCartOpen):

         return true;

      case (mobileCartActionTypes.mobileCartClose):

         return false;

      default:

         return state;
   }

};

export default mobileCartReducer;
