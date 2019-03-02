if(process.env.NODE_ENV !== 'production') {
  console.log('====== Developnment mode ======')
}

//Dependencies
import React from 'react';
import { render } from "react-dom";

import App from "./App";

//Render method
render(
  <App/>, document.getElementById('app')
);