import mobileCartActionTypes from "./action-types";

export const mobileCartOpen = (payload) => ({
   type: mobileCartActionTypes.mobileCartOpen,
   payload
});

export const mobileCartClose = (payload) => ({
   type: mobileCartActionTypes.mobileCartClose,
   payload
});
