import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import "./App.css";

import { ROUTES } from "./routes";

import Header from "./components/Header";
import Counter from "./containers/Counter";
import Employees from "./containers/Employees/index";

const App: React.FC = () => {
  return (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <div className="container">
          <Header />
          <Switch>
            <Route path={`(${ROUTES.COUNTER}|/)`}>
              <Counter />
            </Route>
            <Route path={ROUTES.EMPLOYEES}>
              <Employees />
            </Route>
          </Switch>
        </div>
      </SnackbarProvider>
    </Router>
  );
};

export default App;
