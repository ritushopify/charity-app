import React from "react";
import StartPage from "./Starting/StartPage";
import MainPage from "./MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}
