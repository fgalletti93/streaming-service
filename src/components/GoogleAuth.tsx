import React, { ReactElement, useCallback, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import { GoogleAuthState } from "../reducers/types";

const GoogleAuth = ({ isSignedIn, signIn, signOut }): ReactElement => {
  let auth = useRef<any>()

  const onAuthChange = useCallback((isSignedIn: boolean): void => {
    if (isSignedIn) {
      signIn(auth.current.currentUser.get().getId())
    } else {
      signOut()
    }
  }, [signIn, signOut])

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
        scope: 'email',
        plugin_name: 'StreaMe'
      }).then(() => {
        auth.current = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.current.isSignedIn.get());
        return auth.current.isSignedIn.listen(onAuthChange)
      });
    });

  }, [onAuthChange])

  const onSignInClick = (): void => {
    auth.current.signIn()
  }

  const onSignOutClick = (): void => {
    auth.current.signOut()
  }

  const renderAuthButton = (): JSX.Element | null => {
    if (isSignedIn === null) {
      return null;
    }
    else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      )
    }
  }

  return (
    <div>{renderAuthButton()}</div>
  )
}

const mapStateToProps = (state): GoogleAuthState => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);