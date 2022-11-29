import React, { ReactElement } from "react";
import { BrowserRouter, Route } from 'react-router-dom'
import StreamCreate from "./StreamCreate";
import StreamDelete from "./StreamDelete";
import StreamEdit from "./StreamEdit";
import StreamList from "./StreamList";
import StreamShow from "./StreamShow";


const App = (): ReactElement => {
  return (

    <BrowserRouter>
      <Route path={'/'} exact component={StreamList}/>
      <Route path={'/streams/new'} exact component={StreamCreate}/>
      <Route path={'/streams/edit'} exact component={StreamEdit}/>
      <Route path={'/streams/delete'} exact component={StreamDelete}/>
      <Route path={'/streams/show'} exact component={StreamShow}/>
    </BrowserRouter>


  )


}

export default App