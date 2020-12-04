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
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     columnDef: [
  //       {
  //         headerName: "title",
  //         field: "title",
  //         sortable: true,
  //         filter: true,
  //         checkboxSelection: true,
  //       },
  //       { headerName: "artist", field: "artist", sortable: true, filter: true },
  //       { headerName: "url", field: "url", sortable: true, filter: true },
  //       { headerName: "image", field: "image", sortable: true, filter: true },
  //       {
  //         headerName: "thumbnail_image",
  //         field: "thumbnail_image",
  //         sortable: true,
  //         filter: true,
  //       },
  //     ],
  //     rowData: [],
  //     // [
  //     //   { make: "Toyota", model: "Celica", price: 43000 },
  //     //   { make: "Ford", model: "Mustang", price: 32000 },
  //     //   { make: "Porsche", model: "Boxter", price: 50000 },
  //     // ],
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://rallycoding.herokuapp.com/api/music_albums")
  //     .then((res) => res.json())
  //     .then((rowData) => this.setState({ rowData: rowData }))
  //     .catch((err) => console.log(err));
  // }

  // onButtonClick = () => {
  //   const selectedNodes = this.gridApi.getSelectedNodes();
  //   const selectedData = selectedNodes.map((node) => node.data);
  //   const selectedDataStringPresentation = selectedData
  //     .map((node) => node.title + " " + node.artist)
  //     .join(",");
  //   alert(`Selected Nodes: ${selectedDataStringPresentation}`);
  // };

  // render() {
  //   return (
  //     <div
  //       className='ag-theme-balham'
  //       style={{
  //         width: 600,
  //         height: 600,
  //         justifyContent: "center",
  //       }}
  //     >
  //       <button
  //         style={{
  //           verticalAlign: 20,
  //         }}
  //         onClick={this.onButtonClick}
  //       >
  //         Get Selected Rows
  //       </button>
  //       <AgGridReact
  //         rowData={this.state.rowData}
  //         columnDefs={this.state.columnDef}
  //         rowSelection='multiple'
  //         onGridReady={(params) => (this.gridApi = params.api)}
  //       ></AgGridReact>
  //       <div style={{ paddingTop: 15 }}>
  //         <Table />
  //       </div>
  //     </div>
  //   );
  // }

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
