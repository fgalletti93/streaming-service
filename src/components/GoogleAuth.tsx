import React, { ReactElement, useEffect, useState } from "react";


const GoogleAuth = (): ReactElement => {
  const [isSignedIn, setIsSignedIn] = useState<Boolean | null>(null)

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '12476738473-82msdfl0gc924jbrur41qkkqudtmc6ia.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'StreaMe'
      }).then(() => {
        const auth = window.gapi.auth2.getAuthInstance();
        setIsSignedIn(auth.isSignedIn.get());
      });
    });

  }, [])

  const renderAuthButton = () => {
    if(isSignedIn === null) {
      return <div>I don't think you're signed in</div>
    } else if (isSignedIn) {
      return <div>Already signed in</div>
    } else {
      return <div>Not signed in</div>
    }
  }

  return (
    <div>{renderAuthButton()}</div>
  )
}

export default GoogleAuth;