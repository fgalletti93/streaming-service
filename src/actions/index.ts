import { GoogleAuthActionsTypes } from "./action";

export const signIn = (userId) => {
  return {
    type: GoogleAuthActionsTypes.SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: GoogleAuthActionsTypes.SIGN_OUT,
  };
};