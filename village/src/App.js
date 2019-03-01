import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from 'styled-components'
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
        background-color:  rgb(109, 147, 250);
        color: #fcfcfc;
      }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
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
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
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
