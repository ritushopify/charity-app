import React from "react";
import StartPage from "../components/Starting/StartPage";
import HomePage from "../components/HomePageTest";
import MainPage from "../components/MainPage";
import ShowCharities from "../components/ShowCharities";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/charities" component={MainPage} />
        <Route exact path="/charities/home" render={() => <HomePage />} />
        <Route
          exact
          path="/charities/:apiId"
          render={props => {
            return <ShowCharities {...props} />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default React.memo(Routes);
