import blurActionTypes from "./action-types";

const initialState = false

const blurReducer = (state = initialState, action) => {
   switch (action.type) {
      case (blurActionTypes.addBlur):

         return true;

      case (blurActionTypes.removeBlur):

         return false;

      default:
         return state;
   }

};

export default blurReducer;
