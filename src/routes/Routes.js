import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Pages
import ShowPage from "../pages/ShowPage";
import DetailPage from "../pages/DetailPage";
import ErrorPage from "../pages/ErrorPage";

export default function Routes() {
  return (
    <Switch>
      {<Redirect exact from="/" to="/show" />}
      <Route exact path="/show" component={ShowPage} />
      <Route
        exact
        path="/shows/:id1/season/:id2/episode/:id3"
        component={DetailPage}
      />
      <Route exact path="/error" component={ErrorPage} />
      {/* // * Add more routes here  */}

      {/* // * Redirect to `/error` when route is not recognized*/}
      <Redirect to="/error" />
    </Switch>
  );
}
