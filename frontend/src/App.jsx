import React from "react";
import { Index as Route } from "./routes";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import "react-country-state-city/dist/react-country-state-city.css";
import "react-multi-carousel/lib/styles.css";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster autoClose={2000} />
      <Route />
    </>
  );
}

export default App;
