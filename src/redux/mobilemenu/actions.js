import menuActionTypes from "./action-types";

export const menuOpen = (payload) => ({
   type: menuActionTypes.menuOpen,
   payload
});

export const menuClose = (payload) => ({
   type: menuActionTypes.menuClose,
   payload
});
