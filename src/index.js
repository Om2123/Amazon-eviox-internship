import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StateProvider } from "./States/StateProvider";

import reducer from "./States/reducer";
import { initialState } from "./States/reducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
