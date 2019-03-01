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
      border:none;
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
        background-color:  rgb(109, 147, 250);
      }

    }
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(e, newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <FormWrapper>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </FormWrapper>
    );
  }
}

export default SmurfForm;
