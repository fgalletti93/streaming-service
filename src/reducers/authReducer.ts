import { GoogleAuthActions } from "../actions/action";
import { GoogleAuthState } from "../actions/types";

const INITIAL_STATE: GoogleAuthState = {
  isSignedIn: null
}

export const authReducer = (state = INITIAL_STATE, action: GoogleAuthActions) => {
  switch (action.type) {
    case 'SIGN_IN' : {
      return  {...state, isSignedIn: true}
    }
    case 'SIGN_OUT' : {
      return  {...state, isSignedIn: false}
    }
    default:
      return state;
  }
}