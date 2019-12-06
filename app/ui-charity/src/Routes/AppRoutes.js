import React from "react";
import StartPage from "../components/Starting/StartPage";
import MainPage from "../components/MainPage";
import ShowCharities from "../components/ShowCharities";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/charities/:id" component={ShowCharities} />} />
      </Switch>
    </BrowserRouter>
  );
}
