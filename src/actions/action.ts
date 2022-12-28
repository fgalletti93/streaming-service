export enum GoogleAuthActionsTypes {
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
}

type SignIn = {
  type: GoogleAuthActionsTypes.SIGN_IN;
  payload: number;
};

type SignOut = {
  type: GoogleAuthActionsTypes.SIGN_OUT;
};

export type GoogleAuthActions = SignIn | SignOut;
