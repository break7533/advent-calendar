import { Route } from "react-router";
import React from "react";

import App from "./containers/App/App";

//Redux Smart
import Calendar from "./containers/Calendar/Calendar";
import Calendars from "./containers/Calendars/Calendars";
import Home from "./containers/Home/HomeContainer";

//Redux Dumb
import Error from "./components/Error/Error";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="/" component={Home} />
      <Route path="calendars/:email" component={Calendars} />
      <Route path="calendar/:id" component={Calendar} />
      <Route path="*" component={Error}/>
  </Route>
);
