import cartActionTypes from "./action-types";

export const addProductToCart = (payload) => ({
   type: cartActionTypes.addProduct,
   payload
});

export const removeProductFromCart = (payload) => ({
   type: cartActionTypes.removeProduct,
   payload
});

export const increaseProduct = (payload) => ({
   type: cartActionTypes.increaseProduct,
   payload
});

export const decreaseProduct = (payload) => ({
   type: cartActionTypes.decreaseProduct,
   payload
});
