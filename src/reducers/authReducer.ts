import { GoogleAuthActions, GoogleAuthActionsTypes } from "../actions/action";
import { GoogleAuthState } from "./types";

const INITIAL_STATE: GoogleAuthState = {
  isSignedIn: null,
  userId: null
}

export const authReducer = (state = INITIAL_STATE, action: GoogleAuthActions) => {
  switch (action.type) {
    case GoogleAuthActionsTypes.SIGN_IN : {
      return  {...state, isSignedIn: true, userId: action.payload }
    }
    case GoogleAuthActionsTypes.SIGN_OUT : {
      return  {...state, isSignedIn: false, userId: null}
    }
    default:
      return state;
  }
}