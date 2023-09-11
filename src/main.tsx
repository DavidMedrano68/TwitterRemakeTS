import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AuthContextProvider from "./context/authContext.js";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
  </React.StrictMode>
);
