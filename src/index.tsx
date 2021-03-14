import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'

import configureStore from "./redux/store";

import '../styles/index.scss';

const store = configureStore();

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById("root"));
