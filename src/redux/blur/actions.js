import blurActionTypes from "./action-types";

export const addBlur = (payload) => ({
   type: blurActionTypes.addBlur,
   payload
});

export const removeBlur = (payload) => ({
   type: blurActionTypes.removeBlur,
   payload
});
