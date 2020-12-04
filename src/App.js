import React, { Component } from "react";
import "./App.css";
// import Table from "./Table";

// import { AgGridReact, AgGridColumn } from "ag-grid-react";

// // import "ag-grid-enterprise";

// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { HashRouter, Route, Switch } from "react-router-dom";
import PostsPage from "./pages/PostsPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/' exact component={PostsPage} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
