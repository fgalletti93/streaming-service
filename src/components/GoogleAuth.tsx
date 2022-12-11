import React, { ReactElement, useEffect, useRef, useState } from "react";


const GoogleAuth = (): ReactElement => {
  const [isSignedIn, setIsSignedIn] = useState<Boolean | null>(null)
  let auth = useRef<any>()

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '12476738473-82msdfl0gc924jbrur41qkkqudtmc6ia.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'StreaMe'
      }).then(() => {
        auth.current = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(auth.current.isSignedIn.get());
        return auth.current.isSignedIn.listen(onAuthChange)  //not sure why I needed this return 
      });
    });

  }, [])

  const onAuthChange = (): void => {
    setIsSignedIn(prevState => !prevState)
  }

  const onSignInClick = (): void => {
    auth.current.signIn()
  }

  const onSignOutClick = (): void => {
    auth.current.signOut()
  }


  const renderAuthButton = (): JSX.Element | null => {
    if(isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon"/>
          Sign In with Google
        </button>
      )
    }
  }

  return (
    <div>{renderAuthButton()}</div>
  )
}

export default GoogleAuth;