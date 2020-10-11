import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./hooks/users";
import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
