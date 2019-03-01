import React, { Component } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  background-color: #cff4a1;
  height: 200px;

  form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin: 10px auto;

    input {
      border: none;
      height: 30px;
      width: 200px;
      font-size: 18px;
      background-color: #cff4a1;
      border-bottom: 3px solid #416bf4;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 100px;
      margin-bottom: 10px;
      border: none;
      background-color: #fff;
      font-size: 12px;
      cursor: pointer;

      &:hover {
        background-color: rgb(109, 147, 250);
      }
    }
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: this.props.activeSmurf || {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.activeSmurf) {
      this.props.update(e, this.state.smurf);
    } else {
      this.props.addSmurf(e, this.state.smurf);
      this.setState({
        smurf: {
          name: "",
          age: "",
          height: ""
        }
      });
    }
  };

  // handleInputChange = e => {
  //   this.setState({
  //     smurf: {
  //       name: e.target.value,
  //       age: e.target.value,
  //       height: e.target.value
  //     }
  //   });
  // };

  changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [ev.target.name]: value
      }
    }));
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            type='number'
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormWrapper>
    );
  }
}

export default SmurfForm;
