import React from 'react';
import {BrowserRouter} from "react-router-dom";

import LoginForm from './Containers/LoginForm/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainRoute from './Routes/MainRoutes'

function App() {
  return ( 
    <BrowserRouter>
      {/* <LoginForm/> */}
      <MainRoute/>
    </BrowserRouter>
  );
}

export default App;
