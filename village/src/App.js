import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

const NavBar = styled.nav`
  max-width: 100%;
  background-color: #4286f4;
  padding: 30px;

  button {
    width: 100px;
    height: 50px;
    margin: 10px 10px;
    border: none;
    background-color: #fcfcfc;
    font-size: 16px;
    border-radius: 100px;
    cursor: pointer;

    &:hover {
      background-color: #485b5e;
      color: #fcfcfc;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res =>
        this.setState({
          smurfs: res.data
        })
      )
      .catch(err => console.log(err));
  };

  setUpdateForm = (e, smurf) => {
    e.preventDefault();
    this.setState({
      activeSmurf: smurf
    });
    this.props.history.push("/smurf-form");
  };

  updateSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res => {
        this.setState({
          activeSmurf: null,
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <NavBar>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/smurf-form">
            <button>Add Smurf</button>
          </NavLink>
        </NavBar>

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              delete={this.deleteSmurf}
              update={this.setUpdateForm}
            />
          )}
        />

        <Route
          path="/smurf-form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              activeSmurf={this.state.activeSmurf}
              update={this.updateSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

//NOTES
// add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
// Notice what your map function is looping over and returning inside of Smurfs.
// You'll need to make sure you have the right properties on state and pass them down to props.
