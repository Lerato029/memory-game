/* =====================================================The App Component============================================== */
/* import statement to allow me to create the App component */
import React from "react";

/* importing the following to define the website's navigation*/
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* importing css... */
import "./App.css";

/* importing components... */
import Header from "./components/Header";
import Info from "./components/Info";
import Game from "./components/Game";

//the App function is where the navigation in the website is defined through the browser router
function App() {
  return (
    <BrowserRouter>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <Switch>
        <Route exact={true} path="/" component={Header} />
        <Route path="/info" component={Info} />
        <Route path="/memory-game" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
//exporting App component
