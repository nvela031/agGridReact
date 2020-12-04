import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as postsAction from "../actions/PostsAction";

const mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (posts) => dispatch(postsAction.updatePosts(posts)),
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.posts,
  };
};

class Posts extends Component {
  POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  gridApi;
  gridColumnApi;
  columnDefs = [
    {
      headerName: "ID",
      field: "id",
      sortable: true,
      width: 100,
      checkboxSelection: true,
    },
    {
      headerName: "Title",
      field: "title",
      sortable: true,
      width: 300,
      editable: true,
    },
    {
      headerName: "Body",
      field: "body",
      sortable: true,
      width: 400,
    },
    {
      headerName: "Custom Number",
      field: "customNumber",
      sortable: true,
      width: 300,
    },
    {
      headerName: "Custom Number Clone",
      field: "customNumberClone",
      sortable: true,
      width: 300,
      editable: true,
      singleClickEdit: true,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      columnDefs: this.columnDefs,
      rowSelection: "multiple",
      suppressRowClickSelection: true,
      disableSubmit: true,
      showToast: false,
      toastId: "NA",
    };

    this.onGridReady.bind(this);
    this.onRowSelected.bind(this);
    this.reviewPosts.bind(this);
    this.navigateTo.bind(this);
    this.autoSelectRows.bind(this);
    this.onCellEdited.bind(this);
  }

  componentDidMount = () => {
    fetch(this.POSTS_URL)
      .then((result) => result.json())
      .then((rowData) => {
        rowData.map((row) => {
          return {
            ...(row.customNumber = Math.floor(1000 + Math.random() * 900)),
          };
        });
        this.setState({
          rowData: rowData,
        });

        if (this.props.posts.length > 0) {
          this.autoSelectRows(this.props.posts);
        }
      });
    if (this.props.posts.length > 0) {
      this.setState({
        showToast: true,
      });
      const reLoadedToastId = toast.info(
        `${this.props.posts.length} post(s) selected to review`
      );
      this.setState({
        toastId: reLoadedToastId,
      });
    }
  };

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log("Grid Ready");
  };

  autoSelectRows = (posts) => {
    this.gridApi.forEachNode((node) => {
      posts.forEach((post) => {
        if (post.id === node.data.id) {
          node.setSelected(true);
        }
      });
    });
  };

  onRowSelected = () => {
    const selectedRows = this.gridApi.getSelectedRows();
    this.props.updatePosts(
      selectedRows.map((val) => {
        if (val.customNumberClone && val.customNumberClone !== "") {
          return {
            ...val,
            customNumber: val.customNumber - Number(val.customNumberClone),
          };
        } else if (val.customNumberClone && val.customNumberClone === "") {
          return val;
        } else {
          return { ...val, customNumberClone: val.customNumber };
        }
      })
    );
    if (this.state.toastId !== "NA") {
      toast.dismiss(this.state.toastId);
    }
    const currentToastId = toast.info(
      `${this.props.posts.length} post(s) selected to review`
    );
    if (selectedRows.length === 0) {
      toast.dismiss(currentToastId);
      this.setState({
        disableSubmit: selectedRows.length === 0,
        toastId: "NA",
      });
    } else {
      this.setState({
        disableSubmit: selectedRows.length === 0,
        toastId: currentToastId,
      });
    }
  };

  reviewPosts = (event) => {
    event.preventDefault();
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((post) => post.data);
    const selectedDataString = selectedData
      .map((post) => "id: " + post.id + " title: " + post.title)
      .join("\n");
    alert(`selected Posts: ${selectedDataString}`);
    // this.navigateTo("review");
  };

  navigateTo = (destination) => {
    this.props.history.push(`/${destination}`);
  };

  onCellEdited = (event) => {
    event.node.setSelected(event.value !== "");
  };

  render = () => {
    return (
      <React.Fragment>
        <h1>Posts</h1>
        <ToastContainer
          position='top-right'
          autoClose={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
          closeButton={false}
          onClick={() => this.navigateTo("review")}
        />
        <div
          style={{ height: "700px", width: "100%" }}
          className='ag-theme-balham'
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            rowSelection={this.state.rowSelection}
            defaultColDef={this.state.defaultColDef}
            onGridReady={this.onGridReady}
            onRowSelected={this.onRowSelected}
            onCellEditingStopped={this.onCellEdited}
            suppressRowClickSelection={this.state.suppressRowClickSelection}
          ></AgGridReact>
        </div>
        <div style={{ padding: 15 }}>
          <Button
            type='button'
            disabled={this.state.disableSubmit}
            onClick={this.reviewPosts}
          >
            Submit
          </Button>
        </div>
      </React.Fragment>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Posts));
